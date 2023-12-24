import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const newConfig = await req.json();
  console.log(newConfig);

  try {
    const filePath = path.join(process.cwd(), "/src/config/config.json");
    await fs.writeFile(filePath, JSON.stringify(newConfig));

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
  const filePath = path.join(process.cwd(), "/src/config/config.json");
  const config = JSON.parse(await fs.readFile(filePath, "utf-8"));

  return NextResponse.json({
    status: 200,
    message: "Config",
    data: config,
  });
}
