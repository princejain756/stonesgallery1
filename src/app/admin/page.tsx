"use client"

import { useEffect, useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  LogOut,
  User,
  MessageSquare,
  Users,
  TrendingUp,
  Shield,
  Edit,
  Trash2,
  Eye,
  Loader2,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertCircle,
  LayoutDashboard,
} from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Link from "next/link"

type Query = {
  id: string
  name: string
  email: string
  phone?: string
  message: string
  subject?: string
  status: string
  priority: string
  notes?: string
  createdAt: string
  updatedAt: string
  resolvedAt?: string
  user: {
    id: string
    name: string
    email: string
    image?: string
  }
}

type User = {
  id: string
  name: string
  email: string
  image?: string
  role: string
  createdAt: string
  _count: {
    queries: number
  }
}

type DashboardStats = {
  totalUsers: number
  totalQueries: number
  pendingQueries: number
  resolvedQueries: number
}

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [queries, setQueries] = useState<Query[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalQueries: 0,
    pendingQueries: 0,
    resolvedQueries: 0,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [selectedQuery, setSelectedQuery] = useState<Query | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  const [updateData, setUpdateData] = useState({
    status: "",
    priority: "",
    notes: "",
  })

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.role !== "admin") {
        router.push("/dashboard")
        return
      }
      fetchDashboardData()
    }
  }, [status, session, router])

  const fetchDashboardData = async () => {
    setIsLoading(true)
    try {
      const [statsRes, queriesRes, usersRes] = await Promise.all([
        fetch("/api/admin/dashboard"),
        fetch("/api/queries"),
        fetch("/api/admin/users"),
      ])

      if (statsRes.ok) {
        const statsData = await statsRes.json()
        setStats(statsData.stats)
      }

      if (queriesRes.ok) {
        const queriesData = await queriesRes.json()
        setQueries(queriesData.queries)
      }

      if (usersRes.ok) {
        const usersData = await usersRes.json()
        setUsers(usersData.users)
      }
    } catch (error) {
      toast.error("Failed to fetch dashboard data")
    } finally {
      setIsLoading(false)
    }
  }

  const handleEditQuery = (query: Query) => {
    setSelectedQuery(query)
    setUpdateData({
      status: query.status,
      priority: query.priority,
      notes: query.notes || "",
    })
    setIsEditDialogOpen(true)
  }

  const handleUpdateQuery = async () => {
    if (!selectedQuery) return

    setIsUpdating(true)
    try {
      const response = await fetch(`/api/queries/${selectedQuery.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      })

      if (!response.ok) {
        toast.error("Failed to update query")
        return
      }

      toast.success("Query updated successfully")
      setIsEditDialogOpen(false)
      fetchDashboardData()
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setIsUpdating(false)
    }
  }

  const handleDeleteQuery = async (id: string) => {
    if (!confirm("Are you sure you want to delete this query?")) return

    try {
      const response = await fetch(`/api/queries/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        toast.error("Failed to delete query")
        return
      }

      toast.success("Query deleted successfully")
      fetchDashboardData()
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20", icon: Clock },
      "in-progress": { color: "bg-blue-500/10 text-blue-500 border-blue-500/20", icon: Loader2 },
      resolved: { color: "bg-green-500/10 text-green-500 border-green-500/20", icon: CheckCircle2 },
      closed: { color: "bg-gray-500/10 text-gray-500 border-gray-500/20", icon: AlertCircle },
    }

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
    const Icon = config.icon

    return (
      <Badge className={`${config.color} flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {status}
      </Badge>
    )
  }

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      low: "bg-gray-500/10 text-gray-500 border-gray-500/20",
      normal: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      high: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      urgent: "bg-red-500/10 text-red-500 border-red-500/20",
    }

    return (
      <Badge className={priorityConfig[priority as keyof typeof priorityConfig] || priorityConfig.normal}>
        {priority}
      </Badge>
    )
  }

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold text-white">
                Stones Gallery
              </Link>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50">
                <Shield className="w-3 h-3 mr-1" />
                Admin
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  User Dashboard
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="hidden sm:inline">{session?.user?.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{session?.user?.name}</p>
                      <p className="text-xs text-muted-foreground">{session?.user?.email}</p>
                      <Badge className="bg-purple-500/20 text-purple-500 w-fit mt-1">Admin</Badge>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Manage users, queries, and monitor platform activity</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardDescription className="text-gray-400">Total Users</CardDescription>
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <CardTitle className="text-3xl text-white">{stats.totalUsers}</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardDescription className="text-gray-400">Total Queries</CardDescription>
                  <MessageSquare className="w-5 h-5 text-purple-400" />
                </div>
                <CardTitle className="text-3xl text-white">{stats.totalQueries}</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardDescription className="text-gray-400">Pending</CardDescription>
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <CardTitle className="text-3xl text-yellow-500">{stats.pendingQueries}</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardDescription className="text-gray-400">Resolved</CardDescription>
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <CardTitle className="text-3xl text-green-500">{stats.resolvedQueries}</CardTitle>
              </CardHeader>
            </Card>
          </div>

          {/* Main Content */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="queries">
                    Queries ({queries.length})
                  </TabsTrigger>
                  <TabsTrigger value="users">
                    Users ({users.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <div className="grid gap-6">
                    <Card className="border-white/10 bg-white/5">
                      <CardHeader>
                        <CardTitle className="text-white text-lg">Recent Queries</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {queries.slice(0, 5).map((query) => (
                            <div key={query.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                              <div className="flex-1">
                                <p className="text-white font-medium">{query.subject || "General Inquiry"}</p>
                                <p className="text-sm text-gray-400">{query.user.name} • {query.user.email}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                {getStatusBadge(query.status)}
                                {getPriorityBadge(query.priority)}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="queries">
                  <div className="rounded-md border border-white/10">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-white/10 hover:bg-white/5">
                          <TableHead className="text-gray-300">Subject</TableHead>
                          <TableHead className="text-gray-300">User</TableHead>
                          <TableHead className="text-gray-300">Status</TableHead>
                          <TableHead className="text-gray-300">Priority</TableHead>
                          <TableHead className="text-gray-300">Created</TableHead>
                          <TableHead className="text-gray-300 text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {queries.map((query) => (
                          <TableRow key={query.id} className="border-white/10 hover:bg-white/5">
                            <TableCell className="text-white font-medium">
                              {query.subject || "General Inquiry"}
                            </TableCell>
                            <TableCell className="text-gray-300">
                              <div>
                                <p className="font-medium">{query.user.name}</p>
                                <p className="text-xs text-gray-400">{query.user.email}</p>
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(query.status)}</TableCell>
                            <TableCell>{getPriorityBadge(query.priority)}</TableCell>
                            <TableCell className="text-gray-300">
                              {new Date(query.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                                  onClick={() => handleEditQuery(query)}
                                >
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                                  onClick={() => handleDeleteQuery(query.id)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>

                <TabsContent value="users">
                  <div className="rounded-md border border-white/10">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-white/10 hover:bg-white/5">
                          <TableHead className="text-gray-300">Name</TableHead>
                          <TableHead className="text-gray-300">Email</TableHead>
                          <TableHead className="text-gray-300">Role</TableHead>
                          <TableHead className="text-gray-300">Queries</TableHead>
                          <TableHead className="text-gray-300">Joined</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id} className="border-white/10 hover:bg-white/5">
                            <TableCell className="text-white font-medium">{user.name}</TableCell>
                            <TableCell className="text-gray-300">{user.email}</TableCell>
                            <TableCell>
                              <Badge className={user.role === "admin" ? "bg-purple-500/20 text-purple-400" : "bg-blue-500/20 text-blue-400"}>
                                {user.role}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-gray-300">{user._count.queries}</TableCell>
                            <TableCell className="text-gray-300">
                              {new Date(user.createdAt).toLocaleDateString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Edit Query Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Update Query</DialogTitle>
            <DialogDescription>
              Update the status, priority, and add notes for this query.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select value={updateData.status} onValueChange={(value) => setUpdateData({ ...updateData, status: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="priority">Priority</Label>
              <Select value={updateData.priority} onValueChange={(value) => setUpdateData({ ...updateData, priority: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="notes">Admin Notes</Label>
              <Textarea
                id="notes"
                rows={4}
                value={updateData.notes}
                onChange={(e) => setUpdateData({ ...updateData, notes: e.target.value })}
                placeholder="Add notes for the user..."
              />
            </div>
            {selectedQuery && (
              <div className="p-4 bg-muted rounded-lg space-y-2">
                <p className="text-sm"><strong>User:</strong> {selectedQuery.user.name}</p>
                <p className="text-sm"><strong>Email:</strong> {selectedQuery.user.email}</p>
                <p className="text-sm"><strong>Message:</strong> {selectedQuery.message}</p>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateQuery} disabled={isUpdating}>
              {isUpdating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Query"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
