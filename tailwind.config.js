module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
