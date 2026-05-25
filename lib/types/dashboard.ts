export type LeadStatus = "new" | "contacted" | "preview created" | "active" | "completed";

export type Lead = {
  id: string;
  business_name: string;
  website_url: string | null;
  contact_name: string | null;
  contact_email: string | null;
  contact_phone: string | null;
  project_notes: string | null;
  business_category: string | null;
  project_status: LeadStatus;
  created_at: string;
};

export type ThemeTokens = {
  colors: { background: string; surface: string; text: string; muted: string; accent: string };
  typography: { headingFont: string; bodyFont: string; scale: string };
  spacing: { sectionY: string; containerX: string };
  radius: { card: string; button: string };
  button: { style: "solid" | "outline"; weight: "medium" | "semibold" };
};

export type TemplateSectionType = "hero" | "services" | "gallery" | "testimonials" | "faq" | "cta" | "footer";

export type TemplateSection = {
  id: string;
  type: TemplateSectionType;
  enabled: boolean;
  content: Record<string, unknown>;
};

export type TemplateDefinition = {
  id: string;
  name: string;
  slug: string;
  theme: ThemeTokens;
  content: Record<string, unknown>;
  sections: TemplateSection[];
};

export type PreviewProject = {
  id: string;
  slug: string;
  business_name: string;
  template_slug: string;
  logo_url: string | null;
  business_details: Record<string, unknown>;
  theme_override: Partial<ThemeTokens> | null;
};
