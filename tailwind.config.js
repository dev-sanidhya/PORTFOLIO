/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        ink: {
          900: '#070708',
          800: '#0a0a0b',
          700: '#101012',
          600: '#16161a',
          500: '#1c1c21',
          400: '#26262c',
        },
        paper: {
          DEFAULT: '#ebe6dc',
          50: '#f5f1e8',
          100: '#e9e4d9',
          200: '#c9c4b9',
          300: '#9a958c',
          400: '#6a6862',
          500: '#48474a',
        },
        ember: {
          DEFAULT: '#ff5b1f',
          400: '#ff7a4a',
          300: '#ffa67e',
          200: '#ffd2bd',
        },
        sage: {
          DEFAULT: '#a8c7a1',
          400: '#c2dbbc',
        },
      },
      letterSpacing: {
        tightest: '-0.06em',
        ultratight: '-0.045em',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -40px) scale(1.06)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.94)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-50px, -25px) scale(1.08)' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.85)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'float-slow': 'float-slow 14s ease-in-out infinite',
        'float-medium': 'float-medium 9s ease-in-out infinite',
        'scroll-bounce': 'scroll-bounce 1.6s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        'gradient-pan': 'gradient-pan 8s ease-in-out infinite',
        'fade-in': 'fade-in 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
