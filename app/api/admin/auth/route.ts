import { NextRequest, NextResponse } from "next/server"
import { getAdminUsername, getAdminPassword } from "@/lib/env"

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    const adminUsername = getAdminUsername()
    const adminPassword = getAdminPassword()

    if (!adminUsername || !adminPassword) {
      return NextResponse.json(
        { error: "Admin access not configured" },
        { status: 500 }
      )
    }

    if (username === adminUsername && password === adminPassword) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    )
  } catch {
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    )
  }
}
