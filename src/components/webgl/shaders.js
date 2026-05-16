// GLSL shaders for the WebGL scene.
// Style: dark ink base, ember-tinted flowing noise, subtle paper highlights.
// Inspired by Active Theory / Lusion-style ambient WebGL fields.

export const noiseChunk = /* glsl */ `
  // 2D simplex noise — Ian McEwan / Ashima Arts (public domain)
  vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec2 mod289(vec2 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                   + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  float fbm(vec2 p){
    float a = 0.5;
    float sum = 0.0;
    for (int i = 0; i < 5; i++) {
      sum += a * snoise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return sum;
  }
`;

export const planeVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const planeFragment = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScroll;
  uniform vec2 uResolution;
  varying vec2 vUv;

  ${noiseChunk}

  void main(){
    vec2 uv = vUv;
    // Maintain aspect ratio so noise doesn't squash
    vec2 p = (uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0) * 2.4;

    float t = uTime * 0.06;
    vec2 mouseOff = (uMouse - 0.5) * vec2(uResolution.x / uResolution.y, 1.0) * 2.0;

    // Mouse warps the field
    float md = length(p - mouseOff);
    vec2 warp = (mouseOff - p) * 0.18 * exp(-md * 1.4);
    p += warp;

    // Layered noise
    float n1 = fbm(p + vec2(t, -t * 0.5));
    float n2 = fbm(p * 1.6 + n1 + vec2(-t * 0.7, t * 0.3));
    float n3 = fbm(p * 2.2 - n2 + uScroll * 0.5);

    float f = (n1 * 0.55 + n2 * 0.3 + n3 * 0.15);

    // Palette
    vec3 ink    = vec3(0.039, 0.039, 0.043);
    vec3 deep   = vec3(0.063, 0.055, 0.070);
    vec3 ember  = vec3(1.000, 0.357, 0.122);
    vec3 paper  = vec3(0.921, 0.902, 0.863);

    // Soft base gradient
    vec3 base = mix(ink, deep, smoothstep(-0.4, 0.6, f));

    // Ember bands where noise peaks
    float emberMask = smoothstep(0.25, 0.85, f);
    emberMask *= smoothstep(0.0, 0.7, length(uv - 0.5)); // edge weighting
    base += ember * emberMask * 0.32;

    // Paper micro-highlights at thin contour
    float contour = abs(fract(f * 4.0 + uScroll * 0.5) - 0.5);
    contour = smoothstep(0.06, 0.0, contour) * 0.12;
    base += paper * contour;

    // Mouse glow
    float glow = exp(-md * 2.6) * 0.22;
    base += ember * glow;

    // Vignette
    vec2 c = uv - 0.5;
    float v = 1.0 - dot(c, c) * 1.4;
    base *= clamp(v, 0.0, 1.0);

    // Subtle film grain
    float g = fract(sin(dot(uv * uResolution, vec2(12.9898, 78.233))) * 43758.5453);
    base += (g - 0.5) * 0.018;

    gl_FragColor = vec4(base, 1.0);
  }
`;

export const pointsVertex = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform float uScroll;
  uniform vec2 uMouse;
  uniform float uPixelRatio;
  uniform float uSize;
  attribute float aRand;
  attribute vec3 aOrigin;
  varying float vAlpha;
  varying float vEmber;

  ${noiseChunk}

  void main(){
    vec3 pos = aOrigin;

    // Curl-noise-ish displacement using fbm field
    float t = uTime * 0.18;
    float n = fbm(pos.xy * 0.55 + t) + fbm(pos.yz * 0.55 - t * 0.7);
    vec3 disp = vec3(
      sin(n * 3.14 + aRand * 6.28),
      cos(n * 2.1 - aRand * 3.14),
      sin(n * 1.7 + t)
    ) * (0.45 + aRand * 0.6);

    pos += disp;

    // Mouse repulsion in XY (subtle)
    vec2 mouseW = uMouse * 6.0;
    vec2 toMouse = pos.xy - mouseW;
    float d = length(toMouse);
    pos.xy += normalize(toMouse + 0.0001) * exp(-d * 0.6) * 0.7;

    // Scroll-driven Z drift toward camera
    pos.z += uScroll * 2.2;

    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPos;

    float baseSize = uSize * (0.5 + aRand * 0.9);
    gl_PointSize = baseSize * uPixelRatio * (12.0 / -mvPos.z);

    vAlpha = clamp(0.5 + aRand * 0.5, 0.0, 1.0);
    vEmber = step(0.85, aRand); // ~15% of particles are ember-colored
  }
`;

export const pointsFragment = /* glsl */ `
  precision highp float;
  varying float vAlpha;
  varying float vEmber;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d) * vAlpha;

    vec3 paper = vec3(0.921, 0.902, 0.863);
    vec3 ember = vec3(1.000, 0.357, 0.122);
    vec3 col = mix(paper, ember, vEmber);

    gl_FragColor = vec4(col, a * 0.85);
  }
`;
