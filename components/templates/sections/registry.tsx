export function HeroSection({ content, businessName }: { content: Record<string, unknown>; businessName: string }) {
  return <section className="section-shell py-24"><p className="text-muted">Preview</p><h1 className="font-display text-6xl">{String(content.headline ?? businessName)}</h1></section>;
}
export function ServicesSection({ content }: { content: Record<string, unknown> }) {
  const items = (content.items as string[] | undefined) ?? ["Digital Systems", "Web Experiences", "Brand Platforms"];
  return <section className="section-shell"><h2 className="font-display text-3xl mb-5">{String(content.title ?? "Services")}</h2><div className="grid gap-3 md:grid-cols-3">{items.map((i) => <div key={i} className="rounded-lg border border-white/10 bg-[var(--preview-surface)] p-4">{i}</div>)}</div></section>;
}
export function CtaSection({ content }: { content: Record<string, unknown> }) {
  return <section className="section-shell"><div className="rounded-xl bg-[var(--preview-surface)] p-8"><h3 className="font-display text-3xl">{String(content.title ?? "Let’s Build Something Distinct")}</h3></div></section>;
}
export function FooterSection({ businessName }: { businessName: string }) {
  return <footer className="section-shell text-sm text-[var(--preview-muted)]">© {new Date().getFullYear()} {businessName}</footer>;
}
