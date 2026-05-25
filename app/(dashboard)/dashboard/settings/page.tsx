import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { defaultThemeTokens } from "@/lib/themes/tokens";

export default function SettingsPage() {
  return <DashboardShell title="Global Settings"><pre className="rounded-xl border border-white/10 bg-surface p-5 text-xs overflow-auto">{JSON.stringify(defaultThemeTokens, null, 2)}</pre></DashboardShell>;
}
