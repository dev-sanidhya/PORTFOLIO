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

const sharedUniforms = {
  uTime: { value: 0 },
  uMouse: { value: new THREE.Vector2(0.5, 0.5) },
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
      scrollTarget.current = Math.min(window.scrollY / window.innerHeight, 1.5);
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

function ShaderBackground({ uniforms }) {
  const { size } = useThree();

  useEffect(() => {
    uniforms.uResolution.value.set(size.width, size.height);
  }, [size, uniforms]);

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

function ParticleField({ uniforms, count = 3500 }) {
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const origins = new Float32Array(count * 3);
    const rands = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Distribute in a wide, flat slab so it reads as "depth atmosphere"
      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 9;
      const z = (Math.random() - 0.5) * 4 - 1.5;

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
        uSize: { value: 1.2 },
      },
      vertexShader: pointsVertex,
      fragmentShader: pointsFragment,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, [uniforms]);

  return <points geometry={geom} material={mat} />;
}

function SceneUpdater({ uniforms, inputs }) {
  const { camera } = useThree();
  useFrame((state, dt) => {
    inputs.mouse.current.lerp(inputs.target.current, Math.min(1, dt * 5));
    inputs.scroll.current += (inputs.scrollTarget.current - inputs.scroll.current) * Math.min(1, dt * 4);

    uniforms.uTime.value = state.clock.getElapsedTime();
    uniforms.uMouse.value.copy(inputs.mouse.current);
    uniforms.uScroll.value = inputs.scroll.current;

    // Very subtle camera parallax
    const mx = (inputs.mouse.current.x - 0.5) * 0.5;
    const my = (inputs.mouse.current.y - 0.5) * 0.3;
    camera.position.x += (mx - camera.position.x) * Math.min(1, dt * 1.2);
    camera.position.y += (my - camera.position.y) * Math.min(1, dt * 1.2);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function WebGLScene() {
  const uniforms = useMemo(() => sharedUniforms, []);
  const inputs = useInputs();
  const [ready, setReady] = useState(false);

  const enabled = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return !reduce;
  }, []);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!enabled || !ready) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.6]}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance',
          stencil: false,
        }}
        camera={{ position: [0, 0, 6], fov: 55, near: 0.1, far: 100 }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#0a0a0b'), 1);
        }}
      >
        <SceneUpdater uniforms={uniforms} inputs={inputs} />
        <ShaderBackground uniforms={uniforms} />
        <ParticleField uniforms={uniforms} count={window.innerWidth < 768 ? 1800 : 3500} />

        <EffectComposer multisampling={0} disableNormalPass>
          <Bloom
            intensity={0.35}
            luminanceThreshold={0.5}
            luminanceSmoothing={0.5}
            mipmapBlur
          />
          <Vignette eskil={false} offset={0.22} darkness={0.6} />
        </EffectComposer>
      </Canvas>

      {/* Soft gradient fade-out at the bottom so the scene blends into the page */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0a0a0b)',
        }}
      />
    </div>
  );
}
