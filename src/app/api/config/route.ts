import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function POST(req: NextRequest) {
  const newConfig = await req.json();
  console.log(newConfig);

  try {
    await fs.writeFile(
      process.cwd() + "/src/config/config.json",
      JSON.stringify(newConfig)
    );

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
