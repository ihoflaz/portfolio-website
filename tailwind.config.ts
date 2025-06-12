import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0F172A',
        'light-bg': '#F8FAFC',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'gradient-animation': 'gradient-animation 15s ease infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-animation': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e2e8f0',
            h1: {
              color: '#f8fafc',
            },
            h2: {
              color: '#f8fafc',
            },
            h3: {
              color: '#f8fafc',
            },
            h4: {
              color: '#f8fafc',
            },
            strong: {
              color: '#f8fafc',
            },
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#60a5fa',
              },
            },
            code: {
              color: '#f8fafc',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '0.25rem',
              borderRadius: '0.25rem',
            },
            pre: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#f8fafc',
            },
            blockquote: {
              color: '#cbd5e1',
              borderLeftColor: '#3b82f6',
            },
            'ul > li::marker': {
              color: '#94a3b8',
            },
            'ol > li::marker': {
              color: '#94a3b8',
            },
            hr: {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config 