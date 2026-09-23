/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        field: {
          DEFAULT: "#1F3D2B",
          dark: "#152C1F",
          light: "#2C5540",
        },
        harvest: {
          DEFAULT: "#C97A2B",
          dark: "#A8611E",
          light: "#E0954B",
        },
        cream: "#F7F3EC",
        soil: "#26241F",
        stone: "#6B6B63",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fadeIn: "fadeIn 1s ease forwards",
      },
    },
  },
  plugins: [],
}

