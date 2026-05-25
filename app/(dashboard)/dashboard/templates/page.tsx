import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { getTemplates } from "@/lib/supabase/queries";

export default async function TemplatesPage() {
  const templates = await getTemplates();
  return <DashboardShell title="Template Manager"><div className="grid gap-4 md:grid-cols-2">{templates.map((template)=><article key={template.id} className="rounded-xl border border-white/10 bg-surface p-5"><h2 className="font-display text-2xl">{template.name}</h2><p className="text-muted mt-2">/{template.slug}</p><p className="mt-4 text-sm">Sections: {template.sections.length}</p></article>)}</div></DashboardShell>;
}
