import { NextRequest, NextResponse } from "next/server"
import { getAdminPassword } from "@/lib/env"

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()
    const adminPassword = getAdminPassword()

    if (!adminPassword) {
      return NextResponse.json(
        { error: "Admin access not configured" },
        { status: 500 }
      )
    }

    if (password === adminPassword) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { error: "Invalid password" },
      { status: 401 }
    )
  } catch {
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    )
  }
}
