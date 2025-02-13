module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ["bodoni", "gilroy"],
        roboto: ["Roboto Slab", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        salsa: ["Salsa", "cursive"],
        merri: ["Merriweather", "serif"],
        domine: ["Domine", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        neutral: {
          100: "#000000",
          90: "#1A1A1A",
          80: "#333333",
          70: "#4D4D4D",
          60: "#666666",
          50: "#808080`",
          40: "#999999",
          30: "#B3B3B3",
          20: "#CCCCCC",
          10: "#E6E6E6",
          0: "#FFFFFF",
        },
      },
      animation: {
        gradient: "gradient 15s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
