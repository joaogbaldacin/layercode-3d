/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        layer: {
          950: '#06080E',
          900: '#0B0F19',
          850: '#101726',
          800: '#151F33',
          700: '#1F2E4C',
          600: '#334B75',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(56, 189, 248, 0.25)',
        },
        filament: {
          orange: '#F97316',
          amber: '#F59E0B',
          cyan: '#06B6D4',
          teal: '#14B8A6',
          glow: '#38BDF8',
          gold: '#EAB308',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
      },
      animation: {
        'layer-pulse': 'layerPulse 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'beam': 'beam 8s linear infinite',
      },
      keyframes: {
        layerPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.98)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
}
