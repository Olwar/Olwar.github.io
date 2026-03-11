import type { Config } from "tailwindcss";
import { tailwindPreset } from "./style-guide";

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
      // CyberRelic theme colors from style-guide
      colors: {
        ...tailwindPreset.theme.extend.colors,
        
        // ShadCN compatibility (keeping for components)
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

      // Typography System from style-guide
      fontFamily: {
        ...tailwindPreset.theme.extend.fontFamily,
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },

      // Spacing and radius from style-guide
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },

      borderRadius: {
        ...tailwindPreset.theme.extend.borderRadius,
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // CyberRelic animations
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

        // CRT/VHS effects
        "crt-flicker": {
          "0%, 100%": { opacity: "0.98" },
          "10%": { opacity: "0.95" },
          "20%": { opacity: "0.99" },
          "30%": { opacity: "0.96" },
          "40%": { opacity: "0.98" },
          "50%": { opacity: "0.94" },
          "60%": { opacity: "0.99" },
          "70%": { opacity: "0.97" },
          "80%": { opacity: "0.95" },
          "90%": { opacity: "0.99" },
        },
        
        "rain-scroll": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 300px" },
        },
        
        "neon-glitch": {
          "0%": { transform: "translate(0,0)", filter: "hue-rotate(0deg)" },
          "10%": { transform: "translate(-1px, 1px)" },
          "20%": { transform: "translate(1px, -1px)" },
          "30%": { transform: "translate(-2px, 0)" },
          "40%": { transform: "translate(2px, 1px)" },
          "50%": { transform: "translate(0, -2px)", filter: "hue-rotate(10deg)" },
          "60%": { transform: "translate(1px, 0)" },
          "70%": { transform: "translate(-1px, 1px)" },
          "80%": { transform: "translate(2px, -1px)" },
          "90%": { transform: "translate(-2px, 0)" },
          "100%": { transform: "translate(0,0)", filter: "hue-rotate(0deg)" },
        },

        tremble: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(0.5px)" },
          "100%": { transform: "translateX(0)" },
        },

        // Entrance animations
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

        pulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },

        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        
        // Hand animations
        "hand-float": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "33%": { transform: "translateY(-10px) translateX(5px)" },
          "66%": { transform: "translateY(5px) translateX(-3px)" },
        },
        
        "hand-entry-right": {
          from: { transform: "translateX(100%) translateY(-100%) rotate(-15deg)" },
          to: { transform: "translateX(0) translateY(0) rotate(0deg)" },
        },
        
        "hand-entry-left": {
          from: { transform: "translateX(-100%) translateY(100%) rotate(15deg)" },
          to: { transform: "translateX(0) translateY(0) rotate(0deg)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        reveal: "reveal 1s cubic-bezier(0.4, 0, 0.2, 1)",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        "crt-flicker": "crt-flicker 3.5s ease-in-out infinite",
        "rain-scroll": "rain-scroll 8s linear infinite",
        "neon-glitch": "neon-glitch 700ms steps(12, end) infinite",
        tremble: "tremble 220ms linear infinite",
        "hand-float": "hand-float 6s ease-in-out infinite",
        "hand-entry-right": "hand-entry-right 1.2s cubic-bezier(0.16,1,0.3,1)",
        "hand-entry-left": "hand-entry-left 1.2s cubic-bezier(0.16,1,0.3,1)",
      },

      // CyberRelic shadows from style-guide
      boxShadow: {
        ...tailwindPreset.theme.extend.boxShadow,
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
      
      // Background patterns and effects
      backgroundImage: {
        'crt-scanlines': `repeating-linear-gradient(
          to bottom,
          rgba(255,255,255,0.035) 0px,
          rgba(255,255,255,0.035) 1px,
          transparent 1px,
          transparent 3px
        )`,
        'vhs-static': `repeating-linear-gradient(
          90deg,
          rgba(255,255,255,0.02) 0,
          rgba(255,255,255,0.02) 2px,
          transparent 2px,
          transparent 4px
        )`,
        'digital-rain': `repeating-linear-gradient(
          to bottom,
          transparent 0px,
          transparent 2px,
          rgba(45,226,230,0.05) 3px,
          transparent 4px
        )`,
        'vignette': `radial-gradient(
          120% 120% at 50% 50%,
          rgba(0,0,0,0) 0%,
          rgba(0,0,0,0.25) 55%,
          rgba(0,0,0,0.6) 100%
        )`,
        'gradient-brand': 'linear-gradient(135deg, #ff2a6d 0%, #a64dff 45%, #5a6cff 100%)',
        'gradient-oil': 'linear-gradient(120deg, rgba(45,226,230,0.15), rgba(255,42,109,0.15))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
