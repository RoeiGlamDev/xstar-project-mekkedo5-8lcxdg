module.exports = {
  plugins: {
    tailwindcss: {
      theme: {
        extend: {
          colors: {
            pink: {
              light: '#FFC0CB', // Light pink for accents
              DEFAULT: '#FF69B4', // Main pink color
              dark: '#FF1493', // Darker pink for hover states
            },
            white: {
              DEFAULT: '#FFFFFF', // Main white color
              soft: '#F8F8F8', // Soft white for backgrounds
            },
          },
        },
      },
    },
    autoprefixer: {},
  },
}