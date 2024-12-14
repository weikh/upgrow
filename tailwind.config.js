export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Kontent fayllar ro‘yxati
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Barlow Semi Condensed"', "sans-serif"], // Maxsus shrift qo'shish
      },
      boxShadow: {
        custom: '0px 15px 20px 0px #0000000D', // Maxsus shadow
      },
    },
  },
  plugins: [],
};
