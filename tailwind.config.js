module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Montserrat", "serif"],
      sans: ["Lora", "serif"],
      mono: ["Titillium Web", "serif"],
    },
    extend: {
      colors: {
        midnight: "#2F2F46",
        gray: "#2f2f4699",
        green: "#3BBA9C",
        lime: "#3BBA9C30",
      },
    },
    borderRadius: {
      DEFAULT: "10px",
    },
  },
  plugins: [],
};
