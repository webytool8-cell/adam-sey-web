export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main className="section-shell">
      <h1 className="font-display text-4xl">Experience Preview</h1>
      <p className="text-muted mt-3">Module: {slug}</p>
    </main>
  );
}
