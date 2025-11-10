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
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  LogOut,
  User,
  MessageSquare,
  Clock,
  CheckCircle2,
  XCircle,
  Plus,
  Loader2,
  MoreVertical,
  Trash2,
  Eye,
  Shield,
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
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [queries, setQueries] = useState<Query[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const [newQuery, setNewQuery] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    if (session?.user) {
      setNewQuery((prev) => ({
        ...prev,
        name: session.user.name || "",
        email: session.user.email || "",
      }))
    }
  }, [session])

  const fetchQueries = async (filter?: string) => {
    try {
      const url = filter && filter !== "all" ? `/api/queries?status=${filter}` : "/api/queries"
      const response = await fetch(url)
      const data = await response.json()
      if (response.ok) {
        setQueries(data.queries)
      }
    } catch (error) {
      toast.error("Failed to fetch queries")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (status === "authenticated") {
      fetchQueries(activeFilter)
    }
  }, [status, activeFilter])

  const handleSubmitQuery = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuery),
      })

      const data = await response.json()

      if (!response.ok) {
        toast.error(data.error || "Failed to submit query")
        return
      }

      toast.success("Query submitted successfully!")
      setIsDialogOpen(false)
      setNewQuery({
        name: session?.user?.name || "",
        email: session?.user?.email || "",
        phone: "",
        subject: "",
        message: "",
      })
      fetchQueries(activeFilter)
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setIsSubmitting(false)
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
      fetchQueries(activeFilter)
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20", icon: Clock },
      "in-progress": { color: "bg-blue-500/10 text-blue-500 border-blue-500/20", icon: Loader2 },
      resolved: { color: "bg-green-500/10 text-green-500 border-green-500/20", icon: CheckCircle2 },
      closed: { color: "bg-gray-500/10 text-gray-500 border-gray-500/20", icon: XCircle },
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

  const filteredQueries = queries.filter((query) => {
    if (activeFilter === "all") return true
    return query.status === activeFilter
  })

  const stats = {
    total: queries.length,
    pending: queries.filter((q) => q.status === "pending").length,
    inProgress: queries.filter((q) => q.status === "in-progress").length,
    resolved: queries.filter((q) => q.status === "resolved").length,
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
              {session?.user?.role === "admin" && (
                <Link href="/admin">
                  <Button variant="outline" size="sm" className="bg-purple-500/20 border-purple-500/50 text-purple-300 hover:bg-purple-500/30">
                    <Shield className="w-4 h-4 mr-2" />
                    Admin Panel
                  </Button>
                </Link>
              )}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="hidden sm:inline">{session?.user?.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{session?.user?.name}</p>
                    <p className="text-xs text-muted-foreground">{session?.user?.email}</p>
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
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">My Dashboard</h1>
              <p className="text-gray-400">Manage your queries and track their status</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Plus className="w-4 h-4 mr-2" />
                  New Query
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <form onSubmit={handleSubmitQuery}>
                  <DialogHeader>
                    <DialogTitle>Submit New Query</DialogTitle>
                    <DialogDescription>
                      Fill in the details below to submit your query. We'll get back to you soon!
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={newQuery.name}
                        onChange={(e) => setNewQuery({ ...newQuery, name: e.target.value })}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newQuery.email}
                        onChange={(e) => setNewQuery({ ...newQuery, email: e.target.value })}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={newQuery.phone}
                        onChange={(e) => setNewQuery({ ...newQuery, phone: e.target.value })}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={newQuery.subject}
                        onChange={(e) => setNewQuery({ ...newQuery, subject: e.target.value })}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={newQuery.message}
                        onChange={(e) => setNewQuery({ ...newQuery, message: e.target.value })}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Query"
                      )}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-400">Total Queries</CardDescription>
                <CardTitle className="text-3xl text-white">{stats.total}</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-400">Pending</CardDescription>
                <CardTitle className="text-3xl text-yellow-500">{stats.pending}</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-400">In Progress</CardDescription>
                <CardTitle className="text-3xl text-blue-500">{stats.inProgress}</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-400">Resolved</CardDescription>
                <CardTitle className="text-3xl text-green-500">{stats.resolved}</CardTitle>
              </CardHeader>
            </Card>
          </div>

          {/* Queries List */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                My Queries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeFilter} onValueChange={setActiveFilter}>
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="resolved">Resolved</TabsTrigger>
                  <TabsTrigger value="closed">Closed</TabsTrigger>
                </TabsList>

                <TabsContent value={activeFilter} className="space-y-4">
                  {filteredQueries.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                      <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No queries found</p>
                    </div>
                  ) : (
                    filteredQueries.map((query) => (
                      <Card key={query.id} className="border-white/10 bg-white/5">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <CardTitle className="text-white">{query.subject || "General Inquiry"}</CardTitle>
                                {getStatusBadge(query.status)}
                                {getPriorityBadge(query.priority)}
                              </div>
                              <CardDescription className="text-gray-400">
                                Submitted on {new Date(query.createdAt).toLocaleDateString()}
                              </CardDescription>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleDeleteQuery(query.id)}>
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-gray-300">
                            <p className="text-sm"><strong>Message:</strong> {query.message}</p>
                            {query.phone && <p className="text-sm"><strong>Phone:</strong> {query.phone}</p>}
                            {query.notes && (
                              <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                <p className="text-sm font-semibold text-blue-400 mb-1">Admin Notes:</p>
                                <p className="text-sm text-gray-300">{query.notes}</p>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
