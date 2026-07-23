// packages/tailwind-config/src/preset.ts
export const preset = {
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        text: "var(--text)",
        muted: "var(--muted)",
        border: "var(--border)",
        brand: "var(--brand)",
        "brand-2": "var(--brand-2)",
      }
    }
  }
};
