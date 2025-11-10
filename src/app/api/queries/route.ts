import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { name, email, phone, message, subject } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const query = await prisma.query.create({
      data: {
        userId: session.user.id,
        name,
        email,
        phone,
        message,
        subject,
        status: "pending",
        priority: "normal"
      }
    })

    return NextResponse.json(
      {
        message: "Query submitted successfully",
        query
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Query creation error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(req.url)
    const status = searchParams.get("status")
    const isAdmin = session.user.role === "admin"

    let queries

    if (isAdmin) {
      // Admin can see all queries
      queries = await prisma.query.findMany({
        where: status ? { status } : {},
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true
            }
          }
        },
        orderBy: {
          createdAt: "desc"
        }
      })
    } else {
      // Users can only see their own queries
      queries = await prisma.query.findMany({
        where: {
          userId: session.user.id,
          ...(status && { status })
        },
        orderBy: {
          createdAt: "desc"
        }
      })
    }

    return NextResponse.json({ queries }, { status: 200 })
  } catch (error) {
    console.error("Query fetch error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
