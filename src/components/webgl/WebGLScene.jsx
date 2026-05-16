import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import {
  planeVertex,
  planeFragment,
  pointsVertex,
  pointsFragment,
} from './shaders';

/* ---------------- shared cursor + scroll uniforms ---------------- */
const sharedUniforms = {
  uTime: { value: 0 },
  uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  uMouseWorld: { value: new THREE.Vector2(0, 0) },
  uScroll: { value: 0 },
  uResolution: { value: new THREE.Vector2(1, 1) },
};

function useInputs() {
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));
  const target = useRef(new THREE.Vector2(0.5, 0.5));
  const scroll = useRef(0);
  const scrollTarget = useRef(0);

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = e.clientX / window.innerWidth;
      target.current.y = 1.0 - e.clientY / window.innerHeight;
    };
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollTarget.current = Math.min(window.scrollY / window.innerHeight, 6);
    };
    onScroll();
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { mouse, target, scroll, scrollTarget };
}

/* ---------------- fullscreen shader plane ---------------- */
function ShaderBackground({ uniforms }) {
  const { size } = useThree();

  useEffect(() => {
    uniforms.uResolution.value.set(size.width, size.height);
  }, [size, uniforms]);

  // Fill the entire view regardless of camera FOV — use a separate quad in NDC space
  return (
    <mesh position={[0, 0, -10]} frustumCulled={false} renderOrder={-1}>
      <planeGeometry args={[60, 35]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={planeVertex}
        fragmentShader={planeFragment}
        depthWrite={false}
        transparent={false}
      />
    </mesh>
  );
}

/* ---------------- GPU particle field ---------------- */
function ParticleField({ uniforms, count = 9000 }) {
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const origins = new Float32Array(count * 3);
    const rands = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Distribute in a flattened ellipsoid for a cinematic field
      const u = Math.random();
      const v = Math.random();
      const theta = u * Math.PI * 2;
      const phi = Math.acos(2 * v - 1);
      // Torus-knot-ish distribution
      const r = 2.6 + Math.random() * 2.0;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.65;
      const z = (r * Math.cos(phi)) * 0.8 - 1.2;

      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      origins[i * 3 + 0] = x;
      origins[i * 3 + 1] = y;
      origins[i * 3 + 2] = z;
      rands[i] = Math.random();
    }
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    g.setAttribute('aOrigin', new THREE.BufferAttribute(origins, 3));
    g.setAttribute('aRand', new THREE.BufferAttribute(rands, 1));
    return g;
  }, [count]);

  const mat = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        ...uniforms,
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uSize: { value: 1.6 },
      },
      vertexShader: pointsVertex,
      fragmentShader: pointsFragment,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, [uniforms]);

  const ref = useRef();
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.05;
    ref.current.rotation.x = Math.sin(uniforms.uTime.value * 0.1) * 0.08;
  });

  return <points ref={ref} geometry={geom} material={mat} />;
}

/* ---------------- camera + uniform updater ---------------- */
function SceneUpdater({ uniforms, inputs }) {
  const { camera, gl } = useThree();
  useFrame((state, dt) => {
    // Lerp mouse + scroll for smoothness
    inputs.mouse.current.lerp(inputs.target.current, Math.min(1, dt * 6));
    inputs.scroll.current += (inputs.scrollTarget.current - inputs.scroll.current) * Math.min(1, dt * 4);

    uniforms.uTime.value = state.clock.getElapsedTime();
    uniforms.uMouse.value.copy(inputs.mouse.current);
    uniforms.uScroll.value = inputs.scroll.current;

    // Subtle camera parallax from mouse
    const mx = (inputs.mouse.current.x - 0.5) * 1.2;
    const my = (inputs.mouse.current.y - 0.5) * 0.7;
    camera.position.x += (mx - camera.position.x) * Math.min(1, dt * 1.5);
    camera.position.y += (my - camera.position.y) * Math.min(1, dt * 1.5);
    // Scroll dollies the camera slightly forward
    const zTarget = 6.0 - inputs.scroll.current * 0.6;
    camera.position.z += (zTarget - camera.position.z) * Math.min(1, dt * 2);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ---------------- main exported scene ---------------- */
export default function WebGLScene() {
  const uniforms = useMemo(() => sharedUniforms, []);
  const inputs = useInputs();
  const [ready, setReady] = useState(false);

  // Skip WebGL on low-end / reduced motion users.
  const enabled = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return false;
    // Disable on very small viewports for perf
    return true;
  }, []);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!enabled || !ready) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.95 }}
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.6]}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        camera={{ position: [0, 0, 6], fov: 55, near: 0.1, far: 100 }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#0a0a0b'), 1);
        }}
      >
        <SceneUpdater uniforms={uniforms} inputs={inputs} />
        <ShaderBackground uniforms={uniforms} />
        <ParticleField uniforms={uniforms} count={window.innerWidth < 768 ? 3000 : 7000} />

        <EffectComposer multisampling={0} disableNormalPass>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.36}
            luminanceSmoothing={0.4}
            mipmapBlur
          />
          <Vignette eskil={false} offset={0.18} darkness={0.55} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
