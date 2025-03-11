"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronDown, ChevronUp, Lightbulb, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainHeader } from "@/components/main-header"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { EnhancedCompiler } from "@/components/enhanced-compiler"

// Sample problem data
const problem = {
  id: 1,
  title: "Two Sum",
  difficulty: "Easy",
  category: "Arrays",
  acceptance: "45%",
  description: `
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    
    You can return the answer in any order.
  `,
  examples: [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
    },
    {
      input: "nums = [3,3], target = 6",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 6, we return [0, 1].",
    },
  ],
  constraints: [
    "2 <= nums.length <= 10^4",
    "-10^9 <= nums[i] <= 10^9",
    "-10^9 <= target <= 10^9",
    "Only one valid answer exists.",
  ],
  hints: [
    "A really brute force way would be to search for all possible pairs of numbers but that would be too slow.",
    "Try to use the fact that the complement of the number we need is already in the hash table.",
  ],
  starterCode: {
    python: `def solution(nums, target):
    # Write your solution here
    pass

# Example usage
if __name__ == "__main__":
    print(solution([2, 7, 11, 15], 9))`,
    javascript: `function solution(nums, target) {
  // Write your solution here
  
}

// Example usage
console.log(solution([2, 7, 11, 15], 9));`,
    java: `import java.util.*;

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
}`,
    cpp: `#include <iostream>
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
}`,
  },
  testCases: [
    {
      id: 1,
      input: "nums = [2,7,11,15], target = 9",
      expectedOutput: "[0,1]",
      isHidden: false,
    },
    {
      id: 2,
      input: "nums = [3,2,4], target = 6",
      expectedOutput: "[1,2]",
      isHidden: false,
    },
    {
      id: 3,
      input: "nums = [3,3], target = 6",
      expectedOutput: "[0,1]",
      isHidden: false,
    },
    {
      id: 4,
      input: "nums = [-1,-2,-3,-4,-5], target = -8",
      expectedOutput: "[2,4]",
      isHidden: true,
    },
    {
      id: 5,
      input: "nums = [1000000,1000001,1000002,1000003], target = 2000003",
      expectedOutput: "[1,2]",
      isHidden: true,
    },
  ],
}

export default function ProblemPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState<string>("description")

  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />

      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6">
          {/* Problem header */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/problems">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <h1 className="text-2xl font-bold">
                {problem.id}. {problem.title}
              </h1>
              <Badge
                variant={
                  problem.difficulty === "Easy"
                    ? "success"
                    : problem.difficulty === "Medium"
                      ? "warning"
                      : "destructive"
                }
                className="ml-2"
              >
                {problem.difficulty}
              </Badge>
            </div>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div>Category: {problem.category}</div>
              <div>Acceptance: {problem.acceptance}</div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Problem description */}
            <div className="flex flex-col">
              <Tabs defaultValue="description" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full">
                  <TabsTrigger value="description" className="flex-1">
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="solution" className="flex-1">
                    Solution
                  </TabsTrigger>
                  <TabsTrigger value="discussion" className="flex-1">
                    Discussion
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="border-none p-0 pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="prose max-w-none dark:prose-invert">
                        <p>{problem.description}</p>

                        <h3 className="text-lg font-medium mt-6">Examples:</h3>
                        {problem.examples.map((example, index) => (
                          <div key={index} className="mt-4">
                            <p className="font-medium">Example {index + 1}:</p>
                            <div className="mt-2 rounded-md bg-muted p-3">
                              <p>
                                <strong>Input:</strong> {example.input}
                              </p>
                              <p>
                                <strong>Output:</strong> {example.output}
                              </p>
                              {example.explanation && (
                                <p>
                                  <strong>Explanation:</strong> {example.explanation}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}

                        <h3 className="text-lg font-medium mt-6">Constraints:</h3>
                        <ul className="mt-2">
                          {problem.constraints.map((constraint, index) => (
                            <li key={index}>{constraint}</li>
                          ))}
                        </ul>
                      </div>

                      <Accordion type="single" collapsible className="mt-6">
                        <AccordionItem value="hints">
                          <AccordionTrigger className="text-base font-medium">
                            <div className="flex items-center gap-2">
                              <Lightbulb className="h-4 w-4" />
                              Hints
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2">
                              {problem.hints.map((hint, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="mt-0.5 text-sm font-medium">{index + 1}.</span>
                                  <span>{hint}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="solution" className="border-none p-0 pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="prose max-w-none dark:prose-invert">
                        <h3 className="text-lg font-medium">Approach 1: Brute Force</h3>
                        <p className="mt-2">
                          The simplest approach is to check every possible pair of numbers in the array. For each
                          number, we search through the rest of the array to find its complement.
                        </p>

                        <div className="mt-4 rounded-md bg-muted p-4">
                          <pre className="text-sm">
                            <code>
                              {`def twoSum(nums, target):
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []  # No solution found`}
                            </code>
                          </pre>
                        </div>

                        <p className="mt-4">
                          <strong>Time Complexity:</strong> O(n²) where n is the length of the array.
                          <br />
                          <strong>Space Complexity:</strong> O(1) as we don't use any extra space.
                        </p>

                        <h3 className="text-lg font-medium mt-6">Approach 2: Hash Map</h3>
                        <p className="mt-2">
                          We can use a hash map to keep track of numbers we've seen and their indices. For each number,
                          we check if its complement exists in the hash map.
                        </p>

                        <div className="mt-4 rounded-md bg-muted p-4">
                          <pre className="text-sm">
                            <code>
                              {`def twoSum(nums, target):
    # Create a hash map to store numbers and their indices
    numMap = {}
    
    for i, num in enumerate(nums):
        # Calculate the complement
        complement = target - num
        
        # Check if complement exists in the hash map
        if complement in numMap:
            return [numMap[complement], i]
            
        # Add current number to the hash map
        numMap[num] = i
        
    return []  # No solution found`}
                            </code>
                          </pre>
                        </div>

                        <p className="mt-4">
                          <strong>Time Complexity:</strong> O(n) where n is the length of the array.
                          <br />
                          <strong>Space Complexity:</strong> O(n) for the hash map.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="discussion" className="border-none p-0 pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Community Discussion</h3>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          New Post
                        </Button>
                      </div>

                      <div className="mt-6 space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-muted" />
                            <div>
                              <div className="font-medium">Alex Johnson</div>
                              <div className="text-sm text-muted-foreground">2 days ago</div>
                            </div>
                          </div>
                          <p className="mt-3">
                            I found that using a hash map is the most efficient approach for this problem. It allows us
                            to find the complement in O(1) time.
                          </p>
                          <div className="mt-3 flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <ChevronUp className="mr-1 h-4 w-4" />
                              15
                            </Button>
                            <Button variant="ghost" size="sm">
                              <ChevronDown className="mr-1 h-4 w-4" />2
                            </Button>
                            <Button variant="ghost" size="sm">
                              Reply
                            </Button>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-muted" />
                            <div>
                              <div className="font-medium">Maria Garcia</div>
                              <div className="text-sm text-muted-foreground">1 day ago</div>
                            </div>
                          </div>
                          <p className="mt-3">
                            The brute force approach using nested loops would be O(n²), which is too slow for large
                            inputs. The hash map solution is definitely the way to go.
                          </p>
                          <div className="mt-3 flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <ChevronUp className="mr-1 h-4 w-4" />8
                            </Button>
                            <Button variant="ghost" size="sm">
                              <ChevronDown className="mr-1 h-4 w-4" />0
                            </Button>
                            <Button variant="ghost" size="sm">
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Code editor */}
            <div className="flex flex-col">
              <EnhancedCompiler
                initialLanguage="python"
                initialCode={problem.starterCode.python}
                testCases={problem.testCases}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

