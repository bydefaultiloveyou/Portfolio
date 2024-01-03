/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    extend: {
      keyframes: {
        spinNew: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      animationDuration: {
        "300ms": "300ms",
        "900ms": "900ms",
      },
      fontFamily: {
        Roboto: "Roboto",
        Sacramento: "Sacramento",
        OpenSans: "Open Sans",
      },
      colors: {
        pinkPrimary: "#FF90BC",
        pinkSecondary: "#FACBEA",
        purplePrimary: "#9D76C1",
        purpleSecondary: "#D0BFFF",
        bluePrimary: "#3887BE",
        blueSecondary: "#86B6F6",
        black: "#212121",
      },
    },
  },
  plugins: [],
};
