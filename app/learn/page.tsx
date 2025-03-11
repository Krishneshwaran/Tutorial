"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, FileCode2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MainHeader } from "@/components/main-header";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Sample data for learning paths
const learningPaths = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript and more to build modern websites",
    progress: 65,
    modules: 24,
    hours: 48,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    title: "Python Programming",
    description: "Master Python from basics to advanced concepts",
    progress: 30,
    modules: 18,
    hours: 36,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Essential computer science concepts for coding interviews",
    progress: 10,
    modules: 20,
    hours: 40,
    image: "/placeholder.svg?height=100&width=200",
  },
];

// Sample data for technologies
const technologies = [
  { name: "HTML", icon: FileCode2, color: "bg-orange-500", lessons: 24, href: "/learn/html" },
  { name: "CSS", icon: FileCode2, color: "bg-blue-500", lessons: 32, href: "/learn/css" },
  { name: "JavaScript", icon: FileCode2, color: "bg-yellow-500", lessons: 48, href: "/learn/javascript" },
  { name: "Python", icon: FileCode2, color: "bg-green-500", lessons: 56, href: "/learn/python" },
  { name: "SQL", icon: FileCode2, color: "bg-purple-500", lessons: 28, href: "/learn/sql" },
  { name: "React", icon: FileCode2, color: "bg-cyan-500", lessons: 36, href: "/learn/react" },
  { name: "Node.js", icon: FileCode2, color: "bg-green-600", lessons: 30, href: "/learn/nodejs" },
  { name: "Git", icon: FileCode2, color: "bg-orange-600", lessons: 18, href: "/learn/git" },
];

// Sample data for recommended lessons
const recommendedLessons = [
  {
    title: "JavaScript Promises",
    category: "JavaScript",
    level: "Intermediate",
    duration: "25 min",
    href: "/learn/javascript/promises",
  },
  {
    title: "CSS Flexbox Layout",
    category: "CSS",
    level: "Beginner",
    duration: "20 min",
    href: "/learn/css/flexbox",
  },
  {
    title: "Python List Comprehensions",
    category: "Python",
    level: "Intermediate",
    duration: "15 min",
    href: "/learn/python/list-comprehensions",
  },
  {
    title: "SQL Joins Explained",
    category: "SQL",
    level: "Intermediate",
    duration: "30 min",
    href: "/learn/sql/joins",
  },
];

export default function LearnPage() {
  const [concept, setConcept] = useState<string | null>(null);

  const handleClick = (tech: string) => {
    const concepts: Record<string, string> = {
      HTML: "HTML is the standard markup language for creating web pages.",
      CSS: "CSS is used to style and layout web pages.",
      JavaScript: "JavaScript is a programming language that makes web pages interactive.",
    };

    if (concepts[tech]) {
      setConcept(concepts[tech]);
    }
  };

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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learn to Code</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Master programming through interactive lessons, hands-on exercises, and real-world projects.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Learning illustration"
                  className="rounded-lg object-cover"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Continue Learning Section */}
        <section className="container px-4 py-12 md:px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Continue Learning</h2>
            <Button variant="ghost" asChild size="sm">
              <Link href="/dashboard">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {learningPaths.map((path) => (
              <Card key={path.title} className="overflow-hidden">
                <img
                  src={path.image || "/placeholder.svg"}
                  alt={path.title}
                  className="aspect-video w-full object-cover"
                />
                <CardHeader className="p-4 pb-2">
                  <CardTitle>{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>{path.progress}% complete</span>
                    <span className="text-muted-foreground">{path.modules} modules</span>
                  </div>
                  <Progress value={path.progress} className="h-2" />
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <BookOpen className="mr-1 h-4 w-4" />
                    {path.hours} hours of content
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/learn/${path.title.toLowerCase().replace(/\s+/g, "-")}`}>Continue</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="bg-muted/50 py-12">
          <div className="container px-4 md:px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Browse by Technology</h2>
              <p className="mt-2 text-muted-foreground">Explore our comprehensive library of lessons by technology</p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {technologies.map((tech) => (
                <Link
                  key={tech.name}
                  href={tech.href}
                  className="group flex flex-col rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50"
                  onClick={() => handleClick(tech.name)}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${tech.color}`}>
                      <tech.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-medium group-hover:underline">{tech.name}</h3>
                  </div>
                  <p className="mt-auto text-sm text-muted-foreground">{tech.lessons} lessons</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Lessons */}
        <section className="container px-4 py-12 md:px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recommended for You</h2>
            <Button variant="ghost" asChild size="sm">
              <Link href="/learn/recommended">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {recommendedLessons.map((lesson) => (
              <Link key={lesson.title} href={lesson.href}>
                <Card className="h-full transition-colors hover:bg-muted/50">
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="px-2 py-0 text-xs">
                        {lesson.category}
                      </Badge>
                      <Badge
                        variant={
                          lesson.level === "Beginner"
                            ? "success"
                            : lesson.level === "Intermediate"
                              ? "warning"
                              : "destructive"
                        }
                        className="px-2 py-0 text-xs"
                      >
                        {lesson.level}
                      </Badge>
                    </div>
                    <CardTitle className="mt-2 text-base">{lesson.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <BookOpen className="mr-1 h-4 w-4" />
                      {lesson.duration}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Concept Display */}
        {concept && (
          <section className="container px-4 py-12 md:px-6">
            <div className="bg-muted/50 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Concept to Study</h2>
              <p className="text-muted-foreground">{concept}</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
