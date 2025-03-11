import Link from "next/link"
import {
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  Code2,
  FileCode2,
  Flame,
  Star,
  Trophy,
  Clock,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MainHeader } from "@/components/main-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample user data
const user = {
  name: "Alex Johnson",
  username: "alexj",
  avatar: "/placeholder.svg?height=100&width=100",
  level: 12,
  xp: 3450,
  xpToNextLevel: 5000,
  streak: 15,
  badges: [
    { name: "Python Master", icon: Award },
    { name: "30-Day Streak", icon: Flame },
    { name: "Problem Solver", icon: Trophy },
  ],
  stats: {
    problemsSolved: 78,
    lessonsCompleted: 42,
    projectsBuilt: 5,
    contestsParticipated: 3,
  },
}

// Sample learning paths
const learningPaths = [
  {
    title: "Web Development",
    description: "HTML, CSS, JavaScript and more",
    progress: 65,
    lastLesson: "CSS Flexbox Layout",
    href: "/learn/web-development",
  },
  {
    title: "Python Programming",
    description: "Python basics to advanced concepts",
    progress: 30,
    lastLesson: "Python List Comprehensions",
    href: "/learn/python",
  },
]

// Sample recent activities
const recentActivities = [
  {
    type: "problem",
    title: "Solved 'Two Sum' problem",
    time: "2 hours ago",
    icon: Code2,
    href: "/problems/two-sum",
  },
  {
    type: "lesson",
    title: "Completed 'CSS Flexbox Layout' lesson",
    time: "Yesterday",
    icon: BookOpen,
    href: "/learn/css/flexbox",
  },
  {
    type: "project",
    title: "Started 'Weather App' project",
    time: "2 days ago",
    icon: FileCode2,
    href: "/projects/weather-app",
  },
]

// Sample recommended content
const recommendedContent = [
  {
    type: "problem",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stacks",
    href: "/problems/valid-parentheses",
  },
  {
    type: "lesson",
    title: "JavaScript Promises",
    category: "JavaScript",
    href: "/learn/javascript/promises",
  },
  {
    type: "project",
    title: "Build a Todo App",
    category: "React",
    href: "/projects/todo-app",
  },
]

// Sample upcoming contests
const upcomingContests = [
  {
    title: "Weekly Coding Challenge",
    date: "March 15, 2025",
    time: "2:00 PM - 4:00 PM",
    participants: 245,
    href: "/contests/weekly-challenge",
  },
  {
    title: "Frontend Masters Competition",
    date: "March 20, 2025",
    time: "10:00 AM - 2:00 PM",
    participants: 178,
    href: "/contests/frontend-masters",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />

      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          {/* User Profile Section */}
          <div className="mb-8 grid gap-6 md:grid-cols-[1fr_2fr]">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h2 className="mt-4 text-2xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground">@{user.username}</p>

                  <div className="mt-4 flex items-center gap-2">
                    <Badge variant="outline" className="px-3 py-1">
                      <Trophy className="mr-1 h-3.5 w-3.5 text-yellow-500" />
                      Level {user.level}
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1">
                      <Flame className="mr-1 h-3.5 w-3.5 text-orange-500" />
                      {user.streak} Day Streak
                    </Badge>
                  </div>

                  <div className="mt-6 w-full">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span>
                        XP: {user.xp}/{user.xpToNextLevel}
                      </span>
                      <span>{Math.round((user.xp / user.xpToNextLevel) * 100)}%</span>
                    </div>
                    <Progress value={(user.xp / user.xpToNextLevel) * 100} className="h-2" />
                  </div>

                  <div className="mt-6 grid w-full grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">
                      Edit Profile
                    </Button>
                    <Button className="w-full">Upgrade Plan</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center rounded-lg border p-3">
                      <Code2 className="h-8 w-8 text-primary" />
                      <div className="mt-2 text-2xl font-bold">{user.stats.problemsSolved}</div>
                      <div className="text-xs text-muted-foreground">Problems Solved</div>
                    </div>
                    <div className="flex flex-col items-center rounded-lg border p-3">
                      <BookOpen className="h-8 w-8 text-primary" />
                      <div className="mt-2 text-2xl font-bold">{user.stats.lessonsCompleted}</div>
                      <div className="text-xs text-muted-foreground">Lessons Completed</div>
                    </div>
                    <div className="flex flex-col items-center rounded-lg border p-3">
                      <FileCode2 className="h-8 w-8 text-primary" />
                      <div className="mt-2 text-2xl font-bold">{user.stats.projectsBuilt}</div>
                      <div className="text-xs text-muted-foreground">Projects Built</div>
                    </div>
                    <div className="flex flex-col items-center rounded-lg border p-3">
                      <Trophy className="h-8 w-8 text-primary" />
                      <div className="mt-2 text-2xl font-bold">{user.stats.contestsParticipated}</div>
                      <div className="text-xs text-muted-foreground">Contests Joined</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Badges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {user.badges.map((badge) => (
                      <div key={badge.name} className="flex flex-col items-center rounded-lg border p-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <badge.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="mt-2 text-center text-xs font-medium">{badge.name}</div>
                      </div>
                    ))}
                    <div className="flex flex-col items-center rounded-lg border border-dashed p-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                        <Star className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="mt-2 text-center text-xs text-muted-foreground">Unlock More</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Continue Learning Section */}
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Continue Learning</h2>
              <Button variant="ghost" asChild size="sm">
                <Link href="/learn">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {learningPaths.map((path) => (
                <Card key={path.title} className="overflow-hidden">
                  <CardHeader className="p-4 pb-2">
                    <CardTitle>{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span>{path.progress}% complete</span>
                    </div>
                    <Progress value={path.progress} className="h-2" />
                    <div className="mt-4 text-sm">
                      <span className="text-muted-foreground">Last lesson: </span>
                      {path.lastLesson}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild className="w-full">
                      <Link href={path.href}>Continue</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Recent Activity */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Recent Activity</h2>
                <Button variant="ghost" asChild size="sm">
                  <Link href="/activity">
                    View All <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {recentActivities.map((activity) => (
                      <Link
                        key={activity.title}
                        href={activity.href}
                        className="flex items-start gap-3 p-4 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <activity.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{activity.title}</div>
                          <div className="text-sm text-muted-foreground">{activity.time}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recommended Content */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Recommended For You</h2>
              </div>

              <Tabs defaultValue="all">
                <TabsList className="w-full">
                  <TabsTrigger value="all" className="flex-1">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="problems" className="flex-1">
                    Problems
                  </TabsTrigger>
                  <TabsTrigger value="lessons" className="flex-1">
                    Lessons
                  </TabsTrigger>
                  <TabsTrigger value="projects" className="flex-1">
                    Projects
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-4">
                  <Card>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        {recommendedContent.map((content) => (
                          <Link
                            key={content.title}
                            href={content.href}
                            className="flex items-center justify-between p-4 transition-colors hover:bg-muted/50"
                          >
                            <div>
                              <div className="font-medium">{content.title}</div>
                              <div className="text-sm text-muted-foreground">
                                {content.category}
                                {content.difficulty && ` • ${content.difficulty}`}
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Other tab contents would be similar */}
              </Tabs>
            </div>
          </div>

          {/* Upcoming Contests */}
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Upcoming Contests</h2>
              <Button variant="ghost" asChild size="sm">
                <Link href="/contests">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {upcomingContests.map((contest) => (
                <Card key={contest.title}>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle>{contest.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{contest.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{contest.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{contest.participants} participants</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild className="w-full">
                      <Link href={contest.href}>Register</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

