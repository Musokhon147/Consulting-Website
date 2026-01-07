/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        academy: {
          navy: 'var(--primary-color)',
          gold: '#FFB800',
          orange: 'var(--accent-color)',
          gray: '#333333',
          lightGray: '#F5F5F5',
          deepNavy: 'var(--dark-bg)', // Dynamic dark mode bg
          dark: '#000000',
          light: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'slow-spin': 'spin 15s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
