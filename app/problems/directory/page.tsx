import Link from "next/link"
import { List, Search, SortAsc } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainHeader } from "@/components/main-header"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Define the problem interface
interface Problem {
  id: number
  title: string
  difficulty: "Easy" | "Medium" | "Hard"
  category: string
  tags: string[]
  acceptance: string
  completed?: boolean
  href: string
}

// Define the technology category interface
interface TechnologyCategory {
  name: string
  slug: string
  count: number
  subcategories: {
    name: string
    slug: string
    count: number
  }[]
}

// Sample data for problem categories by technology
const technologyCategories: TechnologyCategory[] = [
  {
    name: "Python",
    slug: "python",
    count: 120,
    subcategories: [
      { name: "Basics", slug: "basics", count: 35 },
      { name: "Data Structures", slug: "data-structures", count: 45 },
      { name: "Algorithms", slug: "algorithms", count: 30 },
      { name: "Web Development", slug: "web-development", count: 10 },
    ],
  },
  {
    name: "JavaScript",
    slug: "javascript",
    count: 110,
    subcategories: [
      { name: "Basics", slug: "basics", count: 30 },
      { name: "DOM Manipulation", slug: "dom", count: 25 },
      { name: "Async Programming", slug: "async", count: 20 },
      { name: "Frameworks", slug: "frameworks", count: 35 },
    ],
  },
  {
    name: "Java",
    slug: "java",
    count: 95,
    subcategories: [
      { name: "Basics", slug: "basics", count: 25 },
      { name: "Object-Oriented", slug: "oop", count: 35 },
      { name: "Collections", slug: "collections", count: 25 },
      { name: "Concurrency", slug: "concurrency", count: 10 },
    ],
  },
  {
    name: "C++",
    slug: "cpp",
    count: 85,
    subcategories: [
      { name: "Basics", slug: "basics", count: 20 },
      { name: "STL", slug: "stl", count: 30 },
      { name: "Memory Management", slug: "memory", count: 15 },
      { name: "Templates", slug: "templates", count: 20 },
    ],
  },
  {
    name: "SQL",
    slug: "sql",
    count: 60,
    subcategories: [
      { name: "Basic Queries", slug: "basics", count: 20 },
      { name: "Joins", slug: "joins", count: 15 },
      { name: "Indexing", slug: "indexing", count: 10 },
      { name: "Optimization", slug: "optimization", count: 15 },
    ],
  },
  {
    name: "HTML/CSS",
    slug: "html-css",
    count: 50,
    subcategories: [
      { name: "HTML Basics", slug: "html-basics", count: 15 },
      { name: "CSS Styling", slug: "css-styling", count: 20 },
      { name: "Responsive Design", slug: "responsive", count: 10 },
      { name: "Animations", slug: "animations", count: 5 },
    ],
  },
]

// Sample data for problems (filtered by Python category in this example)
const pythonProblems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Algorithms",
    tags: ["Arrays", "Hash Table"],
    acceptance: "45%",
    completed: true,
    href: "/problems/python/algorithms/two-sum",
  },
  {
    id: 2,
    title: "String Reversal",
    difficulty: "Easy",
    category: "Basics",
    tags: ["Strings", "Recursion"],
    acceptance: "62%",
    completed: false,
    href: "/problems/python/basics/string-reversal",
  },
  {
    id: 3,
    title: "Binary Search Tree Implementation",
    difficulty: "Medium",
    category: "Data Structures",
    tags: ["Trees", "Binary Search", "Implementation"],
    acceptance: "38%",
    completed: false,
    href: "/problems/python/data-structures/binary-search-tree",
  },
  {
    id: 4,
    title: "Fibonacci Generator",
    difficulty: "Easy",
    category: "Basics",
    tags: ["Math", "Recursion", "Dynamic Programming"],
    acceptance: "58%",
    completed: true,
    href: "/problems/python/basics/fibonacci-generator",
  },
  {
    id: 5,
    title: "Longest Increasing Subsequence",
    difficulty: "Hard",
    category: "Algorithms",
    tags: ["Dynamic Programming", "Binary Search"],
    acceptance: "25%",
    completed: false,
    href: "/problems/python/algorithms/longest-increasing-subsequence",
  },
  {
    id: 6,
    title: "Flask API Development",
    difficulty: "Medium",
    category: "Web Development",
    tags: ["API", "HTTP", "Flask"],
    acceptance: "42%",
    completed: false,
    href: "/problems/python/web-development/flask-api",
  },
  {
    id: 7,
    title: "Linked List Cycle Detection",
    difficulty: "Medium",
    category: "Data Structures",
    tags: ["Linked List", "Two Pointers", "Floyd's Algorithm"],
    acceptance: "35%",
    completed: false,
    href: "/problems/python/data-structures/linked-list-cycle",
  },
  {
    id: 8,
    title: "JSON Parser Implementation",
    difficulty: "Hard",
    category: "Web Development",
    tags: ["Parsing", "JSON", "Recursion"],
    acceptance: "22%",
    completed: false,
    href: "/problems/python/web-development/json-parser",
  },
]

export default function ProblemDirectoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />

      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/problems">Problems</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/problems/directory">Directory</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Python</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid gap-6 md:grid-cols-[300px_1fr]">
            {/* Sidebar Categories */}
            <div className="md:pr-6">
              <div className="mb-6">
                <Input
                  placeholder="Search problems..."
                  className="w-full"
                  prefix={<Search className="h-4 w-4 text-muted-foreground" />}
                />
              </div>

              <div className="mb-6">
                <h3 className="mb-2 font-semibold">Filter By</h3>
                <div className="space-y-2">
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Difficulties</SelectItem>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="solved">Solved</SelectItem>
                      <SelectItem value="unsolved">Unsolved</SelectItem>
                      <SelectItem value="attempted">Attempted</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-lg border">
                <div className="bg-muted/50 p-3 font-medium">Technologies</div>
                <Accordion type="multiple" className="w-full" defaultValue={["python"]}>
                  {technologyCategories.map((tech) => (
                    <AccordionItem key={tech.slug} value={tech.slug}>
                      <AccordionTrigger className="px-3 py-2 text-sm hover:bg-muted/50">
                        <div className="flex items-center justify-between w-full">
                          <span>{tech.name}</span>
                          <Badge variant="outline" className="ml-2 font-normal">
                            {tech.count}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-1 px-3 pb-3">
                          {tech.subcategories.map((subcat) => (
                            <Link
                              key={subcat.slug}
                              href={`/problems/${tech.slug}/${subcat.slug}`}
                              className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted/50"
                            >
                              <span>{subcat.name}</span>
                              <Badge variant="outline" className="font-normal">
                                {subcat.count}
                              </Badge>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mt-6 rounded-lg border">
                <div className="bg-muted/50 p-3 font-medium">Popular Tags</div>
                <div className="flex flex-wrap gap-2 p-3">
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted/50">
                    Arrays
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted/50">
                    Strings
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted/50">
                    Dynamic Programming
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted/50">
                    Tree
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted/50">
                    Hash Table
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted/50">
                    Math
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted/50">
                    Graph
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted/50">
                    Recursion
                  </Badge>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-bold">Python Problems</h1>
                <p className="mt-2 text-muted-foreground">
                  Sharpen your Python skills with these curated problems across various categories.
                </p>
              </div>

              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <Tabs defaultValue="all" className="w-auto">
                  <TabsList>
                    <TabsTrigger value="all">All Problems</TabsTrigger>
                    <TabsTrigger value="easy">Easy</TabsTrigger>
                    <TabsTrigger value="medium">Medium</TabsTrigger>
                    <TabsTrigger value="hard">Hard</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="flex items-center gap-2">
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[160px]">
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

                  <Button variant="outline" size="icon">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Problems List */}
              <div className="rounded-lg border">
                <div className="grid grid-cols-12 gap-4 bg-muted/50 p-4 font-medium">
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-5 md:col-span-6">Title</div>
                  <div className="col-span-3 md:col-span-2">Category</div>
                  <div className="col-span-3 md:col-span-2">Difficulty</div>
                  <div className="hidden md:col-span-1 md:block">Acceptance</div>
                </div>

                {pythonProblems.map((problem) => (
                  <Link
                    key={problem.id}
                    href={problem.href}
                    className="grid grid-cols-12 gap-4 border-t p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="col-span-1 text-center font-medium">
                      {problem.completed ? (
                        <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        problem.id
                      )}
                    </div>
                    <div className="col-span-5 md:col-span-6">
                      <div className="font-medium">{problem.title}</div>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {problem.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="px-1 py-0 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-3 md:col-span-2 self-center text-sm text-muted-foreground">
                      {problem.category}
                    </div>
                    <div className="col-span-3 md:col-span-2 self-center">
                      <Badge
                        variant={
                          problem.difficulty === "Easy"
                            ? "success"
                            : problem.difficulty === "Medium"
                              ? "warning"
                              : "destructive"
                        }
                        className="px-2 py-0.5 text-xs"
                      >
                        {problem.difficulty}
                      </Badge>
                    </div>
                    <div className="hidden md:col-span-1 md:block self-center text-sm text-muted-foreground">
                      {problem.acceptance}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <div className="text-sm text-muted-foreground">Page 1 of 12</div>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

