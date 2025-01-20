import filters from 'tailwindcss-filters';

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container:{
        center: true,
      },
      /* fontFamily: {
        sans: ['clash', "sans-serif"],
      }, */
      fontFamily: {
        sans: ['clash'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      boxShadow: {
        custom: "0px 15px 20px 0px #0000000D",
      },
      dropShadow: {
        custom: "0px 0px 20px 0px rgba(116, 127, 167, 1)", // To‘g‘ri `dropShadow` qoida
      },
    },
  },
  plugins: [
    filters, // filter pluginini qo'shish
  ],
};
