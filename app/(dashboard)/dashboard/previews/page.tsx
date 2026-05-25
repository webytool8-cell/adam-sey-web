import Link from "next/link";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function PreviewsPage() {
  return <DashboardShell title="Preview Projects"><div className="rounded-xl border border-white/10 bg-surface p-6"><p className="text-muted">Create and manage dynamic preview URLs generated from template + business data.</p><Link href="/preview/east-village-fitness" className="inline-block mt-4 text-accent">Open sample preview →</Link></div></DashboardShell>;
}
