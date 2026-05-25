import { HomeSections } from "@/components/sections/home-sections";

export default function HomePage() {
  return (
    <main className="section-shell space-y-16">
      <section className="space-y-6 py-10">
        <p className="text-sm uppercase tracking-[0.2em] text-muted">New York Digital Studio</p>
        <h1 className="max-w-4xl font-display text-6xl leading-tight">Digital systems and web experiences engineered with editorial precision.</h1>
        <p className="max-w-2xl text-lg text-muted">Adam Sey designs premium, scalable website ecosystems for modern brands.</p>
      </section>
      <HomeSections />
    </main>
  );
}
