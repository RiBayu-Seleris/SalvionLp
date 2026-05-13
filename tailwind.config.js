/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px", // optional (biar kamu bisa handle hp kecil)
      },
      // fontFamily: {
      //   instrument: ['"Instrument Sans"', "sans-serif"],
      //   inter: ["Inter", "sans-serif"],
      //   sora: ["Sora", "sans-serif"],
      // },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // default Tailwind
        instrument: ['"Instrument Sans"', "sans-serif"],
        sora: ["Sora", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
