/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-btn-color": "var(--primary-color)",
        "secondary-btn-color": "var(--secondary-color)",
        "primary-bg-color": "var(--thirdly-color)",
        "secondary-bg-color": "var(--fourthly-color)",
      },
    },
  },
  plugins: [],
};
