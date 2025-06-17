import type { Config } from "tailwindcss";

export default {
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
      // Sophisticated Color Palette
      colors: {
        // Base colors
        cream: {
          50: "#FEFCF8",
          100: "#FDF9F2",
          200: "#F9F0E3",
          300: "#F5E7D4",
          DEFAULT: "#FEFCF8",
        },
        charcoal: {
          50: "#6B7280",
          100: "#4B5563",
          200: "#374151",
          300: "#1F2937",
          400: "#111827",
          DEFAULT: "#1A1A1A",
        },
        navy: {
          50: "#E0E7FF",
          100: "#C7D2FE",
          200: "#A5B4FC",
          300: "#8B5CF6",
          400: "#7C3AED",
          DEFAULT: "#0A1628",
        },
        bronze: {
          50: "#FEF3C7",
          100: "#FDE68A",
          200: "#F59E0B",
          300: "#D97706",
          400: "#B45309",
          DEFAULT: "#B8860B",
        },

        // ShadCN compatibility (updated for light theme)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      // Typography System
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },

      // Sophisticated spacing scale
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },

      // Enhanced border radius for sophistication
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
      },

      // Sophisticated animation system
      keyframes: {
        // Essential ShadCN animations
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        // Sophisticated entrance animations
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        // Subtle reveal with enhanced easing
        reveal: {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        // Elegant loading animation
        pulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },

        // Professional shimmer effect
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        reveal: "reveal 1s cubic-bezier(0.4, 0, 0.2, 1)",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
      },

      // Enhanced shadows for depth and sophistication
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium:
          "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        elegant: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
        sophisticated: "0 20px 60px -12px rgba(0, 0, 0, 0.25)",
      },

      // Typography enhancements
      letterSpacing: {
        "ultra-wide": "0.25em",
      },

      // Transition timing functions
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.4, 0, 0.2, 1)",
        sophisticated: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
