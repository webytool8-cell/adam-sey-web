import { ThemeTokens } from "@/lib/types/dashboard";

export const defaultThemeTokens: ThemeTokens = {
  colors: {
    background: "#0A0A0A",
    surface: "#111111",
    text: "#F5F5F5",
    muted: "#888888",
    accent: "#58A6FF",
  },
  typography: {
    headingFont: "var(--font-space-grotesk)",
    bodyFont: "var(--font-geist)",
    scale: "refined",
  },
  spacing: {
    sectionY: "4rem",
    containerX: "1.5rem",
  },
  radius: {
    card: "0.75rem",
    button: "0.5rem",
  },
  button: {
    style: "solid",
    weight: "medium",
  },
};
