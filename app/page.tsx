import Link from "next/link"
import { BookOpen, Code2, FileCode2, Search, Trophy, ArrowRight, Star, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MainHeader } from "@/components/main-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample data for featured technologies
const technologies = [
  { name: "HTML", icon: FileCode2, color: "bg-orange-500", href: "/learn/html" },
  { name: "CSS", icon: FileCode2, color: "bg-blue-500", href: "/learn/css" },
  { name: "JavaScript", icon: FileCode2, color: "bg-yellow-500", href: "/learn/javascript" },
  { name: "Python", icon: FileCode2, color: "bg-green-500", href: "/learn/python" },
  { name: "SQL", icon: FileCode2, color: "bg-purple-500", href: "/learn/sql" },
  { name: "React", icon: FileCode2, color: "bg-cyan-500", href: "/learn/react" },
]

// Sample data for trending problems
const trendingProblems = [
  { title: "Two Sum", difficulty: "Easy", category: "Arrays", href: "/problems/two-sum" },
  { title: "Valid Parentheses", difficulty: "Easy", category: "Stacks", href: "/problems/valid-parentheses" },
  { title: "Merge Intervals", difficulty: "Medium", category: "Arrays", href: "/problems/merge-intervals" },
  { title: "LRU Cache", difficulty: "Medium", category: "Design", href: "/problems/lru-cache" },
]

// Sample data for trending lessons
const trendingLessons = [
  { title: "JavaScript Promises", category: "JavaScript", href: "/learn/javascript/promises" },
  { title: "CSS Flexbox Layout", category: "CSS", href: "/learn/css/flexbox" },
  { title: "Python List Comprehensions", category: "Python", href: "/learn/python/list-comprehensions" },
  { title: "SQL Joins Explained", category: "SQL", href: "/learn/sql/joins" },
]

// Sample data for leaderboard
const leaderboardUsers = [
  { name: "Alex Johnson", points: 9850, avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Maria Garcia", points: 8720, avatar: "/placeholder.svg?height=40&width=40" },
  { name: "David Kim", points: 7650, avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Sarah Chen", points: 6980, avatar: "/placeholder.svg?height=40&width=40" },
  { name: "James Wilson", points: 6540, avatar: "/placeholder.svg?height=40&width=40" },
]

// Sample data for testimonials
const testimonials = [
  {
    quote:
      "This platform completely transformed how I learn to code. The combination of structured lessons and practical problems is perfect!",
    author: "Emily Chen",
    role: "Frontend Developer",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    quote:
      "I went from knowing nothing about programming to landing a job as a junior developer in just 6 months. The project-based learning approach made all the difference.",
    author: "Michael Rodriguez",
    role: "Junior Software Engineer",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    quote:
      "The AI mentor feature is like having a personal tutor available 24/7. It helped me overcome roadblocks that would have otherwise taken days to figure out.",
    author: "Priya Sharma",
    role: "Computer Science Student",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/20 to-background py-20 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Learn, Code, and Build Your Future
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Master programming through interactive lessons and real-world coding challenges. All in one platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="gap-1">
                  <Link href="/learn">
                    Start Learning <BookOpen className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-1">
                  <Link href="/problems">
                    Start Coding <Code2 className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] rounded-lg border bg-background p-4 shadow-lg">
                <div className="mb-4 flex items-center gap-2 border-b pb-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div className="ml-2 text-xs text-muted-foreground">index.js</div>
                </div>
                <pre className="overflow-x-auto rounded bg-muted p-4 text-sm">
                  <code className="text-foreground">
                    {`function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Bar */}
      <section className="container -mt-6 px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for lessons, problems, or topics..."
              className="pl-10 py-6 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Technologies */}
      <section className="container px-4 py-12 md:px-6 md:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Featured Technologies</h2>
          <p className="mt-2 text-muted-foreground">Start learning with our most popular technologies</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {technologies.map((tech) => (
            <Link
              key={tech.name}
              href={tech.href}
              className="group flex flex-col items-center rounded-lg border p-4 transition-colors hover:bg-muted/50"
            >
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${tech.color}`}>
                <tech.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-center font-medium group-hover:underline">{tech.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Smart Learning Path */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 px-3 py-1">
              <Zap className="mr-1 h-3.5 w-3.5" />
              AI-Powered
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">Smart Learning Path</h2>
            <p className="mt-2 text-muted-foreground">
              Get a personalized learning journey based on your goals and current skill level
            </p>
            <Button asChild className="mt-6">
              <Link href="/smart-path">
                Create Your Path <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Content */}
      <section className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Trending Problems */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Trending Problems</h2>
              <Button variant="ghost" asChild size="sm">
                <Link href="/problems">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              {trendingProblems.map((problem) => (
                <Link key={problem.title} href={problem.href}>
                  <Card className="transition-colors hover:bg-muted/50">
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{problem.title}</CardTitle>
                        <Badge
                          variant={
                            problem.difficulty === "Easy"
                              ? "success"
                              : problem.difficulty === "Medium"
                                ? "warning"
                                : "destructive"
                          }
                          className="px-2 py-0 text-xs"
                        >
                          {problem.difficulty}
                        </Badge>
                      </div>
                      <CardDescription>{problem.category}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Trending Lessons */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Trending Lessons</h2>
              <Button variant="ghost" asChild size="sm">
                <Link href="/learn">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              {trendingLessons.map((lesson) => (
                <Link key={lesson.title} href={lesson.href}>
                  <Card className="transition-colors hover:bg-muted/50">
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{lesson.title}</CardTitle>
                        <Badge variant="outline" className="px-2 py-0 text-xs">
                          {lesson.category}
                        </Badge>
                      </div>
                      <CardDescription>Interactive lesson</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Leaderboard</h2>
            <p className="mt-2 text-muted-foreground">Top learners and problem solvers this month</p>
          </div>
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {leaderboardUsers.map((user, index) => (
                    <div key={user.name} className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-medium">
                          {index + 1}
                        </div>
                        <Avatar>
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>{user.name}</div>
                      </div>
                      <div className="flex items-center gap-1 font-medium">
                        <Trophy className="h-4 w-4 text-yellow-500" />
                        {user.points.toLocaleString()} XP
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="justify-center p-4">
                <Button variant="outline" asChild>
                  <Link href="/leaderboard">View Full Leaderboard</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container px-4 py-12 md:px-6 md:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Success Stories</h2>
          <p className="mt-2 text-muted-foreground">See what our users have achieved with CodeLearn</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-muted-foreground">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Start Your Coding Journey?</h2>
            <p className="mt-4 text-primary-foreground/80">
              Join thousands of learners who are building their skills and changing their careers.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/learn">
                  Start Learning <BookOpen className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <Link href="/problems">
                  Solve Problems <Code2 className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                  <Code2 className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">CodeLearn</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Learn, code, and build your future with our comprehensive learning platform.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/learn" className="text-muted-foreground hover:text-foreground">
                    Learn
                  </Link>
                </li>
                <li>
                  <Link href="/problems" className="text-muted-foreground hover:text-foreground">
                    Problems
                  </Link>
                </li>
                <li>
                  <Link href="/contests" className="text-muted-foreground hover:text-foreground">
                    Contests
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/discussion" className="text-muted-foreground hover:text-foreground">
                    Discussion
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-muted-foreground hover:text-foreground">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} CodeLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

