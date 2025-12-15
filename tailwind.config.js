/** @type {import('tailwindcss').Config} */
export default {
  presets: [require("@aivec/magi-lp-template/tailwind.preset")],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./node_modules/@aivec/magi-lp-template/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
