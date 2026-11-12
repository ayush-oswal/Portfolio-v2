// ─── TECHNICAL BRUTALISM PALETTE ─────────────────────────────────────────────
// SYNC: Keep in sync with CSS variables and body::before grid in app/globals.css.
export const ACCENT_HEX = "#6B9EFF"; // Ship Blue / System Blue
export const ACCENT_HEX_DIM = "#4C82EB";
export const ACCENT_RGB = "107, 158, 255";
export const ACCENT_HSL = "219 100% 71%";

// Background palette
export const BG_BASE = "#101014"; // Deep Onyx
export const BG_SURFACE = "#15151B";
export const BG_ELEVATED = "#1C1C24";
export const BORDER_LINE = "rgba(242, 241, 238, 0.16)";

// Text palette
export const TEXT_PRIMARY = "#F2F1EE"; // Warm Off-white
export const TEXT_MUTED = "#85858D";

// ─── FRAMER MOTION PRESETS ────────────────────────────────────────────────────
export const REVEAL_UP = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
};

export const REVEAL_FADE = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

// Scroll-triggered 6px Y-axis slide for sidebar section labels
export const SIDEBAR_LABEL_SLIDE = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.25, ease: "easeOut" },
};
