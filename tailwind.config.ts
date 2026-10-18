import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Official Wada Hospital Brand Guidelines Palette
        brand: {
          primary: "#2E8DBB", // Primary Blue
          sky: "#3DA8D2", // Sky Blue
          teal: "#49C4CA", // Teal Accent
          navy: "#00395C", // Deep Navy
          ink: "#1B2B33", // Ink (Text)
          mist: "#E9EEF1", // Mist (Borders / soft gray)
          aqua: "#F2F8FB", // Pale Aqua (Background)
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#f0f8fc",
          100: "#e0f1f8",
          200: "#c7e5f3",
          300: "#9ed3eb",
          400: "#6ebbe0",
          500: "#2E8DBB", // Brand Primary Blue
          600: "#24759e",
          700: "#1e5e80",
          800: "#1b4f6b",
          900: "#00395C", // Brand Deep Navy
          950: "#0f2330",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "#f2fbfb",
          100: "#dbf6f7",
          200: "#bbeeef",
          300: "#8ce1e5",
          400: "#49C4CA", // Brand Teal Accent
          500: "#32aab1",
          600: "#288a91",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "Open Sans", "Arial", "sans-serif"],
        heading: ["var(--font-heading)", "Montserrat", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 57, 92, 0.06)",
        card: "0 10px 30px -4px rgba(0, 57, 92, 0.08)",
        float: "0 20px 40px -6px rgba(0, 57, 92, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
