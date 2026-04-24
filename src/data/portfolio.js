export const skills = [
  {
    category: 'Languages',
    color: 'violet',
    items: ['Python', 'Java', 'C / C++', 'TypeScript', 'JavaScript', 'HTML / CSS'],
  },
  {
    category: 'Frameworks',
    color: 'cyan',
    items: ['React', 'Next.js', 'FastAPI', 'Vite', 'TailwindCSS', 'React Native'],
  },
  {
    category: 'ML / NLP',
    color: 'emerald',
    items: ['PyTorch', 'Scikit-learn', 'Transformers', 'spaCy', 'VADER', 'FinBERT', 'LangGraph', 'Pandas', 'NumPy'],
  },
  {
    category: 'Tools & DevOps',
    color: 'amber',
    items: ['Git', 'Docker', 'Firebase', 'Vercel', 'Render', 'Postman', 'Playwright', 'BeautifulSoup4', 'OpenAI API', 'Milvus'],
  },
];

export const experience = [
  {
    role: 'Full Stack Intern',
    company: 'Lit Amor Pvt. Ltd.',
    location: 'Remote · Jaipur, India',
    duration: 'July 2025 – Present',
    tag: 'Internship',
    tagColor: 'violet',
    bullets: [
      'Built mobile features in React Native — journaling flows and streak challenges for LitAmor\'s social & dating platform',
      'Developed backend workflows with Firebase (auth, Firestore, cloud functions) supporting scalable user interactions',
      'Collaborated on feature integration, debugging, and production deployments',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    company: 'Vivekananda Institute of Professional Studies',
    location: 'New Delhi, India',
    duration: 'May 2025 – August 2025',
    tag: 'Research',
    tagColor: 'cyan',
    bullets: [
      'Co-authoring a research paper on multi-source sentiment analysis for stock markets under Prof. Vishal Shrivastava',
      'Developed a sentiment pipeline aggregating Twitter & Reddit data using VADER and FinBERT',
      'Targeting conference submissions at AISTS and RAICS for AI-powered financial market insights',
    ],
  },
];

export const projects = [
  {
    name: 'NOESIS',
    tagline: 'Real-time Global Civil Unrest Intelligence',
    tech: ['Python', 'FastAPI', 'React', 'NLP', 'Google Places API', 'ML'],
    description: [
      'Multi-source OSINT system monitoring global civil unrest from Twitter, Reddit, News, Telegram & Weather APIs in real time',
      'NLP pipeline: protest detection, sentiment analysis, named entity recognition, and multi-language support',
      'ML models for risk assessment and escalation probability prediction with geo-clustering',
      'Interactive React dashboard with live maps, incident clustering, and AI-powered severity classification',
      'Alert system with email & Telegram notifications for critical events',
    ],
    github: 'https://github.com/dev-sanidhya',
    demo: null,
    gradient: 'from-violet-600 via-purple-600 to-cyan-600',
    accentColor: 'violet',
  },
  {
    name: 'FinSight',
    tagline: 'AI-Powered Multi-Agent Stock Analysis',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'FinBERT', 'Groq LLM'],
    description: [
      'Full-stack AI stock analysis platform with FastAPI backend and React + TypeScript frontend',
      'Integrated Groq-hosted LLM agents (HedgeFundGPT, NewsBot) that analyze financial data and debate investment decisions',
      'Real-time sentiment analysis on live financial news using FinBERT',
      'Deployed with Render (API) and Vercel (frontend) for reliable full-stack hosting',
    ],
    github: 'https://github.com/dev-sanidhya',
    demo: '#',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    accentColor: 'emerald',
  },
];

export const achievements = [
  {
    title: '2nd Place — Nexify\'25',
    detail: '300+ competing teams · National Hackathon',
    icon: '🥈',
    type: 'winner',
  },
  {
    title: '1st Place — Codex 2.0',
    detail: '1,500+ registrations · Problem track winner',
    icon: '🥇',
    type: 'winner',
  },
  {
    title: '10th Place — Algoverse\'25',
    detail: '1,500+ competing teams · National Hackathon',
    icon: '🏆',
    type: 'winner',
  },
  {
    title: 'Finalist — 5 National Hackathons',
    detail: 'Recognized for innovation & implementation',
    icon: '🎯',
    type: 'finalist',
  },
  {
    title: 'Top 5 — Treasury Wars',
    detail: 'Shaheed Bhagat Singh College · Finance strategy',
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
