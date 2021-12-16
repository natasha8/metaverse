const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                monospace: [
                    "Major Mono Display",
                    ...defaultTheme.fontFamily.mono,
                ],
            },
        },
    },
    plugins: [],
};
