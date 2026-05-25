import { createClient } from "@/lib/supabase/server";
import { Lead, PreviewProject, TemplateDefinition } from "@/lib/types/dashboard";
import { defaultThemeTokens } from "@/lib/themes/tokens";

export async function getLeads(): Promise<Lead[]> {
  const supabase = await createClient();
  const { data } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
  return (data as Lead[]) ?? [];
}

export async function getTemplates(): Promise<TemplateDefinition[]> {
  const supabase = await createClient();
  const { data } = await supabase.from("templates").select("*").order("name", { ascending: true });
  return (data as TemplateDefinition[]) ?? [];
}

export async function getPreviewBySlug(slug: string): Promise<PreviewProject | null> {
  const supabase = await createClient();
  const { data } = await supabase.from("previews").select("*").eq("slug", slug).maybeSingle();
  return (data as PreviewProject) ?? null;
}

export async function getTemplateBySlug(slug: string): Promise<TemplateDefinition | null> {
  const supabase = await createClient();
  const { data } = await supabase.from("templates").select("*").eq("slug", slug).maybeSingle();
  return (data as TemplateDefinition) ?? null;
}

export function fallbackTemplate(slug = "studio-core"): TemplateDefinition {
  return {
    id: "fallback-template",
    name: "Studio Core",
    slug,
    theme: defaultThemeTokens,
    content: {},
    sections: [
      { id: "hero", type: "hero", enabled: true, content: { headline: "Premium Digital Presence" } },
      { id: "services", type: "services", enabled: true, content: { title: "Core Services" } },
      { id: "cta", type: "cta", enabled: true, content: { title: "Start a Project" } },
      { id: "footer", type: "footer", enabled: true, content: {} },
    ],
  };
}
