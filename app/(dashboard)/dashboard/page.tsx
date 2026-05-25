import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { getLeads, getTemplates } from "@/lib/supabase/queries";

export default async function DashboardPage() {
  const [leads, templates] = await Promise.all([getLeads(), getTemplates()]);

  return (
    <DashboardShell title="Dashboard Overview">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-surface p-5"><p className="text-muted text-sm">Leads</p><p className="text-3xl mt-1">{leads.length}</p></div>
        <div className="rounded-xl border border-white/10 bg-surface p-5"><p className="text-muted text-sm">Templates</p><p className="text-3xl mt-1">{templates.length}</p></div>
        <div className="rounded-xl border border-white/10 bg-surface p-5"><p className="text-muted text-sm">Status</p><p className="text-3xl mt-1">Owner</p></div>
      </div>
    </DashboardShell>
  );
}
