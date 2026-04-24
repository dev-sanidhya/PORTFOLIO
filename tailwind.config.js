/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        bg: {
          primary: '#030712',
          surface: '#0f172a',
          border: '#1e293b',
        },
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
        'float-fast': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(25px, 35px) scale(0.92)' },
          '75%': { transform: 'translate(-35px, -15px) scale(1.08)' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.85)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'border-spin': {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 14s ease-in-out infinite',
        'float-medium': 'float-medium 9s ease-in-out infinite',
        'float-fast': 'float-fast 11s ease-in-out infinite',
        'scroll-bounce': 'scroll-bounce 1.6s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
