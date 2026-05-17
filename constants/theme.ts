// ─── ACCENT COLOR ──────────────────────────────────────────────────────────────
// Change ACCENT_HEX here and it propagates everywhere.
// NOTE: After changing, also update the rgba() value in app/globals.css (body::before dot grid).
export const ACCENT_HEX = "#C8FF00";
export const ACCENT_HEX_DIM = "#A0CC00";
export const ACCENT_RGB = "200, 255, 0";
export const ACCENT_HSL = "74 100% 50%"; // HSL triplet, no hsl() wrapper

// Background palette
export const BG_BASE = "#0A0A0A";
export const BG_SURFACE = "#111111";
export const BG_ELEVATED = "#1A1A1A";
export const BG_BORDER = "#2A2A2A";

// Text palette
export const TEXT_PRIMARY = "#F0F0F0";
export const TEXT_SECONDARY = "#888888";

// ─── FRAMER MOTION PRESETS ────────────────────────────────────────────────────
export const REVEAL_UP = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export const REVEAL_FADE = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};
