module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 2s ease-in-out',
        'fade-in-down': 'fade-in-down 2s ease-in-out',
        'slide-in-right': 'slide-in-right 2s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1},
        },
        'fade-in-down': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1},
        },
      },
      fontFamily: {
        signature: ["Great Vibes"],
      },
    },
    plugins: [],
  }
}