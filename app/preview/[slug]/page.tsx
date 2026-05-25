import { notFound } from "next/navigation";
import { PreviewRenderer } from "@/components/templates/preview-renderer";
import { fallbackTemplate, getPreviewBySlug, getTemplateBySlug } from "@/lib/supabase/queries";

export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const preview = await getPreviewBySlug(slug);

  if (!preview && slug !== "east-village-fitness") {
    notFound();
  }

  const template = (preview ? await getTemplateBySlug(preview.template_slug) : null) ?? fallbackTemplate();
  const businessName = preview?.business_name ?? "East Village Fitness";

  return <PreviewRenderer template={template} themeOverride={preview?.theme_override} businessName={businessName} />;
}
