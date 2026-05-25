import type { CSSProperties } from "react";
import { TemplateDefinition, ThemeTokens } from "@/lib/types/dashboard";
import { HeroSection, ServicesSection, CtaSection, FooterSection } from "@/components/templates/sections/registry";

function mergeTheme(base: ThemeTokens, override?: Partial<ThemeTokens> | null): ThemeTokens {
  return {
    ...base,
    ...override,
    colors: { ...base.colors, ...(override?.colors ?? {}) },
    typography: { ...base.typography, ...(override?.typography ?? {}) },
    spacing: { ...base.spacing, ...(override?.spacing ?? {}) },
    radius: { ...base.radius, ...(override?.radius ?? {}) },
    button: { ...base.button, ...(override?.button ?? {}) },
  };
}

export function PreviewRenderer({ template, themeOverride, businessName }: { template: TemplateDefinition; themeOverride?: Partial<ThemeTokens> | null; businessName: string }) {
  const theme = mergeTheme(template.theme, themeOverride);
  const style = {
    ["--preview-bg" as string]: theme.colors.background,
    ["--preview-surface" as string]: theme.colors.surface,
    ["--preview-text" as string]: theme.colors.text,
    ["--preview-muted" as string]: theme.colors.muted,
    ["--preview-accent" as string]: theme.colors.accent,
  } as CSSProperties;

  return (
    <div style={style} className="min-h-screen bg-[var(--preview-bg)] text-[var(--preview-text)]">
      {template.sections.filter((s) => s.enabled).map((section) => {
        switch (section.type) {
          case "hero":
            return <HeroSection key={section.id} content={section.content} businessName={businessName} />;
          case "services":
            return <ServicesSection key={section.id} content={section.content} />;
          case "cta":
            return <CtaSection key={section.id} content={section.content} />;
          case "footer":
            return <FooterSection key={section.id} businessName={businessName} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
