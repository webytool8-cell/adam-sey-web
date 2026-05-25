import { createClient } from "@/lib/supabase/server";

export default async function OwnerPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <main className="section-shell">
      <h1 className="font-display text-4xl">Owner Dashboard</h1>
      <p className="mt-3 text-muted">Authenticated as: {data.user?.email}</p>
    </main>
  );
}
