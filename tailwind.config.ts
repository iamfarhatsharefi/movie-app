// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust the paths according to your structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',  // Dark gray for the background
        secondary: '#4B5563', // Medium gray for card backgrounds
        accent: '#FBBF24',    // Bright yellow for highlights
        light: '#F0F4F8',     // Light theme background
        dark: '#0F172A',      // Darker color for dark mode
        text: '#E5E7EB',      // Light text color
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideIn: 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
