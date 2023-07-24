/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "top-sm": "0px -4px 6px -1px rgba(0, 0, 0, 0.1)",
        "top-md": "0px -8px 10px -3px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        sans: ["Montserrat Light", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
