import Link from "next/link";

const nav = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["Process", "/process"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/90 backdrop-blur">
      <div className="section-shell flex items-center justify-between py-5">
        <Link href="/" className="font-display text-lg tracking-[0.2em]">ADAM SEY</Link>
        <nav className="flex gap-6 text-sm text-muted">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-text transition-colors">{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
