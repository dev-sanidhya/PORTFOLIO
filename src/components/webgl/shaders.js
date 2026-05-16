// GLSL shaders for the hero WebGL scene.
// Style: restrained monochrome. Slow flowing dark field with paper highlights.
// No saturated colors. Lives behind the hero only.

export const noiseChunk = /* glsl */ `
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
    for (int i = 0; i < 4; i++) {
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

// Monochrome flowing field. No saturated colors. Reads as "atmosphere", not "art".
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
    vec2 p = (uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0) * 1.8;

    float t = uTime * 0.035; // very slow

    // Soft cursor influence
    vec2 mouseOff = (uMouse - 0.5) * vec2(uResolution.x / uResolution.y, 1.0) * 1.6;
    float md = length(p - mouseOff);

    float n1 = fbm(p + vec2(t, -t * 0.5));
    float n2 = fbm(p * 1.4 + n1 * 0.4 + vec2(-t * 0.6, t * 0.2));

    float f = n1 * 0.6 + n2 * 0.4;

    // Restrained monochrome palette
    vec3 ink   = vec3(0.039, 0.039, 0.043);
    vec3 deep  = vec3(0.075, 0.075, 0.082);
    vec3 paper = vec3(0.921, 0.902, 0.863);

    // Base gradient — ink to a touch warmer
    vec3 col = mix(ink, deep, smoothstep(-0.5, 0.8, f));

    // Subtle paper highlight where noise peaks (very low intensity)
    float hl = smoothstep(0.55, 1.0, f);
    col += paper * hl * 0.06;

    // Very faint cursor glow
    float glow = exp(-md * 3.5) * 0.05;
    col += paper * glow;

    // Vignette
    vec2 c = uv - 0.5;
    float v = 1.0 - dot(c, c) * 1.1;
    col *= clamp(v, 0.0, 1.0);

    // Film grain
    float g = fract(sin(dot(uv * uResolution, vec2(12.9898, 78.233))) * 43758.5453);
    col += (g - 0.5) * 0.012;

    gl_FragColor = vec4(col, 1.0);
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

  ${noiseChunk}

  void main(){
    vec3 pos = aOrigin;

    // Gentle FBM displacement — much smaller amplitude than before
    float t = uTime * 0.08;
    float n = fbm(pos.xy * 0.35 + t);
    vec3 disp = vec3(
      sin(n * 2.0 + aRand * 6.28),
      cos(n * 1.6 - aRand * 3.14),
      sin(n * 1.2 + t)
    ) * (0.18 + aRand * 0.22);

    pos += disp;

    // Light mouse repulsion in XY
    vec2 mouseW = (uMouse - 0.5) * 8.0;
    vec2 toMouse = pos.xy - mouseW;
    float d = length(toMouse);
    pos.xy += normalize(toMouse + 0.0001) * exp(-d * 0.9) * 0.35;

    // Gentle scroll-driven Z drift
    pos.z += uScroll * 0.6;

    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPos;

    float baseSize = uSize * (0.4 + aRand * 0.7);
    gl_PointSize = baseSize * uPixelRatio * (11.0 / -mvPos.z);

    vAlpha = 0.35 + aRand * 0.4;
  }
`;

export const pointsFragment = /* glsl */ `
  precision highp float;
  varying float vAlpha;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d) * vAlpha;
    // Pure paper / monochrome
    gl_FragColor = vec4(0.921, 0.902, 0.863, a * 0.55);
  }
`;
