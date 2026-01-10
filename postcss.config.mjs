/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Remove these two lines:
    // 'tailwindcss': {},
    // 'autoprefixer': {},

    // Add this single line instead:
    '@tailwindcss/postcss': {},
  },
};

export default config;