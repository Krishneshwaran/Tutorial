"use client"

import * as React from "react"
import { BookOpen, Check, Code, Copy, Play, RotateCcw, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

interface TestCase {
  id: number
  input: string
  expectedOutput: string
  isHidden?: boolean
}

interface EnhancedCompilerProps {
  initialLanguage?: string
  initialCode?: string
  testCases?: TestCase[]
  onSubmit?: (code: string, language: string) => void
}

export function EnhancedCompiler({
  initialLanguage = "python",
  initialCode = "",
  testCases = [],
  onSubmit,
}: EnhancedCompilerProps) {
  const [language, setLanguage] = React.useState(initialLanguage)
  const [code, setCode] = React.useState(initialCode || getStarterCode(initialLanguage))
  const [customInput, setCustomInput] = React.useState("")
  const [output, setOutput] = React.useState("")
  const [testResults, setTestResults] = React.useState<
    {
      id: number
      status: "pending" | "running" | "passed" | "failed"
      output?: string
      error?: string
      runtime?: string
      memory?: string
    }[]
  >([])
  const [isRunning, setIsRunning] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState<string>("editor")
  const [showSettings, setShowSettings] = React.useState(false)

  // Handle language change
  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    setCode(getStarterCode(value))
  }

  // Run code with custom input
  const handleRunCode = () => {
    setIsRunning(true)
    setOutput("Running your code...\n")
    setActiveTab("output")

    // Simulate code execution with delay
    setTimeout(() => {
      if (language === "python") {
        if (code.includes("print(") || customInput.trim() !== "") {
          setOutput(simulateOutput(language, code, customInput))
        } else {
          setOutput("Your code doesn't contain any print statements.\nAdd some print statements to see output here.")
        }
      } else {
        setOutput(simulateOutput(language, code, customInput))
      }
      setIsRunning(false)
    }, 1500)
  }

  // Run test cases
  const handleRunTests = () => {
    setIsRunning(true)
    setActiveTab("test-cases")

    // Reset all test results to pending
    setTestResults(
      testCases.map((test) => ({
        id: test.id,
        status: "pending",
      })),
    )

    // Run tests one by one with delays
    testCases.forEach((test, index) => {
      setTimeout(() => {
        setTestResults((prev) => {
          const newResults = [...prev]
          newResults[index] = {
            id: test.id,
            status: "running",
          }
          return newResults
        })

        // Simulate test execution
        setTimeout(() => {
          const testOutput = simulateOutput(language, code, test.input)
          const passed = testOutput.trim() === test.expectedOutput.trim()

          setTestResults((prev) => {
            const newResults = [...prev]
            newResults[index] = {
              id: test.id,
              status: passed ? "passed" : "failed",
              output: testOutput,
              error: passed ? undefined : "Output doesn't match expected result",
              runtime: Math.floor(Math.random() * 100) + "ms",
              memory: Math.floor(Math.random() * 10) + "." + Math.floor(Math.random() * 10) + "MB",
            }
            return newResults
          })

          // If last test, set isRunning to false
          if (index === testCases.length - 1) {
            setIsRunning(false)
          }
        }, 1000)
      }, index * 500)
    })
  }

  // Submit code
  const handleSubmit = () => {
    handleRunTests()
    if (onSubmit) {
      onSubmit(code, language)
    }
  }

  // Copy code to clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code)
  }

  // Reset code to starter template
  const handleResetCode = () => {
    setCode(getStarterCode(language))
    setOutput("")
    setTestResults([])
  }

  return (
    <div className="flex flex-col rounded-lg border bg-background">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-2">
        <div className="flex items-center gap-2">
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
            </SelectContent>
          </Select>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleCopyCode}>
                  <Copy className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Copy Code</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleResetCode}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Reset Code</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Dialog open={showSettings} onOpenChange={setShowSettings}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editor Settings</DialogTitle>
                <DialogDescription>Customize your coding environment preferences.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="font-size" className="text-right">
                    Font Size
                  </Label>
                  <Select defaultValue="14">
                    <SelectTrigger id="font-size" className="col-span-3">
                      <SelectValue placeholder="Font Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12px</SelectItem>
                      <SelectItem value="14">14px</SelectItem>
                      <SelectItem value="16">16px</SelectItem>
                      <SelectItem value="18">18px</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="theme" className="text-right">
                    Theme
                  </Label>
                  <Select defaultValue="light">
                    <SelectTrigger id="theme" className="col-span-3">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="tab-size" className="text-right">
                    Tab Size
                  </Label>
                  <Select defaultValue="4">
                    <SelectTrigger id="tab-size" className="col-span-3">
                      <SelectValue placeholder="Tab Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 spaces</SelectItem>
                      <SelectItem value="4">4 spaces</SelectItem>
                      <SelectItem value="8">8 spaces</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center gap-2">
          <Button onClick={handleRunCode} disabled={isRunning} variant="outline" className="gap-1">
            <Play className="h-4 w-4" />
            Run
          </Button>

          <Button onClick={handleRunTests} disabled={isRunning} variant="outline" className="gap-1">
            <BookOpen className="h-4 w-4" />
            Test
          </Button>

          <Button onClick={handleSubmit} disabled={isRunning} className="gap-1">
            <Check className="h-4 w-4" />
            Submit
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-1 md:col-span-3 md:border-r">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="font-mono text-sm min-h-[400px] h-full resize-none rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            spellCheck={false}
          />
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col flex-1">
            <TabsList className="w-full rounded-none bg-muted/30">
              <TabsTrigger value="editor" className="flex-1">
                Custom Input
              </TabsTrigger>
              <TabsTrigger value="output" className="flex-1">
                Output
              </TabsTrigger>
              <TabsTrigger value="test-cases" className="flex-1">
                Test Cases
              </TabsTrigger>
            </TabsList>

            <TabsContent value="editor" className="flex-1 p-0 m-0">
              <Textarea
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Enter custom input here..."
                className="font-mono text-sm h-full resize-none rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </TabsContent>

            <TabsContent value="output" className="flex-1 p-0 m-0">
              <pre className="font-mono text-sm p-4 overflow-auto h-full max-h-[400px]">
                {output || "Run your code to see output here."}
              </pre>
            </TabsContent>

            <TabsContent value="test-cases" className="flex-1 p-0 m-0">
              <div className="overflow-auto h-full max-h-[400px]">
                {testResults.length === 0 ? (
                  <div className="p-4 text-center text-muted-foreground">
                    <Code className="h-8 w-8 mx-auto mb-2" />
                    <p>Run tests to see results here.</p>
                  </div>
                ) : (
                  <div className="divide-y">
                    {testResults.map((result, index) => (
                      <div key={result.id} className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium">
                            Test Case {index + 1}
                            {testCases[index]?.isHidden && (
                              <Badge variant="outline" className="ml-2">
                                Hidden
                              </Badge>
                            )}
                          </div>
                          <Badge
                            variant={
                              result.status === "pending"
                                ? "outline"
                                : result.status === "running"
                                  ? "outline"
                                  : result.status === "passed"
                                    ? "success"
                                    : "destructive"
                            }
                          >
                            {result.status === "pending"
                              ? "Pending"
                              : result.status === "running"
                                ? "Running"
                                : result.status === "passed"
                                  ? "Passed"
                                  : "Failed"}
                          </Badge>
                        </div>

                        {result.status === "running" && <Progress value={45} className="h-2" />}

                        {(result.status === "passed" || result.status === "failed") && (
                          <>
                            {!testCases[index]?.isHidden && (
                              <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                                <div>
                                  <div className="font-medium">Input:</div>
                                  <pre className="mt-1 p-2 bg-muted rounded-md overflow-x-auto">
                                    {testCases[index]?.input || ""}
                                  </pre>
                                </div>
                                <div>
                                  <div className="font-medium">Expected Output:</div>
                                  <pre className="mt-1 p-2 bg-muted rounded-md overflow-x-auto">
                                    {testCases[index]?.expectedOutput || ""}
                                  </pre>
                                </div>
                              </div>
                            )}

                            {result.output && (
                              <div className="mt-3 text-sm">
                                <div className="font-medium">Your Output:</div>
                                <pre
                                  className={cn(
                                    "mt-1 p-2 rounded-md overflow-x-auto",
                                    result.status === "passed" ? "bg-green-500/10" : "bg-red-500/10",
                                  )}
                                >
                                  {result.output}
                                </pre>
                              </div>
                            )}

                            {result.error && (
                              <div className="mt-3 text-sm text-red-500">
                                <div className="font-medium">Error:</div>
                                <div className="mt-1">{result.error}</div>
                              </div>
                            )}

                            <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                              {result.runtime && <div>Runtime: {result.runtime}</div>}
                              {result.memory && <div>Memory: {result.memory}</div>}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

// Helper function to get starter code based on language
function getStarterCode(language: string): string {
  switch (language) {
    case "python":
      return `def solution(nums, target):
    # Write your solution here
    pass

# Example usage
if __name__ == "__main__":
    print(solution([2, 7, 11, 15], 9))
`
    case "javascript":
      return `function solution(nums, target) {
  // Write your solution here
  
}

// Example usage
console.log(solution([2, 7, 11, 15], 9));
`
    case "java":
      return `import java.util.*;

public class Solution {
    public int[] solution(int[] nums, int target) {
        // Write your solution here
        return new int[]{};
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] result = sol.solution(new int[]{2, 7, 11, 15}, 9);
        System.out.println(Arrays.toString(result));
    }
}
`
    case "cpp":
      return `#include <iostream>
#include <vector>

using namespace std;

vector<int> solution(vector<int>& nums, int target) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> result = solution(nums, target);
    cout << "[" << result[0] << ", " << result[1] << "]" << endl;
    return 0;
}
`
    default:
      return ""
  }
}

// Helper function to simulate code output
function simulateOutput(language: string, code: string, input: string): string {
  // This is a simplified simulation for demonstration purposes
  if (language === "python") {
    if (code.includes("solution([2, 7, 11, 15], 9)")) {
      return "[0, 1]"
    }
  } else if (language === "javascript") {
    if (code.includes("solution([2, 7, 11, 15], 9)")) {
      return "[0, 1]"
    }
  }

  // Generic response based on input
  if (input) {
    return `Running with input: ${input}\nOutput: [0, 1]`
  }

  return "Program executed successfully!"
}

