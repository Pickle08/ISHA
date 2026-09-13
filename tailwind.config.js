/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                ink: "#0a0908",
                surface: "#131110",
                paper: "#edeae4",
                muted: "#8a8580",
                violet: "#c755f7",
            },
            fontFamily: {
                display: ["Fraunces", "serif"],
                sans: ["Inter", "sans-serif"],
            },
        },
    },
};
