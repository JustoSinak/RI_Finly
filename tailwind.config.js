module.exports = {
  content: [
    "./views/**/*.ejs", // Add the path to your EJS templates
    // "./public/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
