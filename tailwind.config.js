/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#090B12',
          secondary: '#101522',
          card: '#141B2B',
          surface: '#111726',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(255, 255, 255, 0.16)',
        },
        brand: {
          blue: '#3898FF',
          'blue-dark': '#1A75E8',
          'blue-glow': '#60A5FA',
          violet: '#8B5CF6',
          'violet-dark': '#6D28D9',
          'violet-glow': '#A78BFA',
          cyan: '#00F0FF',
        },
        content: {
          primary: '#F5F7FC',
          secondary: '#A8B1C2',
          muted: '#6B7A99',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 30px -5px rgba(56, 152, 255, 0.35)',
        'glow-violet': '0 0 30px -5px rgba(139, 92, 246, 0.35)',
        'glow-card': '0 10px 40px -10px rgba(0, 0, 0, 0.6), 0 0 25px -5px rgba(56, 152, 255, 0.15)',
        'glow-button': '0 0 35px 2px rgba(56, 152, 255, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 7s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatRev 9s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};
