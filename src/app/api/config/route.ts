import { NextRequest, NextResponse } from "next/server";

import createSupabaseServerClient from "@/supabase/server";

export const fetchCache = "force-no-store";
export const revalidate = 0; // seconds
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const newConfig = await req.json();
  console.log(newConfig);

  try {
    const supabase = await createSupabaseServerClient();
    const resp = await supabase
      .from("config")
      .upsert({link: process.env.NEXT_PUBLIC_URL_ORIGIN, config: newConfig })
      .eq("link", process.env.NEXT_PUBLIC_URL_ORIGIN);

    console.log(resp);

    return NextResponse.json({
      status: 200,
      message: "Updated client",
    });
  } catch (err) {
    return NextResponse.json({
      status: 400,
      message: "Bad",
    });
  }
}

export async function GET(req: NextRequest) {
  // const filePath = path.join(process.cwd(), "/src/config/config.json");
  const supabase = await createSupabaseServerClient({  
    auth: {
      persistSession: false,
    },
  });

  const resp = await supabase
    .from("config")
    .select("config")
    .eq("link", process.env.NEXT_PUBLIC_URL_ORIGIN)
    .single();
  console.log(resp);
  console.log(resp.data);

  return NextResponse.json({
    status: 200,
    message: "Config",
    data: resp.data,
  });
}
