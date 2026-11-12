import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "Archivo", "system-ui", "sans-serif"],
        mono: [
          "'Geist Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        border: "rgba(242, 241, 238, 0.16)",
        blueprint: "rgba(242, 241, 238, 0.16)",
        input: "rgba(242, 241, 238, 0.16)",
        ring: "rgb(var(--brand-r) var(--brand-g) var(--brand-b) / <alpha-value>)",
        background: "#101014",
        foreground: "#F2F1EE",
        surface: "#15151B",
        elevated: "#1C1C24",
        brand: {
          DEFAULT: "rgb(var(--brand-r) var(--brand-g) var(--brand-b) / <alpha-value>)",
          dim: "rgb(var(--brand-r) var(--brand-g) var(--brand-b) / 0.8)",
        },
        primary: {
          DEFAULT: "rgb(var(--brand-r) var(--brand-g) var(--brand-b) / <alpha-value>)",
          foreground: "#101014",
        },
        secondary: {
          DEFAULT: "#1C1C24",
          foreground: "#F2F1EE",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "#F2F1EE",
        },
        muted: {
          DEFAULT: "#1C1C24",
          foreground: "#85858D",
        },
        accent: {
          DEFAULT: "#1C1C24",
          foreground: "#F2F1EE",
        },
        popover: {
          DEFAULT: "#15151B",
          foreground: "#F2F1EE",
        },
        card: {
          DEFAULT: "#15151B",
          foreground: "#F2F1EE",
        },
      },
      boxShadow: {
        "accent-sm": "0 0 12px rgba(107, 158, 255, 0.18)",
        "accent-md":
          "0 0 28px rgba(107, 158, 255, 0.14), 0 0 72px rgba(107, 158, 255, 0.06)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
