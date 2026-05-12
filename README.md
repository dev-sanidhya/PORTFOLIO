# Sanidhya Shishodia - Portfolio

Personal portfolio website for Sanidhya Shishodia - Agentic AI Builder, Multi-Agent Systems Engineer, and Hackathon Champion. Built with a dark terminal/HUD aesthetic, smooth animations, and a fully data-driven content layer.

**Live:** [sanidhyaio.vercel.app](https://sanidhyaio.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | TailwindCSS 3 |
| Animations | Framer Motion 11 |
| Typewriter | react-type-animation |
| Icons | react-icons (Fi, Fa6, Si) |
| Deployment | Vercel |

---

## Sections

- **Hero** - Animated name reveal, typewriter role cycle, social links, cursor glow follower
- **About** - Background, current focus, and what I'm building
- **Skills** - Categorized skill grid: Agentic AI, ML/NLP/Vision, Full Stack, Infra and Web3
- **Experience** - OWASP GSoC Mentor, Lit Amor Full Stack Intern, TickerPulse Researcher
- **Projects** - 8 projects with tech stacks, descriptions, GitHub/demo links
- **Achievements** - Hackathon wins and competition placements
- **Contact** - Direct links and email

---

## Project Structure

```
src/
  components/
    Hero.jsx          - Landing section with animated orbs and typewriter
    About.jsx         - About me section
    Skills.jsx        - Skills grid rendered from data
    Experience.jsx    - Work and research experience timeline
    Projects.jsx      - Project cards with gradient accents
    Achievements.jsx  - Hackathon wins and placements
    Contact.jsx       - Contact section
    BuyMeCoffee.jsx   - Floating support button
    Navbar.jsx        - Fixed navigation bar
    Footer.jsx        - Footer
    SectionHeading.jsx - Shared heading component
  data/
    portfolio.js      - Single source of truth for all content
  App.jsx             - Root layout with cursor glow and scanlines overlay
  main.jsx            - Entry point
```

All content (skills, experience, projects, achievements, socials) lives in `src/data/portfolio.js`. To update the portfolio, edit only that file.

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Dev server runs at `http://localhost:5173`.

---

## Design Details

- Background: near-black `#030712` with a dot grid overlay and scanline effect
- Cursor: radial violet-to-cyan glow that follows the mouse
- Gradients: each project card has a unique gradient accent (violet, amber, emerald, rose, pink, indigo, slate, cyan)
- Fonts: Inter (UI) + JetBrains Mono (terminal elements)
- Animations: staggered entrance via Framer Motion, floating orbs, pulsing status dot

---

## Content Updates

To add or update anything, edit `src/data/portfolio.js`:

- `skills` - array of category objects with item lists
- `experience` - role, company, duration, bullet points
- `projects` - name, tagline, tech stack, description bullets, GitHub/demo links
- `achievements` - title, detail, icon, type
- `socials` - label and href pairs

---

## Connect

- GitHub: [dev-sanidhya](https://github.com/dev-sanidhya)
- LinkedIn: [sanidhya-shishodia](https://linkedin.com/in/sanidhya-shishodia)
- X: [@iisanidhya](https://x.com/iisanidhya)
- Email: shishodiasanidhya@gmail.com
