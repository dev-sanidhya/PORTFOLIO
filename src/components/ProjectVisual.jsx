import { motion } from 'framer-motion';

/**
 * Project-specific abstract SVG visuals.
 * All paper-toned with ember accents — sits on top of the per-project gradient mesh.
 * Each `kind` returns a distinct, on-brand piece tied to what the project actually does.
 */

const PAPER = 'rgba(235, 230, 220, 0.85)';
const PAPER_DIM = 'rgba(235, 230, 220, 0.35)';
const EMBER = '#ff5b1f';

/* ---------- 1. CoFound — 6 advisors orbiting around a center ---------- */
function AgentsOrbit() {
  const advisors = [
    { label: 'Market', a: 0 },
    { label: 'Devil', a: 60 },
    { label: 'Growth', a: 120 },
    { label: 'ICP', a: 180 },
    { label: 'GTM', a: 240 },
    { label: 'Investor', a: 300 },
  ];
  const r = 78;
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full">
      <defs>
        <radialGradient id="cofound-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={EMBER} stopOpacity="0.55" />
          <stop offset="100%" stopColor={EMBER} stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Connection lines */}
      {advisors.map((adv, i) => {
        const rad = (adv.a * Math.PI) / 180;
        const x = 120 + Math.cos(rad) * r;
        const y = 100 + Math.sin(rad) * r * 0.7;
        return (
          <motion.line
            key={i}
            x1="120" y1="100" x2={x} y2={y}
            stroke={PAPER_DIM} strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.15, 0.45, 0.15] }}
            transition={{ duration: 2.4, delay: i * 0.15, repeat: Infinity, repeatDelay: 0.6 }}
          />
        );
      })}
      {/* Core */}
      <circle cx="120" cy="100" r="32" fill="url(#cofound-core)" />
      <circle cx="120" cy="100" r="6" fill={EMBER} />
      {/* Advisor nodes */}
      {advisors.map((adv, i) => {
        const rad = (adv.a * Math.PI) / 180;
        const x = 120 + Math.cos(rad) * r;
        const y = 100 + Math.sin(rad) * r * 0.7;
        return (
          <g key={adv.label}>
            <motion.circle
              cx={x} cy={y} r="4"
              fill={PAPER}
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.6, delay: i * 0.2, repeat: Infinity }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            />
            <text
              x={x} y={y + 16}
              fill={PAPER_DIM} fontSize="7"
              textAnchor="middle"
              fontFamily="'JetBrains Mono', monospace"
              letterSpacing="0.1em"
            >
              {adv.label.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- 2. Axiom — stacked module/code blocks ---------- */
function CodeStack() {
  const lines = [
    { w: 70, label: 'research-agent' },
    { w: 84, label: 'code-reviewer' },
    { w: 58, label: 'writer-claude' },
    { w: 76, label: 'business-analyst' },
    { w: 52, label: 'kpi-tracker' },
    { w: 68, label: '...18 agents' },
  ];
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full">
      <g transform="translate(28, 24)">
        {lines.map((l, i) => (
          <g key={i}>
            <motion.rect
              x="0" y={i * 24} width={l.w + 60} height="16" rx="2"
              fill={PAPER} fillOpacity="0.06" stroke={PAPER_DIM} strokeWidth="0.5"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
            />
            <motion.rect
              x="8" y={i * 24 + 6} width="4" height="4" rx="0.5"
              fill={i === 0 ? EMBER : PAPER_DIM}
              animate={{ opacity: i === 0 ? [0.4, 1, 0.4] : 0.6 }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            <text
              x="22" y={i * 24 + 12}
              fill={PAPER} fontSize="7"
              fontFamily="'JetBrains Mono', monospace"
              letterSpacing="0.05em"
              opacity="0.8"
            >
              {l.label}
            </text>
            <text
              x={l.w + 50} y={i * 24 + 12}
              fill={PAPER_DIM} fontSize="6"
              fontFamily="'JetBrains Mono', monospace"
              textAnchor="end"
            >
              READY
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

/* ---------- 3. FinSight — multi-line market sentiment chart ---------- */
function ChartMulti() {
  // Pseudo-deterministic line points
  const series = [
    { color: PAPER, w: 1.4, vals: [0.5, 0.6, 0.4, 0.55, 0.7, 0.65, 0.8, 0.72, 0.85, 0.78, 0.9] },
    { color: EMBER, w: 1.6, vals: [0.4, 0.42, 0.5, 0.48, 0.58, 0.55, 0.62, 0.7, 0.66, 0.75, 0.82] },
    { color: PAPER_DIM, w: 1.0, vals: [0.6, 0.55, 0.62, 0.5, 0.45, 0.52, 0.48, 0.55, 0.5, 0.58, 0.6] },
  ];
  const W = 220, H = 130;
  const step = W / (series[0].vals.length - 1);
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full">
      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75, 1].map((g, i) => (
        <line
          key={i}
          x1="10" x2={10 + W} y1={30 + g * H} y2={30 + g * H}
          stroke={PAPER_DIM} strokeOpacity="0.25" strokeWidth="0.4"
          strokeDasharray="2 4"
        />
      ))}
      {/* Lines */}
      {series.map((s, idx) => {
        const d = s.vals
          .map((v, i) => `${i === 0 ? 'M' : 'L'} ${10 + i * step} ${30 + (1 - v) * H}`)
          .join(' ');
        return (
          <motion.path
            key={idx}
            d={d}
            fill="none"
            stroke={s.color}
            strokeWidth={s.w}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 + idx * 0.4, delay: idx * 0.3, ease: 'easeOut' }}
          />
        );
      })}
      {/* Latest point markers */}
      {series.map((s, idx) => {
        const i = s.vals.length - 1;
        const x = 10 + i * step;
        const y = 30 + (1 - s.vals[i]) * H;
        return (
          <motion.circle
            key={idx}
            cx={x} cy={y} r="3"
            fill={s.color}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: idx * 0.3 }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          />
        );
      })}
      {/* Labels */}
      <text x="10" y="20" fill={PAPER_DIM} fontSize="7" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.15em">
        SENT · NEWS · PRICE
      </text>
      <text x={W} y="20" fill={EMBER} fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="end" letterSpacing="0.15em">
        LIVE
      </text>
    </svg>
  );
}

/* ---------- 4. DegenAI — candlestick fragments ---------- */
function Candles() {
  // Deterministic candle data: [openY, closeY, highY, lowY, bullish]
  const candles = [
    [80, 60, 50, 90, true],
    [62, 75, 55, 88, false],
    [76, 55, 42, 82, true],
    [56, 48, 40, 70, true],
    [49, 65, 38, 78, false],
    [66, 50, 42, 82, true],
    [51, 38, 30, 68, true],
    [38, 50, 28, 70, false],
    [50, 32, 22, 60, true],
    [32, 28, 18, 50, true],
    [28, 42, 22, 58, false],
    [42, 30, 20, 55, true],
  ];
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full">
      <text x="14" y="22" fill={PAPER_DIM} fontSize="7" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.15em">
        WETH / USDC · BASE
      </text>
      <text x="226" y="22" fill={EMBER} fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="end" fontWeight="600">
        +12.4%
      </text>
      <g transform="translate(14, 40)">
        {candles.map(([o, c, h, l, bull], i) => {
          const x = i * 18;
          const top = Math.min(o, c) + 24;
          const bot = Math.max(o, c) + 24;
          const color = bull ? PAPER : EMBER;
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <line x1={x + 6} x2={x + 6} y1={h + 24} y2={l + 24} stroke={color} strokeWidth="1" strokeOpacity="0.6" />
              <rect x={x + 2} y={top} width="8" height={Math.max(2, bot - top)} fill={color} fillOpacity={bull ? 0.7 : 0.85} />
            </motion.g>
          );
        })}
      </g>
      {/* Status pill */}
      <g transform="translate(14, 168)">
        <rect width="120" height="14" rx="7" fill={PAPER} fillOpacity="0.08" />
        <circle cx="9" cy="7" r="2.5" fill={EMBER}>
          <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="17" y="10" fill={PAPER} fontSize="7" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.15em">
          DCA · LADDER ACTIVE
        </text>
      </g>
    </svg>
  );
}

/* ---------- 5. MEDUSA — face landmark mesh ---------- */
function FaceMesh() {
  // 478 MediaPipe-ish landmarks simplified to ~60 representative points around a face oval
  const points = [];
  // Face outline
  const ovalCount = 22;
  for (let i = 0; i < ovalCount; i++) {
    const t = (i / ovalCount) * Math.PI * 2;
    const x = 120 + Math.cos(t) * 60;
    const y = 100 + Math.sin(t) * 78;
    points.push({ x, y, kind: 'oval' });
  }
  // Eyes
  for (let i = 0; i < 8; i++) {
    const t = (i / 8) * Math.PI * 2;
    points.push({ x: 95 + Math.cos(t) * 14, y: 85 + Math.sin(t) * 6, kind: 'eye' });
    points.push({ x: 145 + Math.cos(t) * 14, y: 85 + Math.sin(t) * 6, kind: 'eye' });
  }
  // Nose
  for (let i = 0; i < 4; i++) {
    points.push({ x: 120, y: 95 + i * 6, kind: 'nose' });
  }
  // Lips
  for (let i = 0; i < 12; i++) {
    const t = (i / 12) * Math.PI * 2;
    points.push({ x: 120 + Math.cos(t) * 18, y: 138 + Math.sin(t) * 6, kind: 'lip' });
  }
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full">
      <text x="14" y="20" fill={PAPER_DIM} fontSize="7" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.15em">
        MEDIAPIPE · 478 LANDMARKS
      </text>
      {/* Connection mesh (thin lines between nearby oval points) */}
      {points.filter(p => p.kind === 'oval').map((p, i, arr) => {
        const next = arr[(i + 1) % arr.length];
        return (
          <line
            key={`o-${i}`}
            x1={p.x} y1={p.y} x2={next.x} y2={next.y}
            stroke={PAPER_DIM} strokeWidth="0.3"
          />
        );
      })}
      {/* Points */}
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x} cy={p.y}
          r={p.kind === 'lip' ? 1.4 : 1.1}
          fill={p.kind === 'lip' ? EMBER : PAPER}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: (i % 20) * 0.04 }}
        />
      ))}
      {/* Scanning line */}
      <motion.line
        x1="60" x2="180" y1="100" y2="100"
        stroke={EMBER} strokeWidth="0.8" strokeOpacity="0.7"
        animate={{ y1: [40, 160, 40], y2: [40, 160, 40] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  );
}

/* ---------- 6. PolicyLens — document stack with embedding lines ---------- */
function DocStack() {
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full">
      <text x="14" y="20" fill={PAPER_DIM} fontSize="7" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.15em">
        MILVUS VECTOR DB · RAG
      </text>
      {/* Stacked docs */}
      {[0, 1, 2, 3].map(i => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          transform={`translate(${30 + i * 4}, ${36 + i * 4})`}
        >
          <rect width="70" height="92" rx="2" fill={PAPER} fillOpacity={0.04 + i * 0.02} stroke={PAPER_DIM} strokeWidth="0.5" />
          {[0, 1, 2, 3, 4, 5, 6].map(li => (
            <rect
              key={li}
              x="6" y={10 + li * 11}
              width={li === 3 ? 38 : 58 - (li % 3) * 6}
              height="2" rx="0.5"
              fill={PAPER_DIM} fillOpacity={li === 3 ? 1 : 0.5}
            />
          ))}
          {i === 0 && (
            <rect x="6" y={10 + 3 * 11 - 1} width="40" height="4" rx="1" fill={EMBER} fillOpacity="0.35" />
          )}
        </motion.g>
      ))}
      {/* Embedding lines flowing to vector space */}
      <g>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <motion.line
            key={i}
            x1="130" y1={60 + i * 12}
            x2="200" y2={50 + i * 14}
            stroke={i === 2 ? EMBER : PAPER_DIM}
            strokeWidth={i === 2 ? 1 : 0.5}
            strokeOpacity={i === 2 ? 1 : 0.4}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.6 + i * 0.1, repeat: Infinity, repeatDelay: 1.4 }}
          />
        ))}
      </g>
      {/* Vector cluster */}
      <g transform="translate(200, 100)">
        {Array.from({ length: 16 }).map((_, i) => {
          const t = (i / 16) * Math.PI * 2;
          const r = 14 + (i % 3) * 4;
          const x = Math.cos(t) * r;
          const y = Math.sin(t) * r;
          return (
            <motion.circle
              key={i}
              cx={x} cy={y} r="1.5"
              fill={i === 5 ? EMBER : PAPER}
              fillOpacity={i === 5 ? 1 : 0.6}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.8, delay: i * 0.06, repeat: Infinity }}
            />
          );
        })}
      </g>
      {/* Label below cluster */}
      <text x="200" y="160" fill={PAPER_DIM} fontSize="6" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" letterSpacing="0.12em">
        EMBEDDINGS
      </text>
    </svg>
  );
}

/* ---------- 7. Scripta — handwritten stroke ---------- */
function Handwriting() {
  // SVG paths approximating handwritten cursive strokes
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full">
      <text x="14" y="20" fill={PAPER_DIM} fontSize="7" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.15em">
        VATR++ · IAM DATASET
      </text>
      {/* Ruled lines */}
      {[0, 1, 2].map(i => (
        <line
          key={i}
          x1="20" x2="220" y1={68 + i * 38} y2={68 + i * 38}
          stroke={PAPER_DIM} strokeOpacity="0.3" strokeWidth="0.4" strokeDasharray="3 3"
        />
      ))}
      {/* Handwriting stroke 1 */}
      <motion.path
        d="M 28 60 Q 36 40 42 60 T 56 60 Q 64 50 70 60 T 84 56 Q 92 40 100 60 Q 108 72 116 56 T 130 60 Q 138 48 146 60"
        fill="none"
        stroke={PAPER}
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1.8 }}
      />
      {/* Handwriting stroke 2 */}
      <motion.path
        d="M 28 100 Q 38 86 48 100 T 70 96 Q 80 84 90 100 T 112 100 Q 122 86 134 100 T 156 96 Q 168 86 180 100"
        fill="none"
        stroke={EMBER}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.75"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, delay: 0.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1.8 }}
      />
      {/* Handwriting stroke 3 */}
      <motion.path
        d="M 28 138 Q 36 124 44 138 T 62 134 Q 72 122 82 138 T 104 138 Q 114 124 124 138"
        fill="none"
        stroke={PAPER}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity="0.85"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, delay: 1.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1.8 }}
      />
      {/* Stats */}
      <text x="220" y="180" fill={EMBER} fontSize="9" fontFamily="'JetBrains Mono', monospace" textAnchor="end" fontWeight="600">
        85% BELIEVABLE
      </text>
    </svg>
  );
}

/* ---------- 8. NOESIS — world with pulsing signals ---------- */
function GlobePulse() {
  // Simple lat/lng dotted map
  const dots = [];
  const cols = 26;
  const rows = 12;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Project ellipse for fake "world" shape
      const cx = 120 + (c - cols / 2) * 7.2;
      const cy = 100 + (r - rows / 2) * 9;
      // crude land mass mask
      const inside =
        Math.pow((cx - 120) / 90, 2) + Math.pow((cy - 100) / 60, 2) < 1;
      if (inside) dots.push({ cx, cy });
    }
  }
  const hotspots = [
    { x: 80, y: 80, label: 'EU' },
    { x: 145, y: 92, label: 'IN' },
    { x: 175, y: 110, label: 'JP' },
    { x: 60, y: 105, label: 'BR' },
  ];
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full">
      <text x="14" y="20" fill={PAPER_DIM} fontSize="7" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.15em">
        OSINT · 4 SOURCES · LIVE
      </text>
      {/* Globe dots */}
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx} cy={d.cy} r="0.9"
          fill={PAPER} fillOpacity="0.35"
        />
      ))}
      {/* Hotspots pulsing */}
      {hotspots.map((h, i) => (
        <g key={h.label}>
          <motion.circle
            cx={h.x} cy={h.y} r="2"
            fill={EMBER}
            animate={{ r: [2, 12, 2], opacity: [1, 0, 1] }}
            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, ease: 'easeOut' }}
            style={{ transformOrigin: `${h.x}px ${h.y}px` }}
            fillOpacity="0.4"
          />
          <circle cx={h.x} cy={h.y} r="2.5" fill={EMBER} />
          <text x={h.x + 6} y={h.y + 3} fill={PAPER} fontSize="6" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.1em">
            {h.label}
          </text>
        </g>
      ))}
      {/* Event ticker */}
      <g transform="translate(14, 174)">
        <rect width="212" height="14" rx="2" fill={PAPER} fillOpacity="0.06" />
        <motion.circle
          cx="9" cy="7" r="2.5" fill={EMBER}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <text x="17" y="10" fill={PAPER} fontSize="6.5" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.1em">
          [EU] protest escalation · score 0.82
        </text>
      </g>
    </svg>
  );
}

/* ---------- 9. Nexus — multi-agent hierarchy with directed task flow ---------- */
function AgentNexus() {
  const nodes = [
    { id: 'ceo', label: 'CEO AGENT', x: 120, y: 42, r: 10, primary: true },
    { id: 'router', label: 'TASK ROUTER', x: 120, y: 96, r: 7, primary: false },
    { id: 'a1', label: 'EXEC', x: 50, y: 148, r: 5, primary: false },
    { id: 'a2', label: 'TRADE', x: 90, y: 152, r: 5, primary: false },
    { id: 'a3', label: 'CHAIN', x: 130, y: 152, r: 5, primary: false },
    { id: 'a4', label: 'AUDIT', x: 170, y: 148, r: 5, primary: false },
  ];
  const edges = [
    { x1: 120, y1: 52, x2: 120, y2: 89 },
    { x1: 120, y1: 103, x2: 50, y2: 143 },
    { x1: 120, y1: 103, x2: 90, y2: 147 },
    { x1: 120, y1: 103, x2: 130, y2: 147 },
    { x1: 120, y1: 103, x2: 170, y2: 143 },
  ];
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full">
      <defs>
        <radialGradient id="nexus-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={EMBER} stopOpacity="0.5" />
          <stop offset="100%" stopColor={EMBER} stopOpacity="0" />
        </radialGradient>
        <marker id="arrowhead" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
          <polygon points="0 0, 4 2, 0 4" fill={PAPER_DIM} fillOpacity="0.7" />
        </marker>
      </defs>
      <text x="14" y="18" fill={PAPER_DIM} fontSize="7" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.15em">
        MCP · CLAUDE · x402
      </text>
      <text x="226" y="18" fill={EMBER} fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="end" fontWeight="600" letterSpacing="0.1em">
        $48M MC
      </text>
      {/* Edges */}
      {edges.map((e, i) => (
        <motion.line
          key={i}
          x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
          stroke={PAPER_DIM} strokeWidth="0.7"
          markerEnd="url(#arrowhead)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 1.8, delay: 0.3 + i * 0.15, repeat: Infinity, repeatDelay: 0.8 }}
        />
      ))}
      {/* Pulse from CEO downward */}
      <motion.circle
        cx="120" cy="52" r="3"
        fill={EMBER} fillOpacity="0.8"
        animate={{ cy: [52, 89, 52], opacity: [0.9, 0.3, 0.9] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={n.id}>
          {n.primary && (
            <circle cx={n.x} cy={n.y} r={n.r + 14} fill="url(#nexus-glow)" />
          )}
          <motion.circle
            cx={n.x} cy={n.y} r={n.r}
            fill={n.primary ? EMBER : PAPER}
            fillOpacity={n.primary ? 0.9 : 0.12}
            stroke={n.primary ? EMBER : PAPER_DIM}
            strokeWidth={n.primary ? 0 : 0.8}
            animate={n.primary ? { scale: [1, 1.12, 1] } : { opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
          <text
            x={n.x} y={n.y + n.r + 10}
            fill={n.primary ? EMBER : PAPER_DIM}
            fontSize="6"
            textAnchor="middle"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="0.12em"
          >
            {n.label}
          </text>
        </g>
      ))}
      {/* x402 micropayment rail */}
      <g transform="translate(14, 175)">
        <rect width="212" height="13" rx="2" fill={PAPER} fillOpacity="0.05" />
        <motion.circle
          cx="8" cy="6.5" r="2.5" fill={EMBER}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.1, repeat: Infinity }}
        />
        <text x="16" y="10" fill={PAPER} fontSize="6.5" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.1em">
          x402 · CIRCLE WALLETS · BASE NETWORK
        </text>
      </g>
    </svg>
  );
}

/* ---------- exported switch ---------- */
export default function ProjectVisual({ kind }) {
  switch (kind) {
    case 'agents-orbit': return <AgentsOrbit />;
    case 'code-stack': return <CodeStack />;
    case 'chart-multi': return <ChartMulti />;
    case 'candles': return <Candles />;
    case 'face-mesh': return <FaceMesh />;
    case 'doc-stack': return <DocStack />;
    case 'handwriting': return <Handwriting />;
    case 'globe-pulse': return <GlobePulse />;
    case 'agent-nexus': return <AgentNexus />;
    default: return null;
  }
}
