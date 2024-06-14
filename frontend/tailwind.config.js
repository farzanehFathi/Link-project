/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        branding1: "#CCC6C1",
        branding2: "#F5F4F0",
        branding3: "#74706B",
        branding4: "#343634",
      },
      fontFamily: {
        Poly: ["Poly"],
        Montserrat: ["Montserrat"],
        Inter: ["Inter"],
      },

      spacing: {
        "70px": "70px",
        "100px": "100px",
        "1800px": "1800px",
      },
      zIndex: {
        3000: "3000",
      },
    },
  },
  plugins: [],
};
