/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  safelist: [/^bg-/, /^text-/, /^p-/, /^m-/, /^w-/, /^h-/],
  theme: {
    extend: {},
  },
  plugins: [],
};
