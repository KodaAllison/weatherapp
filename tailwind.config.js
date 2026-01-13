/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass': {
          'white': 'rgba(255, 255, 255, 0.05)',
          'border': 'rgba(255, 255, 255, 0.1)',
          'hover': 'rgba(255, 255, 255, 0.08)',
        },
        'primary': {
          'start': '#3b82f6',
          'end': '#8b5cf6',
        },
        'secondary': {
          'start': '#06b6d4',
          'end': '#3b82f6',
        },
        'accent': {
          'start': '#f97316',
          'end': '#ec4899',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        "gradient-secondary": "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
        "gradient-accent": "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
        "gradient-dark": "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(59, 130, 246, 0.3)',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        }
      }
    },
  },
  plugins: [],
};
