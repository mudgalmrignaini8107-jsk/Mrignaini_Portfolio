import type { Config } from "tailwindcss";

// Compatibility config for editors/IDE extensions.
// Actual configuration is in app/globals.css for Tailwind CSS v4.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
      colors: {
        neutral: {
          warm: {
            50: "#FAF8F5",
            100: "#F5F1E9",
            200: "#EAE3D2",
            800: "#2C2A27",
            900: "#1C1A18",
            950: "#121110",
          },
        },
        gold: {
          light: "#DFCEB7",
          base: "#C5A880",
          dark: "#9F8057",
        },
        sage: {
          light: "#C0C8BC",
          base: "#A3B19B",
          dark: "#7F8E77",
        },
        blush: {
          light: "#F2DCE0",
          base: "#E8C5C8",
          dark: "#C69A9E",
        },
        luxury: {
          bg: {
            light: "#FAF6EE",
            dark: "#0F0F0E",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
