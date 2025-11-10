import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    // Get total counts
    const [totalUsers, totalQueries, pendingQueries, resolvedQueries] = await Promise.all([
      prisma.user.count(),
      prisma.query.count(),
      prisma.query.count({ where: { status: "pending" } }),
      prisma.query.count({ where: { status: "resolved" } })
    ])

    // Get recent queries
    const recentQueries = await prisma.query.findMany({
      take: 10,
      orderBy: {
        createdAt: "desc"
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

    // Get queries by status
    const queriesByStatus = await prisma.query.groupBy({
      by: ['status'],
      _count: {
        id: true
      }
    })

    // Get queries by priority
    const queriesByPriority = await prisma.query.groupBy({
      by: ['priority'],
      _count: {
        id: true
      }
    })

    return NextResponse.json({
      stats: {
        totalUsers,
        totalQueries,
        pendingQueries,
        resolvedQueries
      },
      recentQueries,
      queriesByStatus,
      queriesByPriority
    }, { status: 200 })
  } catch (error) {
    console.error("Dashboard stats error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
