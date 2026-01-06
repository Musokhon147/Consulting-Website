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
          navy: '#002147',
          gold: '#FFB800',
          orange: '#FF8A00',
          gray: '#333333',
          lightGray: '#F5F5F5',
          deepNavy: '#000000', // Updated to pure black
          dark: '#000000',     // Pure black for dark mode
          light: '#ffffff',    // Pure white for light mode
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
