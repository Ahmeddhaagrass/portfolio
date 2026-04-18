/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'success-bounce': {
          '0%': { opacity: '0', transform: 'scale(0.3) rotate(-12deg)' },
          '55%': { opacity: '1', transform: 'scale(1.08) rotate(4deg)' },
          '75%': { transform: 'scale(0.96) rotate(-2deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        'success-glow': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.55s ease-out both',
        'scale-in': 'scale-in 0.45s ease-out both',
        'shimmer': 'shimmer 3.5s linear infinite',
        'success-bounce': 'success-bounce 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'success-glow': 'success-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
