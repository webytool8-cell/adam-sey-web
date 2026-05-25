import Link from "next/link";

const links = [
  ["Overview", "/dashboard"],
  ["Leads", "/dashboard/leads"],
  ["Previews", "/dashboard/previews"],
  ["Templates", "/dashboard/templates"],
  ["Projects", "/dashboard/projects"],
  ["Settings", "/dashboard/settings"],
] as const;

export function DashboardShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="section-shell grid gap-8 lg:grid-cols-[220px_1fr]">
      <aside className="rounded-xl border border-white/10 bg-surface p-4 h-fit">
        <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted">Studio Ops</p>
        <nav className="space-y-1 text-sm">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="block rounded-md px-3 py-2 text-muted hover:bg-white/5 hover:text-text">
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <section>
        <h1 className="font-display text-4xl mb-6">{title}</h1>
        {children}
      </section>
    </main>
  );
}
