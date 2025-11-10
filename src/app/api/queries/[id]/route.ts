import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

type RouteParams = {
  params: Promise<{
    id: string
  }>
}

export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)
    const { id } = await params

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const query = await prisma.query.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        }
      }
    })

    if (!query) {
      return NextResponse.json(
        { error: "Query not found" },
        { status: 404 }
      )
    }

    // Check if user owns the query or is admin
    if (query.userId !== session.user.id && session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      )
    }

    return NextResponse.json({ query }, { status: 200 })
  } catch (error) {
    console.error("Query fetch error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}

export async function PATCH(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)
    const { id } = await params

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { status, priority, notes } = body

    const existingQuery = await prisma.query.findUnique({
      where: { id }
    })

    if (!existingQuery) {
      return NextResponse.json(
        { error: "Query not found" },
        { status: 404 }
      )
    }

    // Only admin can update status, priority, and notes
    if (session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      )
    }

    const query = await prisma.query.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(priority && { priority }),
        ...(notes !== undefined && { notes }),
        ...(status === "resolved" && !existingQuery.resolvedAt && { resolvedAt: new Date() }),
        updatedAt: new Date()
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        }
      }
    })

    return NextResponse.json(
      {
        message: "Query updated successfully",
        query
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Query update error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)
    const { id } = await params

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const query = await prisma.query.findUnique({
      where: { id }
    })

    if (!query) {
      return NextResponse.json(
        { error: "Query not found" },
        { status: 404 }
      )
    }

    // Only admin or query owner can delete
    if (query.userId !== session.user.id && session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      )
    }

    await prisma.query.delete({
      where: { id }
    })

    return NextResponse.json(
      { message: "Query deleted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Query delete error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
