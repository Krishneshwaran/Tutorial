import Link from "next/link"
import { Check, Filter, Search, SortAsc } from "lucide-react"
import { MainHeader } from "@/components/main-header"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for problems
const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    acceptance: "45%",
    completed: true,
    href: "/problems/two-sum",
  },
  {
    id: 2,
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stacks",
    acceptance: "40%",
    completed: false,
    href: "/problems/valid-parentheses",
  },
  {
    id: 3,
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Arrays",
    acceptance: "35%",
    completed: false,
    href: "/problems/merge-intervals",
  },
  {
    id: 4,
    title: "LRU Cache",
    difficulty: "Medium",
    category: "Design",
    acceptance: "30%",
    completed: false,
    href: "/problems/lru-cache",
  },
  {
    id: 5,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Dynamic Programming",
    acceptance: "25%",
    completed: false,
    href: "/problems/trapping-rain-water",
  },
  {
    id: 6,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Binary Search",
    acceptance: "20%",
    completed: false,
    href: "/problems/median-of-two-sorted-arrays",
  },
  {
    id: 7,
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List",
    acceptance: "50%",
    completed: true,
    href: "/problems/reverse-linked-list",
  },
  {
    id: 8,
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graph",
    acceptance: "32%",
    completed: false,
    href: "/problems/course-schedule",
  },
]

export default function ProblemsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/50 py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Coding Problems</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Sharpen your coding skills with our collection of programming challenges.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Coding problems illustration"
                  className="rounded-lg object-cover"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="container px-4 py-12 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="all">All Problems</TabsTrigger>
                <TabsTrigger value="easy">Easy</TabsTrigger>
                <TabsTrigger value="medium">Medium</TabsTrigger>
                <TabsTrigger value="hard">Hard</TabsTrigger>
              </TabsList>

              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search problems..."
                    className="w-full pl-8 sm:w-[200px] md:w-[300px]"
                  />
                </div>

                <div className="flex gap-2">
                  <Select defaultValue="category">
                    <SelectTrigger className="w-[130px]">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="category">All Categories</SelectItem>
                      <SelectItem value="arrays">Arrays</SelectItem>
                      <SelectItem value="strings">Strings</SelectItem>
                      <SelectItem value="linked-list">Linked List</SelectItem>
                      <SelectItem value="dynamic-programming">Dynamic Programming</SelectItem>
                      <SelectItem value="graph">Graph</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[130px]">
                      <SortAsc className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="acceptance-high">Acceptance (High)</SelectItem>
                      <SelectItem value="acceptance-low">Acceptance (Low)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="rounded-lg border">
                <div className="grid grid-cols-12 gap-4 border-b bg-muted/50 p-4 font-medium">
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-5">Title</div>
                  <div className="col-span-2">Difficulty</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Acceptance</div>
                </div>

                {problems.map((problem) => (
                  <Link
                    key={problem.id}
                    href={problem.href}
                    className="grid grid-cols-12 gap-4 border-b p-4 transition-colors hover:bg-muted/50 last:border-0"
                  >
                    <div className="col-span-1 flex items-center justify-center">
                      {problem.completed ? (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                          <Check className="h-4 w-4" />
                        </div>
                      ) : (
                        <span>{problem.id}</span>
                      )}
                    </div>
                    <div className="col-span-5 font-medium">{problem.title}</div>
                    <div className="col-span-2">
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
                    <div className="col-span-2 text-muted-foreground">{problem.category}</div>
                    <div className="col-span-2 text-muted-foreground">{problem.acceptance}</div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="easy" className="mt-0">
              <div className="rounded-lg border">
                <div className="grid grid-cols-12 gap-4 border-b bg-muted/50 p-4 font-medium">
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-5">Title</div>
                  <div className="col-span-2">Difficulty</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Acceptance</div>
                </div>

                {problems
                  .filter((problem) => problem.difficulty === "Easy")
                  .map((problem) => (
                    <Link
                      key={problem.id}
                      href={problem.href}
                      className="grid grid-cols-12 gap-4 border-b p-4 transition-colors hover:bg-muted/50 last:border-0"
                    >
                      <div className="col-span-1 flex items-center justify-center">
                        {problem.completed ? (
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                            <Check className="h-4 w-4" />
                          </div>
                        ) : (
                          <span>{problem.id}</span>
                        )}
                      </div>
                      <div className="col-span-5 font-medium">{problem.title}</div>
                      <div className="col-span-2">
                        <Badge variant="success" className="px-2 py-0 text-xs">
                          {problem.difficulty}
                        </Badge>
                      </div>
                      <div className="col-span-2 text-muted-foreground">{problem.category}</div>
                      <div className="col-span-2 text-muted-foreground">{problem.acceptance}</div>
                    </Link>
                  ))}
              </div>
            </TabsContent>

            {/* Similar content for medium and hard tabs */}
            <TabsContent value="medium" className="mt-0">
              {/* Medium difficulty problems */}
            </TabsContent>

            <TabsContent value="hard" className="mt-0">
              {/* Hard difficulty problems */}
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  )
}

