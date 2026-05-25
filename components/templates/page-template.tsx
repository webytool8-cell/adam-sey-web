import { ReactNode } from "react";

export function PageTemplate({ title, intro, children }: { title: string; intro: string; children?: ReactNode }) {
  return (
    <main className="section-shell">
      <h1 className="font-display text-5xl tracking-tight">{title}</h1>
      <p className="mt-4 max-w-2xl text-muted">{intro}</p>
      {children ? <div className="mt-12">{children}</div> : null}
    </main>
  );
}
