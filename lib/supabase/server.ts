import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import type { SupabaseCookieToSet } from "@/lib/supabase/cookies";

type CookieAdapter = {
  getAll: () => ReturnType<Awaited<ReturnType<typeof cookies>>["getAll"]>;
  setAll: (cookiesToSet: SupabaseCookieToSet[]) => void;
};

export async function createClient() {
  const cookieStore = await cookies();

  const cookieAdapter: CookieAdapter = {
    getAll: () => cookieStore.getAll(),
    setAll: (cookiesToSet) => {
      cookiesToSet.forEach(({ name, value, options }) => {
        cookieStore.set(name, value, options);
      });
    },
  };

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: cookieAdapter,
    }
  );
}
