import Link from "next/link"
import { ArrowRight, Award, BookOpen, Calendar, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MainHeader } from "@/components/main-header"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

// Define types for skill levels
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

// Define the skill interface
interface Skill {
  name: string
  level: SkillLevel
  experience: number // percentage
  problems: {
    solved: number
    total: number
  }
  lastActivity: string
}

// Define the goal interface
interface Goal {
  id: string
  title: string
  description?: string
  target: number
  current: number
  dueDate?: string
  type: "problems" | "lessons" | "streak" | "skills"
  status: "active" | "completed" | "failed"
}

// Sample skills data
const skillsData: Record<string, Skill[]> = {
  languages: [
    {
      name: "Python",
      level: "Intermediate",
      experience: 65,
      problems: { solved: 32, total: 120 },
      lastActivity: "2 days ago",
    },
    {
      name: "JavaScript",
      level: "Advanced",
      experience: 85,
      problems: { solved: 48, total: 110 },
      lastActivity: "Yesterday",
    },
    {
      name: "Java",
      level: "Beginner",
      experience: 30,
      problems: { solved: 12, total: 95 },
      lastActivity: "1 week ago",
    },
    {
      name: "SQL",
      level: "Intermediate",
      experience: 60,
      problems: { solved: 18, total: 60 },
      lastActivity: "3 days ago",
    },
  ],
  frameworks: [
    {
      name: "React",
      level: "Intermediate",
      experience: 70,
      problems: { solved: 15, total: 35 },
      lastActivity: "2 days ago",
    },
    {
      name: "Django",
      level: "Beginner",
      experience: 40,
      problems: { solved: 8, total: 28 },
      lastActivity: "1 week ago",
    },
    {
      name: "Flask",
      level: "Intermediate",
      experience: 65,
      problems: { solved: 10, total: 22 },
      lastActivity: "5 days ago",
    },
    {
      name: "Node.js",
      level: "Beginner",
      experience: 35,
      problems: { solved: 5, total: 30 },
      lastActivity: "2 weeks ago",
    },
  ],
  concepts: [
    {
      name: "Data Structures",
      level: "Intermediate",
      experience: 75,
      problems: { solved: 38, total: 80 },
      lastActivity: "Yesterday",
    },
    {
      name: "Algorithms",
      level: "Intermediate",
      experience: 70,
      problems: { solved: 42, total: 90 },
      lastActivity: "3 days ago",
    },
    {
      name: "Database Design",
      level: "Beginner",
      experience: 45,
      problems: { solved: 10, total: 32 },
      lastActivity: "1 week ago",
    },
    {
      name: "System Design",
      level: "Beginner",
      experience: 30,
      problems: { solved: 5, total: 25 },
      lastActivity: "2 weeks ago",
    },
  ],
}

// Sample goals data
const goalsData: Goal[] = [
  {
    id: "1",
    title: "Solve 50 Python Problems",
    description: "Improve Python skills by solving problems",
    target: 50,
    current: 32,
    dueDate: "March 31, 2025",
    type: "problems",
    status: "active",
  },
  {
    id: "2",
    title: "Complete JavaScript Course",
    description: "Finish all lessons in Advanced JavaScript",
    target: 25,
    current: 18,
    dueDate: "April 15, 2025",
    type: "lessons",
    status: "active",
  },
  {
    id: "3",
    title: "Maintain a 30-day streak",
    target: 30,
    current: 15,
    type: "streak",
    status: "active",
  },
  {
    id: "4",
    title: "Reach Advanced level in React",
    target: 100,
    current: 70,
    type: "skills",
    status: "active",
  },
  {
    id: "5",
    title: "Complete 10 Hard Problems",
    target: 10,
    current: 10,
    dueDate: "February 28, 2025",
    type: "problems",
    status: "completed",
  },
]

// Helper function to get color based on skill level
function getSkillLevelColor(level: SkillLevel): string {
  switch (level) {
    case "Beginner":
      return "bg-blue-500/10 text-blue-600"
    case "Intermediate":
      return "bg-green-500/10 text-green-600"
    case "Advanced":
      return "bg-purple-500/10 text-purple-600"
    case "Expert":
      return "bg-amber-500/10 text-amber-600"
    default:
      return "bg-gray-500/10 text-gray-600"
  }
}

// Helper function to get color based on goal progress
function getGoalProgressColor(current: number, target: number): string {
  const percentage = (current / target) * 100
  if (percentage >= 100) return "bg-green-500"
  if (percentage >= 75) return "bg-blue-500"
  if (percentage >= 50) return "bg-amber-500"
  return "bg-slate-500"
}

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />

      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Skills & Goals</h1>
              <p className="text-muted-foreground mt-1">Track your progress and set learning goals</p>
            </div>

            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Goal
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Goal</DialogTitle>
                    <DialogDescription>Set a new learning goal to track your progress.</DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="title">Goal Title</Label>
                      <Input id="title" placeholder="E.g., Solve 50 Python problems" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="description">Description (Optional)</Label>
                      <Input id="description" placeholder="Add some details about your goal" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="type">Goal Type</Label>
                        <Select defaultValue="problems">
                          <SelectTrigger id="type">
                            <SelectValue placeholder="Select goal type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="problems">Solve Problems</SelectItem>
                            <SelectItem value="lessons">Complete Lessons</SelectItem>
                            <SelectItem value="streak">Maintain Streak</SelectItem>
                            <SelectItem value="skills">Improve Skills</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="target">Target Value</Label>
                        <Input id="target" type="number" defaultValue="10" />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="due-date">Due Date (Optional)</Label>
                      <Input id="due-date" type="date" />
                    </div>
                  </div>

                  <DialogFooter>
                    <Button type="submit">Create Goal</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2">
              {/* Skill Matrix */}
              <Card>
                <CardHeader>
                  <CardTitle>Skill Matrix</CardTitle>
                  <CardDescription>Your proficiency levels across various technologies and concepts</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="languages">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="languages">Languages</TabsTrigger>
                      <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                      <TabsTrigger value="concepts">Concepts</TabsTrigger>
                    </TabsList>

                    {Object.entries(skillsData).map(([category, skills]) => (
                      <TabsContent key={category} value={category} className="mt-6">
                        <div className="grid gap-4">
                          {skills.map((skill) => (
                            <div key={skill.name} className="rounded-lg border p-4">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                                    <Badge className={getSkillLevelColor(skill.level)}>{skill.level}</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    Solved {skill.problems.solved} of {skill.problems.total} problems | Last activity:{" "}
                                    {skill.lastActivity}
                                  </p>
                                </div>
                                <div className="flex-shrink-0 w-full sm:w-32">
                                  <div className="text-xs text-right mb-1">{skill.experience}%</div>
                                  <Progress value={skill.experience} className="h-2" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/learn">
                      Continue Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Recommended Practice */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Recommended Practice</CardTitle>
                  <CardDescription>Problems and lessons tailored to improve your skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Strengthen Python Skills</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Level:</span>
                            <span>Intermediate</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Focus:</span>
                            <span>Data Structures</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Est. Time:</span>
                            <span>2 weeks</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button size="sm" className="w-full" asChild>
                          <Link href="/learn/python/intermediate">Start Path</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">JavaScript Mastery</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Level:</span>
                            <span>Advanced</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Focus:</span>
                            <span>Async Programming</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Est. Time:</span>
                            <span>3 weeks</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button size="sm" className="w-full" asChild>
                          <Link href="/learn/javascript/advanced">Start Path</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Goals Tracking */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>My Goals</CardTitle>
                  <CardDescription>Track your learning objectives and progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="active">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="active">Active</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>

                    <TabsContent value="active" className="mt-6 space-y-4">
                      {goalsData
                        .filter((goal) => goal.status === "active")
                        .map((goal) => (
                          <div key={goal.id} className="rounded-lg border p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold">{goal.title}</h3>
                                {goal.description && (
                                  <p className="text-sm text-muted-foreground mt-1">{goal.description}</p>
                                )}
                              </div>

                              {goal.type === "problems" && <BookOpen className="h-5 w-5 text-blue-500" />}
                              {goal.type === "lessons" && <BookOpen className="h-5 w-5 text-green-500" />}
                              {goal.type === "streak" && <Calendar className="h-5 w-5 text-amber-500" />}
                              {goal.type === "skills" && <Award className="h-5 w-5 text-purple-500" />}
                            </div>

                            <div className="mt-4">
                              <div className="flex items-center justify-between text-sm mb-1">
                                <span>
                                  Progress: {goal.current} / {goal.target}
                                </span>
                                <span>{Math.round((goal.current / goal.target) * 100)}%</span>
                              </div>
                              <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                            </div>

                            {goal.dueDate && (
                              <div className="flex items-center text-sm text-muted-foreground mt-3">
                                <Calendar className="h-4 w-4 mr-1" />
                                Due: {goal.dueDate}
                              </div>
                            )}
                          </div>
                        ))}
                    </TabsContent>

                    <TabsContent value="completed" className="mt-6 space-y-4">
                      {goalsData
                        .filter((goal) => goal.status === "completed")
                        .map((goal) => (
                          <div key={goal.id} className="rounded-lg border p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center">
                                  <h3 className="font-semibold">{goal.title}</h3>
                                  <Badge variant="success" className="ml-2">
                                    Completed
                                  </Badge>
                                </div>
                                {goal.description && (
                                  <p className="text-sm text-muted-foreground mt-1">{goal.description}</p>
                                )}
                              </div>

                              {goal.type === "problems" && <BookOpen className="h-5 w-5 text-blue-500" />}
                              {goal.type === "lessons" && <BookOpen className="h-5 w-5 text-green-500" />}
                              {goal.type === "streak" && <Calendar className="h-5 w-5 text-amber-500" />}
                              {goal.type === "skills" && <Award className="h-5 w-5 text-purple-500" />}
                            </div>

                            <div className="mt-4">
                              <Progress value={100} className="h-2 bg-green-200" />
                            </div>

                            {goal.dueDate && (
                              <div className="flex items-center text-sm text-muted-foreground mt-3">
                                <Calendar className="h-4 w-4 mr-1" />
                                Completed on: {goal.dueDate}
                              </div>
                            )}
                          </div>
                        ))}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Weekly Report */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Weekly Report</CardTitle>
                  <CardDescription>Your learning activity for this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-semibold">Activity Summary</h3>
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-muted/50">
                          <span className="text-2xl font-bold">15</span>
                          <span className="text-sm text-muted-foreground">Problems Solved</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-muted/50">
                          <span className="text-2xl font-bold">8</span>
                          <span className="text-sm text-muted-foreground">Lessons Completed</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-muted/50">
                          <span className="text-2xl font-bold">5</span>
                          <span className="text-sm text-muted-foreground">Days Active</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-muted/50">
                          <span className="text-2xl font-bold">450</span>
                          <span className="text-sm text-muted-foreground">XP Earned</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="font-semibold">Top Skills This Week</h3>
                      <div className="space-y-3 mt-3">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>JavaScript</span>
                            <span className="text-muted-foreground">+12%</span>
                          </div>
                          <Progress value={75} className="h-2 bg-blue-200" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Python</span>
                            <span className="text-muted-foreground">+8%</span>
                          </div>
                          <Progress value={65} className="h-2 bg-green-200" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>SQL</span>
                            <span className="text-muted-foreground">+5%</span>
                          </div>
                          <Progress value={40} className="h-2 bg-amber-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Full Report
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

