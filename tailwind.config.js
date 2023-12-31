/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      fontFamily: {
        custom: ["Damion"],
      },
      backgroundColor: {
        second: "rgba(0, 0, 0, 0.6)",
      },
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      Red: {
        100: "#CA0808",
      },
      // Yellow: {
      //   100: "#FAE85A",
      //   200: "#E7B50A",
      // },
      // Green: {
      //   100: "#73C928",
      //   200: "#5EBB22",
      // },
      // Purple: {
      //   100: "#4A2652",
      //   200: "#34183B",
      // },
      Gray: {
        100: "#262626",
        200: "#333333",
        300: "#99A3A4",
        400: "#EAECEE",
      },
    },
  },
  plugins: [],
};
