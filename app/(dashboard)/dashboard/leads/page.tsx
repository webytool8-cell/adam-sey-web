import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { getLeads } from "@/lib/supabase/queries";

export default async function LeadsPage() {
  const leads = await getLeads();

  return <DashboardShell title="Leads"><div className="rounded-xl border border-white/10 overflow-hidden"><table className="w-full text-sm"><thead className="bg-surface text-muted"><tr><th className="p-3 text-left">Business</th><th>Status</th><th>Category</th><th>Contact</th></tr></thead><tbody>{leads.map((lead)=><tr key={lead.id} className="border-t border-white/10"><td className="p-3">{lead.business_name}</td><td>{lead.project_status}</td><td>{lead.business_category ?? "—"}</td><td>{lead.contact_email ?? "—"}</td></tr>)}</tbody></table></div></DashboardShell>;
}
