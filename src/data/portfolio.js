export const skills = [
  {
    category: 'Agentic AI & LLMs',
    color: 'violet',
    items: ['Claude Agent SDK', 'MCP Protocol', 'LangGraph', 'Multi-Agent Systems', 'LLM Orchestration', 'Groq', 'OpenAI API', 'FinBERT', 'Transformers'],
  },
  {
    category: 'ML / NLP / Vision',
    color: 'cyan',
    items: ['PyTorch', 'Scikit-learn', 'spaCy', 'VADER', 'DeBERTa v3', 'CSRNet', 'Pandas', 'NumPy', 'HuggingFace'],
  },
  {
    category: 'Full Stack',
    color: 'emerald',
    items: ['React', 'Next.js 15', 'FastAPI', 'TypeScript', 'Vite', 'TailwindCSS', 'React Native', 'Node.js', 'Express'],
  },
  {
    category: 'Infra & Web3',
    color: 'amber',
    items: ['Git', 'Docker', 'Firebase', 'Vercel', 'Render', 'InstantDB', 'Stripe', 'Viem', 'Circle Finance', 'WebSocket', 'Milvus'],
  },
];

export const experience = [
  {
    role: 'GSoC Mentor',
    company: 'OWASP',
    location: 'Remote',
    duration: 'March 2026 – Present',
    tag: 'Open Source',
    tagColor: 'amber',
    bullets: [
      'Selected as a GSoC 2026 mentor for OWASP, evaluating contributor proposals, reviewing code, and tracking milestones',
      'Guiding contributors on open-source security tooling development across the full Google Summer of Code program cycle',
    ],
  },
  {
    role: 'Full Stack Intern',
    company: 'Lit Amor Pvt. Ltd.',
    location: 'Remote, Jaipur, India',
    duration: 'July 2025 – Present',
    tag: 'Internship',
    tagColor: 'violet',
    bullets: [
      'Building mobile features in React Native: journaling flows, streak challenges, and social interactions for LitAmor\'s dating platform',
      'Architecting backend workflows with Firebase (auth, Firestore, cloud functions) supporting scalable user interactions',
      'Shipping production features end-to-end from design review to deployment',
    ],
  },
  {
    role: 'Undergraduate Researcher, TickerPulse',
    company: 'Vivekananda Institute of Professional Studies',
    location: 'New Delhi, India',
    duration: 'May 2025 – August 2025',
    tag: 'Research',
    tagColor: 'cyan',
    bullets: [
      'Co-authoring a research paper on multi-source sentiment analysis for financial markets under Prof. Vishal Shrivastava',
      'Built a full sentiment pipeline aggregating Twitter, Reddit, and news data using VADER + FinBERT with cross-source reconciliation',
      'Targeting conference submissions at AISTS and RAICS, focused on AI-powered market intelligence',
    ],
  },
];

export const projects = [
  {
    name: 'CoFound',
    tagline: 'AI Operating System for Founders',
    tech: ['Next.js 16', 'Claude Opus 4.5', 'Anthropic SDK', 'Server-Sent Events', 'TypeScript', 'TailwindCSS'],
    description: [
      '6 specialized AI advisors (Market Research, Devil\'s Advocate, Growth, ICP Analyst, GTM Strategist, Investor Lens) debating your startup strategy simultaneously',
      'All 6 agents stream responses in parallel via SSE so you watch every advisor think and write at the same time, live',
      'Multi-turn memory per agent: each advisor builds on prior context and can be pushed for deeper follow-ups across sessions',
      'Powered by Claude Opus 4.5 with adaptive thinking; no OAuth app needed, auth via claude setup-token',
    ],
    github: 'https://github.com/dev-sanidhya/CoFound',
    demo: null,
    gradient: 'from-violet-600 via-purple-700 to-indigo-700',
    accentColor: 'violet',
    badge: 'Agentic AI',
  },
  {
    name: 'Axiom',
    tagline: 'Your Entire AI Agent Stack, Pre-Built',
    tech: ['TypeScript', 'Claude API', 'pnpm Monorepo', 'CLI', 'Web Dashboard', 'Node.js'],
    description: [
      '18+ production-ready Claude-powered agents across research, code review, writing, and business analysis, importable in one command',
      'Local-first by design: agents, run history, and dashboard all live in .axiom/ with zero vendor lock-in and full privacy',
      'Plain-English custom agent builder: describe what you want, get a running agent in under 2 minutes',
      'Full cost transparency with exact token usage and per-run financial breakdown surfaced in the web dashboard',
    ],
    github: 'https://github.com/dev-sanidhya/axiom',
    demo: 'https://axiomcm.in',
    gradient: 'from-amber-600 via-orange-600 to-red-600',
    accentColor: 'amber',
    badge: 'Open Source, Live',
  },
  {
    name: 'FinSight',
    tagline: 'Multi-Agent Financial War Room',
    tech: ['FastAPI', 'React', 'TypeScript', 'Groq LLM', 'NLP', 'ML', 'Vercel', 'Render'],
    description: [
      'Multi-agent AI system where HedgeFundGPT, NewsBot, SellSide, and Retail agents debate investment decisions simultaneously from opposing perspectives',
      'Each agent runs a distinct financial archetype: aggressive risk analysis, balanced sell-side, retail sentiment, and live news digestion',
      'Real-time sentiment aggregation from Twitter and Reddit layered over financial document analysis and market data',
      'Fully deployed: FastAPI backend on Render, React frontend live on Vercel at finsightcm.vercel.app',
    ],
    github: 'https://github.com/dev-sanidhya/FinSight',
    demo: 'https://finsightcm.vercel.app',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    accentColor: 'emerald',
    badge: 'Live',
  },
  {
    name: 'DegenAI',
    tagline: 'Autonomous DeFi Trading Agent',
    tech: ['Claude Agent SDK', 'TypeScript', 'Viem', 'x402 Micropayments', 'Base Network', 'WebSocket'],
    description: [
      'Fully autonomous agent making real on-chain trading decisions on Base network with Claude as its reasoning core',
      'Memory-driven learning: builds a persistent mental model of market conditions across sessions via memory.json',
      'DCA entries, laddered profit-taking, and relative-strength analysis vs WETH baseline, all LLM-decided with zero human input',
      'x402 micropayment protocol for API calls; live terminal dashboard with WebSocket cost narration',
    ],
    github: 'https://github.com/dev-sanidhya',
    demo: null,
    gradient: 'from-rose-600 via-pink-600 to-fuchsia-700',
    accentColor: 'rose',
    badge: 'Agentic AI',
  },
  {
    name: 'NOESIS',
    tagline: 'Real-time Global Civil Unrest Intelligence',
    tech: ['FastAPI', 'React', 'spaCy', 'NLP', 'Google Places API', 'Telegram API', 'ML'],
    description: [
      'Real-time OSINT platform ingesting Twitter, Reddit, global news, Telegram channels, and weather data simultaneously',
      'Multi-agent NLP pipeline: protest detection, multilingual sentiment, named entity recognition, and geographic clustering',
      'ML models output escalation probability and risk score per event; live map with AI-powered severity heat-zones',
      'Automated alerts via email and Telegram with critical events surfacing within seconds of first signal detection',
    ],
    github: 'https://github.com/dev-sanidhya',
    demo: null,
    gradient: 'from-cyan-600 via-sky-600 to-blue-600',
    accentColor: 'cyan',
    badge: 'Multi-Agent',
  },
];

export const achievements = [
  {
    title: '1st Place, Codex 2.0',
    detail: 'Problem track winner, 1,500+ registrations',
    icon: '🥇',
    type: 'winner',
  },
  {
    title: '2nd Place, Nexify\'25',
    detail: '300+ competing teams, National Hackathon',
    icon: '🥈',
    type: 'winner',
  },
  {
    title: 'Winner, MP Government Hackathon',
    detail: 'Bhopal, Smart crowd management for Simhastha Kumbh Mela 2028',
    icon: '🏛️',
    type: 'winner',
  },
  {
    title: '10th Place, Algoverse\'25',
    detail: '1,500+ competing teams, National Hackathon',
    icon: '🏆',
    type: 'winner',
  },
  {
    title: 'Finalist, 5 National Hackathons',
    detail: 'Consistently recognized for innovation and execution',
    icon: '⚡',
    type: 'finalist',
  },
  {
    title: 'Top 5, Treasury Wars',
    detail: 'Shaheed Bhagat Singh College, Finance strategy competition',
    icon: '💹',
    type: 'competition',
  },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/dev-sanidhya' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sanidhya-shishodia' },
  { label: 'X / Twitter', href: 'https://x.com/iisanidhya' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/ssanidhya29_' },
];
