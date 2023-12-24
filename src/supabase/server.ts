"use server";
import { createServerClient, CookieOptions } from "@supabase/ssr";
import { SupabaseClientOptions } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export default async function createSupabaseServerClient(
  options: SupabaseClientOptions<"public"> = {}
) {
  const cookieStore = cookies();

  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL!);
  console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options?: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
      ...options,
    }
  );
}
