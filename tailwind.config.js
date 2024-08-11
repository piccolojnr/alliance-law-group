/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
      },
      borderWidth: {
        '14': '14px',
      },
      spacing: {
        '14': '3.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'custom-light': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'custom-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
      },
      fontSize: {
        'custom': '1.125rem',
      },
      lineHeight: {
        'custom': '1.75rem',
      },
      letterSpacing: {
        'custom': '0.025em',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}

