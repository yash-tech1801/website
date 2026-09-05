/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#060A17',
        'navy-base': '#080E21',
        'navy-midnight': '#0B132B',
        'navy-card': '#0F1A3A',
        'navy-elevated': '#14224C',
        'navy-light': '#1C2E66',
        
        'gold-primary': '#D4AF37',
        'gold-bright': '#DFB15B',
        'gold-amber': '#F2D079',
        'gold-bronze': '#C5A059',
        'gold-dark': '#9E7D3B',

        // Legacy compatibility mappings
        'fire-orange': '#D4AF37',
        'fire-flame': '#DFB15B',
        'fire-bright': '#F2D079',
        'fire-amber': '#C5A059',
        'carbon-black': '#060A17',
        'carbon-card': '#0B132B',
        'carbon-elevated': '#0F1A3A',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        goldPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        goldPulse: 'goldPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 25s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
        'marquee-reverse': 'marqueeReverse 25s linear infinite',
      }

    },
  },
  plugins: [],
}

