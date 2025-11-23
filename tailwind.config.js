/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Cal Sans"', "Inter", "system-ui", "sans-serif"],
        display: ['"Cal Sans"', "Inter", "system-ui", "sans-serif"],
        subtitle: ['"Poppins"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 40px rgba(15,23,42,0.12)",
      },
    },
  },
  plugins: [],
};