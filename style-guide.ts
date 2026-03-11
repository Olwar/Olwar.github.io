// style-guide.ts
// Retro-anime cyberpunk / synthwave style guide inspired by the prompt.
// Focus: deep indigo voids, neon magenta/violet/indigo lights, teal reflections,
// CRT/VHS textures (scanlines, static), soft bloom + rim lights, mild grain,
// mood of desperate human–machine connection.

/**
 * Strongly-typed design tokens and ready-to-use CSS snippets.
 * You can either:
 *  1) Inject `styleGuide.css` into a <style> tag (quick start), or
 *  2) Map `styleGuide.tokens` to your CSS-in-JS / Tailwind config.
 */

type RGB = `#${string}`;
type Px = `${number}px`;
type Rem = `${number}rem`;
type Ms = `${number}ms`;

export interface StyleGuide {
  meta: {
    name: string;
    version: string;
    description: string;
  };
  tokens: {
    color: {
      // Core palette (handpicked to match the prompt)
      void: RGB;            // deep indigo/black background
      voidAlt: RGB;         // slightly brighter indigo for layers
      gunmetal: RGB;        // matte prosthetic/metal
      gunmetalAlt: RGB;

      neonMagenta: RGB;     // key synthwave neon
      neonViolet: RGB;      // secondary neon
      neonIndigo: RGB;      // tertiary neon (cooler)
      neonTeal: RGB;        // teal reflections/cyber rain
      neonPink: RGB;        // soft rim light on human skin

      spark: RGB;           // tiny sparks
      heat: RGB;            // scorch/oil smear warmth
      copper: RGB;          // frayed wires

      surface: RGB;         // card surfaces on void
      textPrimary: RGB;     // high-contrast text on void
      textSecondary: RGB;   // subdued text on void
      focus: RGB;           // accessibility focus ring
    };
    gradient: {
      brand: string;        // magenta → violet → indigo sweep
      rimlightPink: string; // subtle pink rim
      tealEdge: string;     // teal edge glow
      voidVignette: string; // vignette overlay for depth
      oilSheen: string;     // magenta ↔ teal interference
    };
    shadow: {
      neonMagenta: string;
      neonViolet: string;
      neonTeal: string;
      softSurface: string;
      hardEdge: string;
    };
    blur: {
      bloomSm: string;
      bloomMd: string;
      bloomLg: string;
    };
    radius: {
      xs: Rem;
      sm: Rem;
      md: Rem;
      lg: Rem;
      xl: Rem;
      pill: Rem;
    };
    spacing: {
      xs: Rem;
      sm: Rem;
      md: Rem;
      lg: Rem;
      xl: Rem;
      '2xl': Rem;
      '3xl': Rem;
    };
    typography: {
      fontSans: string;
      fontMono: string;
      sizes: {
        xs: Rem;
        sm: Rem;
        md: Rem;
        lg: Rem;
        xl: Rem;
        '2xl': Rem;
        '3xl': Rem;
        '4xl': Rem;
      };
      weight: {
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      tracking: {
        tight: string;
        normal: string;
        wide: string;
      };
      leading: {
        tight: number;
        normal: number;
        relaxed: number;
      };
    };
    motion: {
      duration: {
        fast: Ms;
        base: Ms;
        slow: Ms;
      };
      easing: {
        inOut: string;
        outExpo: string;
        glitch: string;
      };
    };
  };
  effects: {
    // Ready-to-use layered CSS backgrounds for CRT/VHS texture & “digital rain”
    crtScanlines: string;
    vhsStatic: string;
    digitalRain: string;
    vignette: string;
    grainOverlay: string;
  };
  keyframes: string; // CSS @keyframes for glitch/flicker/rain scroll
  components: {
    button: {
      primary: {
        base: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
      };
      ghost: {
        base: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
      };
    };
    card: {
      base: string;
      elevated: string;
      glass: string;
    };
    field: {
      base: string;
      focus: string;
      invalid: string;
    };
    tag: {
      neon: (color: 'magenta' | 'violet' | 'teal' | 'indigo' | 'pink') => string;
    };
  };
  css: string; // Compiled CSS variables + utility classes
}

/** ────────────────────────────────────────────────────────────────────────────
 *  TOKENS
 *  (Hexes tuned for synthwave contrast on deep indigo)
 *  ────────────────────────────────────────────────────────────────────────────
 */
export const styleGuide: StyleGuide = {
  meta: {
    name: "CyberRelic",
    version: "1.0.0",
    description:
      "Retro-anime cyberpunk synthwave with CRT/VHS texture, neon rim lights, soft bloom, and deep indigo voids.",
  },
  tokens: {
    color: {
      void: "#07070d",
      voidAlt: "#0b1026",
      gunmetal: "#2b323b",
      gunmetalAlt: "#434b55",

      neonMagenta: "#ff2a6d",
      neonViolet: "#a64dff",
      neonIndigo: "#5a6cff",
      neonTeal: "#2de2e6",
      neonPink: "#ff6ec7",

      spark: "#ffd166",
      heat: "#ff9a8b",
      copper: "#b87333",

      surface: "#121520",
      textPrimary: "#e6ecff",
      textSecondary: "#a9b3d1",
      focus: "#7aa2ff",
    },
    gradient: {
      brand:
        "linear-gradient(135deg, #ff2a6d 0%, #a64dff 45%, #5a6cff 100%)",
      rimlightPink:
        "radial-gradient(60% 80% at 50% 0%, rgba(255,110,199,0.35) 0%, rgba(255,110,199,0.0) 70%)",
      tealEdge:
        "radial-gradient(80% 120% at 0% 50%, rgba(45,226,230,0.35) 0%, rgba(45,226,230,0.0) 70%)",
      voidVignette:
        "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.55) 100%)",
      oilSheen:
        "linear-gradient(120deg, rgba(45,226,230,0.15), rgba(255,42,109,0.15))",
    },
    shadow: {
      neonMagenta:
        "0 0 0.5rem rgba(255,42,109,0.6), 0 0 1.5rem rgba(255,42,109,0.35), inset 0 0 0.6rem rgba(255,42,109,0.25)",
      neonViolet:
        "0 0 0.5rem rgba(166,77,255,0.6), 0 0 1.5rem rgba(166,77,255,0.35), inset 0 0 0.6rem rgba(166,77,255,0.25)",
      neonTeal:
        "0 0 0.5rem rgba(45,226,230,0.65), 0 0 1.5rem rgba(45,226,230,0.35), inset 0 0 0.6rem rgba(45,226,230,0.25)",
      softSurface: "0 8px 28px rgba(0,0,0,0.45)",
      hardEdge: "0 2px 0 rgba(0,0,0,0.6), 0 24px 48px rgba(0,0,0,0.5)",
    },
    blur: {
      bloomSm: "blur(6px)",
      bloomMd: "blur(12px)",
      bloomLg: "blur(24px)",
    },
    radius: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.5rem",
      pill: "999rem",
    },
    spacing: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
    },
    typography: {
      fontSans:
        "Inter, 'Space Grotesk', 'Chakra Petch', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, sans-serif",
      fontMono:
        "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      sizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3rem",
      },
      weight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      tracking: {
        tight: "-0.02em",
        normal: "0",
        wide: "0.04em",
      },
      leading: {
        tight: 1.1,
        normal: 1.35,
        relaxed: 1.6,
      },
    },
    motion: {
      duration: {
        fast: "130ms",
        base: "220ms",
        slow: "420ms",
      },
      easing: {
        inOut: "cubic-bezier(.45,.05,.55,.95)",
        outExpo: "cubic-bezier(.16,1,.3,1)",
        glitch: "steps(12, end)",
      },
    },
  },
  effects: {
    crtScanlines:
      `repeating-linear-gradient(
        to bottom,
        rgba(255,255,255,0.035) 0px,
        rgba(255,255,255,0.035) 1px,
        transparent 1px,
        transparent 3px
      )`,
    vhsStatic:
      `repeating-linear-gradient(
        90deg,
        rgba(255,255,255,0.02) 0,
        rgba(255,255,255,0.02) 2px,
        transparent 2px,
        transparent 4px
      )`,
    digitalRain:
      `repeating-linear-gradient(
        to bottom,
        transparent 0px,
        transparent 2px,
        rgba(45,226,230,0.05) 3px,
        transparent 4px
      )`,
    vignette:
      `radial-gradient(
        120% 120% at 50% 50%,
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,0.25) 55%,
        rgba(0,0,0,0.6) 100%
      )`,
    grainOverlay:
      `url('data:image/svg+xml;utf8,` +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140">
          <filter id="n">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.04"/>
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(%23n)"/>
        </svg>
      `) + `')`,
  },
  keyframes: `
@keyframes crt-flicker {
  0%, 100% { opacity: 0.98; }
  10% { opacity: 0.95; }
  20% { opacity: 0.99; }
  30% { opacity: 0.96; }
  40% { opacity: 0.98; }
  50% { opacity: 0.94; }
  60% { opacity: 0.99; }
  70% { opacity: 0.97; }
  80% { opacity: 0.95; }
  90% { opacity: 0.99; }
}

@keyframes rain-scroll {
  0% { background-position: 0 0; }
  100% { background-position: 0 300px; }
}

@keyframes neon-glitch {
  0% { transform: translate(0,0); filter: hue-rotate(0deg); }
  10% { transform: translate(-1px, 1px); }
  20% { transform: translate(1px, -1px); }
  30% { transform: translate(-2px, 0); }
  40% { transform: translate(2px, 1px); }
  50% { transform: translate(0, -2px); filter: hue-rotate(10deg); }
  60% { transform: translate(1px, 0); }
  70% { transform: translate(-1px, 1px); }
  80% { transform: translate(2px, -1px); }
  90% { transform: translate(-2px, 0); }
  100% { transform: translate(0,0); filter: hue-rotate(0deg); }
}

@keyframes tremble {
  0% { transform: translateX(0) }
  50% { transform: translateX(0.5px) }
  100% { transform: translateX(0) }
}
`,
  components: {
    button: {
      primary: {
        base: `
          color: ${"#0b1026"};
          background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(0,0,0,0.12)) , ${"linear-gradient(135deg, #ff2a6d, #a64dff 60%, #5a6cff)"};
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          padding: 0.75rem 1rem;
          box-shadow: ${"0 0 0.5rem rgba(255,42,109,0.6), 0 0 1.5rem rgba(166,77,255,0.35)"};
          transition: transform 220ms cubic-bezier(.16,1,.3,1), box-shadow 220ms cubic-bezier(.16,1,.3,1), filter 220ms cubic-bezier(.16,1,.3,1);
          text-shadow: 0 0 0.25rem rgba(255,255,255,0.25);
        `,
        hover: `
          transform: translateY(-1px);
          filter: brightness(1.08) saturate(1.05);
          box-shadow: ${"0 0 0.6rem rgba(255,42,109,0.75), 0 0 2rem rgba(166,77,255,0.45)"};
        `,
        active: `
          transform: translateY(0);
          filter: brightness(0.98);
        `,
        focus: `
          outline: none;
          box-shadow: 0 0 0 3px rgba(122,162,255,0.55), inset 0 0 0.6rem rgba(255,255,255,0.08);
        `,
        disabled: `
          opacity: 0.5;
          cursor: not-allowed;
          filter: grayscale(0.2);
        `,
      },
      ghost: {
        base: `
          color: #e6ecff;
          background: transparent;
          border: 1px solid rgba(230,236,255,0.14);
          border-radius: 999px;
          padding: 0.75rem 1rem;
          backdrop-filter: blur(6px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.35);
          transition: border-color 220ms cubic-bezier(.16,1,.3,1), color 220ms cubic-bezier(.16,1,.3,1);
        `,
        hover: `
          border-color: rgba(166,77,255,0.55);
          color: #ff6ec7;
          text-shadow: 0 0 0.5rem rgba(255,110,199,0.6);
        `,
        active: `
          transform: translateY(0);
          opacity: 0.95;
        `,
        focus: `
          outline: none;
          box-shadow: 0 0 0 3px rgba(45,226,230,0.45);
        `,
        disabled: `
          opacity: 0.5; cursor: not-allowed;
        `,
      },
    },
    card: {
      base: `
        background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015)) , #121520;
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 1rem;
        box-shadow: 0 8px 28px rgba(0,0,0,0.45);
      `,
      elevated: `
        background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)) , #121520;
        border: 1px solid rgba(255,255,255,0.12);
        box-shadow: 0 16px 48px rgba(0,0,0,0.55), 0 0 1.25rem rgba(166,77,255,0.25);
      `,
      glass: `
        background: linear-gradient(180deg, rgba(11,16,38,0.55), rgba(18,21,32,0.45));
        border: 1px solid rgba(255,255,255,0.10);
        backdrop-filter: blur(12px);
        box-shadow: 0 16px 48px rgba(0,0,0,0.5);
      `,
    },
    field: {
      base: `
        background: rgba(7,7,13,0.6);
        color: #e6ecff;
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 0.75rem;
        padding: 0.75rem 0.875rem;
        transition: border-color 130ms ease, box-shadow 130ms ease;
      `,
      focus: `
        border-color: rgba(122,162,255,0.7);
        box-shadow: 0 0 0 3px rgba(122,162,255,0.28), inset 0 0 0.6rem rgba(255,255,255,0.04);
        outline: none;
      `,
      invalid: `
        border-color: rgba(255,42,109,0.8);
        box-shadow: 0 0 0 3px rgba(255,42,109,0.25);
      `,
    },
    tag: {
      neon: (color) => {
        const map = {
          magenta: "#ff2a6d",
          violet: "#a64dff",
          teal: "#2de2e6",
          indigo: "#5a6cff",
          pink: "#ff6ec7",
        } as const;
        const c = map[color];
        return `
          color: ${c};
          border: 1px solid ${c}55;
          background: ${c}10;
          box-shadow: 0 0 0.5rem ${c}66, inset 0 0 0.5rem ${c}26;
          border-radius: 0.5rem;
          padding: 0.25rem 0.5rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        `;
      },
    },
  },
  css: "", // (populated below)
};

// Build CSS custom properties + utilities
const t = styleGuide.tokens;
styleGuide.css = `
:root {
  --c-void: ${t.color.void};
  --c-void-alt: ${t.color.voidAlt};
  --c-surface: ${t.color.surface};
  --c-gunmetal: ${t.color.gunmetal};
  --c-gunmetal-alt: ${t.color.gunmetalAlt};

  --c-neon-magenta: ${t.color.neonMagenta};
  --c-neon-violet: ${t.color.neonViolet};
  --c-neon-indigo: ${t.color.neonIndigo};
  --c-neon-teal: ${t.color.neonTeal};
  --c-neon-pink: ${t.color.neonPink};

  --c-spark: ${t.color.spark};
  --c-heat: ${t.color.heat};
  --c-copper: ${t.color.copper};

  --c-text: ${t.color.textPrimary};
  --c-text-2: ${t.color.textSecondary};
  --c-focus: ${t.color.focus};

  --grad-brand: ${t.gradient.brand};
  --grad-rim-pink: ${t.gradient.rimlightPink};
  --grad-teal-edge: ${t.gradient.tealEdge};
  --grad-void-vignette: ${t.gradient.voidVignette};
  --grad-oil-sheen: ${t.gradient.oilSheen};

  --sh-neon-magenta: ${t.shadow.neonMagenta};
  --sh-neon-violet: ${t.shadow.neonViolet};
  --sh-neon-teal: ${t.shadow.neonTeal};
  --sh-soft: ${t.shadow.softSurface};
  --sh-hard: ${t.shadow.hardEdge};

  --blur-bloom-sm: ${t.blur.bloomSm};
  --blur-bloom-md: ${t.blur.bloomMd};
  --blur-bloom-lg: ${t.blur.bloomLg};

  --r-xs: ${t.radius.xs};
  --r-sm: ${t.radius.sm};
  --r-md: ${t.radius.md};
  --r-lg: ${t.radius.lg};
  --r-xl: ${t.radius.xl};
  --r-pill: ${t.radius.pill};

  --sp-xs: ${t.spacing.xs};
  --sp-sm: ${t.spacing.sm};
  --sp-md: ${t.spacing.md};
  --sp-lg: ${t.spacing.lg};
  --sp-xl: ${t.spacing.xl};
  --sp-2xl: ${t.spacing["2xl"]};
  --sp-3xl: ${t.spacing["3xl"]};

  --font-sans: ${t.typography.fontSans};
  --font-mono: ${t.typography.fontMono};

  --fz-xs: ${t.typography.sizes.xs};
  --fz-sm: ${t.typography.sizes.sm};
  --fz-md: ${t.typography.sizes.md};
  --fz-lg: ${t.typography.sizes.lg};
  --fz-xl: ${t.typography.sizes.xl};
  --fz-2xl: ${t.typography.sizes["2xl"]};
  --fz-3xl: ${t.typography.sizes["3xl"]};
  --fz-4xl: ${t.typography.sizes["4xl"]};

  --fw-regular: ${t.typography.weight.regular};
  --fw-medium: ${t.typography.weight.medium};
  --fw-semibold: ${t.typography.weight.semibold};
  --fw-bold: ${t.typography.weight.bold};

  --track-tight: ${t.typography.tracking.tight};
  --track-normal: ${t.typography.tracking.normal};
  --track-wide: ${t.typography.tracking.wide};

  --lead-tight: ${t.typography.leading.tight};
  --lead-normal: ${t.typography.leading.normal};
  --lead-relaxed: ${t.typography.leading.relaxed};

  --dur-fast: ${t.motion.duration.fast};
  --dur-base: ${t.motion.duration.base};
  --dur-slow: ${t.motion.duration.slow};

  --ease-io: ${t.motion.easing.inOut};
  --ease-expo: ${t.motion.easing.outExpo};
  --ease-glitch: ${t.motion.easing.glitch};

  --fx-crt-scanlines: ${styleGuide.effects.crtScanlines};
  --fx-vhs-static: ${styleGuide.effects.vhsStatic};
  --fx-digital-rain: ${styleGuide.effects.digitalRain};
  --fx-vignette: ${styleGuide.effects.vignette};
  --fx-grain: ${styleGuide.effects.grainOverlay};
}

/* Base “void” canvas */
body {
  background: var(--c-void);
  color: var(--c-text);
  font-family: var(--font-sans);
  letter-spacing: var(--track-normal);
  line-height: var(--lead-normal);
}

/* CRT + VHS textures (stack any of these as overlays) */
.fx-crt { background-image: var(--fx-crt-scanlines) !important; }
.fx-vhs { background-image: var(--fx-vhs-static) !important; }
.fx-rain { background-image: var(--fx-digital-rain); animation: rain-scroll 8s linear infinite; }
.fx-grain { background-image: var(--fx-grain); mix-blend-mode: soft-light; }
.fx-vignette { background-image: var(--fx-vignette); }

/* “Desperate connection” hero backdrop */
.hero-void {
  background:
    var(--grad-void-vignette),
    radial-gradient(40% 70% at 20% 80%, rgba(45,226,230,0.20), transparent 70%),
    radial-gradient(40% 70% at 80% 20%, rgba(255,110,199,0.18), transparent 70%),
    linear-gradient(180deg, #0b1026 0%, #07070d 100%);
  position: relative;
  overflow: clip;
}

/* Neon rims and bloom helpers */
.rim-pink { background-image: var(--grad-rim-pink); pointer-events: none; }
.edge-teal { background-image: var(--grad-teal-edge); pointer-events: none; }
.glow-magenta { box-shadow: var(--sh-neon-magenta); }
.glow-violet { box-shadow: var(--sh-neon-violet); }
.glow-teal { box-shadow: var(--sh-neon-teal); }
.bloom-sm { filter: var(--blur-bloom-sm); }
.bloom-md { filter: var(--blur-bloom-md); }
.bloom-lg { filter: var(--blur-bloom-lg); }

/* Typography utilities */
.h1 { font-size: var(--fz-4xl); font-weight: var(--fw-bold); letter-spacing: var(--track-tight); line-height: var(--lead-tight); }
.h2 { font-size: var(--fz-3xl); font-weight: var(--fw-semibold); letter-spacing: var(--track-tight); line-height: var(--lead-tight); }
.h3 { font-size: var(--fz-2xl); font-weight: var(--fw-semibold); }
.lead { font-size: var(--fz-lg); color: var(--c-text-2); }

/* Button presets */
.btn-primary {
  ${styleGuide.components.button.primary.base}
}
.btn-primary:hover { ${styleGuide.components.button.primary.hover} }
.btn-primary:active { ${styleGuide.components.button.primary.active} }
.btn-primary:focus-visible { ${styleGuide.components.button.primary.focus} }
.btn-primary[disabled] { ${styleGuide.components.button.primary.disabled} }

.btn-ghost {
  ${styleGuide.components.button.ghost.base}
}
.btn-ghost:hover { ${styleGuide.components.button.ghost.hover} }
.btn-ghost:active { ${styleGuide.components.button.ghost.active} }
.btn-ghost:focus-visible { ${styleGuide.components.button.ghost.focus} }
.btn-ghost[disabled] { ${styleGuide.components.button.ghost.disabled} }

/* Card presets */
.card { ${styleGuide.components.card.base} }
.card--elevated { ${styleGuide.components.card.elevated} }
.card--glass { ${styleGuide.components.card.glass} }

/* Fields */
.field { ${styleGuide.components.field.base} }
.field:focus { ${styleGuide.components.field.focus} }
.field[aria-invalid="true"], .field.invalid { ${styleGuide.components.field.invalid} }

/* Motion + FX */
.flicker { animation: crt-flicker 3.5s ease-in-out infinite; }
.glitch { animation: neon-glitch 700ms var(--ease-glitch) infinite; }
.tremble { animation: tremble 220ms linear infinite; }

/* Link treatment: subtle neon underline */
a {
  color: var(--c-text);
  text-decoration: none;
  border-bottom: 1px solid rgba(166,77,255,0.45);
  transition: color var(--dur-base) var(--ease-io), border-color var(--dur-base) var(--ease-io), text-shadow var(--dur-base) var(--ease-io);
}
a:hover {
  color: var(--c-neon-pink);
  border-color: rgba(255,42,109,0.65);
  text-shadow: 0 0 0.6rem rgba(255,110,199,0.6);
}

/* Keyframes */
${styleGuide.keyframes}
`;

/** Utility: inject the CSS variables & utilities into the document (optional). */
export function injectStyleGuideCSS(id = "cyberrelic-style") {
  if (typeof document === "undefined") return;
  const prev = document.getElementById(id);
  const style = document.createElement("style");
  style.id = id;
  style.textContent = styleGuide.css;
  if (prev) prev.remove();
  document.head.appendChild(style);
}

/** Optional: Tailwind preset scaffolding (plug into `presets` or `theme.extend`). */
export const tailwindPreset = {
  theme: {
    extend: {
      colors: {
        void: styleGuide.tokens.color.void,
        'void-alt': styleGuide.tokens.color.voidAlt,
        surface: styleGuide.tokens.color.surface,
        gunmetal: styleGuide.tokens.color.gunmetal,
        'gunmetal-alt': styleGuide.tokens.color.gunmetalAlt,
        magenta: styleGuide.tokens.color.neonMagenta,
        violet: styleGuide.tokens.color.neonViolet,
        indigo: styleGuide.tokens.color.neonIndigo,
        teal: styleGuide.tokens.color.neonTeal,
        pink: styleGuide.tokens.color.neonPink,
        spark: styleGuide.tokens.color.spark,
        heat: styleGuide.tokens.color.heat,
        copper: styleGuide.tokens.color.copper,
        text: styleGuide.tokens.color.textPrimary,
        'text-2': styleGuide.tokens.color.textSecondary,
        focus: styleGuide.tokens.color.focus,
      },
      boxShadow: {
        'neon-magenta': styleGuide.tokens.shadow.neonMagenta,
        'neon-violet': styleGuide.tokens.shadow.neonViolet,
        'neon-teal': styleGuide.tokens.shadow.neonTeal,
        soft: styleGuide.tokens.shadow.softSurface,
        hard: styleGuide.tokens.shadow.hardEdge,
      },
      borderRadius: {
        xs: styleGuide.tokens.radius.xs,
        sm: styleGuide.tokens.radius.sm,
        md: styleGuide.tokens.radius.md,
        lg: styleGuide.tokens.radius.lg,
        xl: styleGuide.tokens.radius.xl,
        pill: styleGuide.tokens.radius.pill,
      },
      fontFamily: {
        sans: styleGuide.tokens.typography.fontSans.split(","),
        mono: styleGuide.tokens.typography.fontMono.split(","),
      },
    },
  },
};

export default styleGuide;
