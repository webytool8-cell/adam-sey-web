import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import type { SupabaseCookieToSet } from "@/lib/supabase/cookies";

type MiddlewareCookieAdapter = {
  getAll: () => ReturnType<NextRequest["cookies"]["getAll"]>;
  setAll: (cookiesToSet: SupabaseCookieToSet[]) => void;
};

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();

  const cookieAdapter: MiddlewareCookieAdapter = {
    getAll: () => req.cookies.getAll(),
    setAll: (cookiesToSet) => {
      cookiesToSet.forEach(({ name, value }) => req.cookies.set(name, value));
      cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
    },
  };

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: cookieAdapter }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (req.nextUrl.pathname.startsWith("/dashboard") && !user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return response;
}

export const config = { matcher: ["/dashboard/:path*"] };
