/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mylighttheme: {
          primary: "#556f5f",
          "primary-content": "#232323",
          secondary: "#f6b76f",
          "secondary-content": "#888",
          accent: "#292929",
          "accent-content": "#fff",
          neutral: "#222",
          "base-100": "#FFFFFF",
          "base-200": "#FEF7EC",
          "base-300": "#e5ede9",
          warning: "#ff3d12",
        },
      },
      "dark",
    ],
  },
};
