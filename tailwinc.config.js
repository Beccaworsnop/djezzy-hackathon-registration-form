/** @type {import('tailwindcss').Config} */
export default {
    // Enable dark mode if required
    darkMode: "class", // or 'media' for system dark mode
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // Adjust the paths to match your project structure
        "./public/index.html",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'custom-radial': 'radial-gradient(circle, #7a0e2e 0%, #2d061b 50%, #000000 100%)',
            },
        },
    }
};