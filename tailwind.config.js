module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      colors: {
        dark: "#06202A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
