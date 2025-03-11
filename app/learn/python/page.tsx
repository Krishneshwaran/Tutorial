import { MainHeader } from "@/components/main-header";

export default function PythonPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MainHeader />
      <main className="flex-1 p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-black border-b pb-2">Python Lists</h1>
        
        <p className="mb-6 text-gray-800">
          Lists are one of Python's most versatile data structures. They are ordered, changeable (mutable), 
          and allow duplicate elements. Lists are created using square brackets and can contain items of different data types.
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Creating Lists</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Basic List</h3>
              <p className="text-sm text-gray-600">Create a simple list with different data types</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`# A simple list with mixed data types
fruits = ["apple", "banana", "cherry"]
mixed_list = [1, "Hello", 3.14, True]

# Empty list
empty_list = []`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">List Constructor</h3>
              <p className="text-sm text-gray-600">Create a list using the list() function</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`# Using list() constructor
fruits = list(("apple", "banana", "cherry"))  # Note the double parentheses

# Convert other iterables to lists
letters = list("Python")  # Creates ['P', 'y', 't', 'h', 'o', 'n']`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">List Comprehension</h3>
              <p className="text-sm text-gray-600">Create lists using a compact syntax</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`# List of squares from 0 to 9
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# List with conditional logic
even_numbers = [x for x in range(20) if x % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]`}
              </code>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Accessing List Elements</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Indexing</h3>
              <p className="text-sm text-gray-600">Access items using index (starting from 0)</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`fruits = ["apple", "banana", "cherry", "orange", "kiwi"]

# Positive indexing (starts at 0)
first_fruit = fruits[0]  # "apple"
third_fruit = fruits[2]  # "cherry"

# Negative indexing (starts at -1)
last_fruit = fruits[-1]  # "kiwi"
second_last = fruits[-2]  # "orange"`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Slicing</h3>
              <p className="text-sm text-gray-600">Access a range of items using start:end:step syntax</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`fruits = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]

# Basic slicing [start:end] (end is exclusive)
first_three = fruits[0:3]  # ["apple", "banana", "cherry"]
# Omitting start means start from beginning
first_four = fruits[:4]  # ["apple", "banana", "cherry", "orange"]
# Omitting end means go to the end
from_third = fruits[2:]  # ["cherry", "orange", "kiwi", "melon", "mango"]

# Using step [start:end:step]
every_second = fruits[::2]  # ["apple", "cherry", "kiwi", "mango"]
reversed_list = fruits[::-1]  # ["mango", "melon", "kiwi", "orange", "cherry", "banana", "apple"]`}
              </code>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Modifying Lists</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Changing Values</h3>
              <p className="text-sm text-gray-600">Update items by assigning new values to specific indices</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`fruits = ["apple", "banana", "cherry"]

# Change value at index 1
fruits[1] = "blackcurrant"
print(fruits)  # ["apple", "blackcurrant", "cherry"]

# Change values in a range
fruits[1:3] = ["blueberry", "watermelon"]
print(fruits)  # ["apple", "blueberry", "watermelon"]`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Adding Items</h3>
              <p className="text-sm text-gray-600">Methods to add elements to a list</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`fruits = ["apple", "banana", "cherry"]

# Append a single item to the end
fruits.append("orange")
print(fruits)  # ["apple", "banana", "cherry", "orange"]

# Insert at specific position
fruits.insert(1, "mango")
print(fruits)  # ["apple", "mango", "banana", "cherry", "orange"]

# Extend with another list
more_fruits = ["kiwi", "melon"]
fruits.extend(more_fruits)
print(fruits)  # ["apple", "mango", "banana", "cherry", "orange", "kiwi", "melon"]`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Removing Items</h3>
              <p className="text-sm text-gray-600">Methods to remove elements from a list</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`fruits = ["apple", "banana", "cherry", "orange", "kiwi"]

# Remove by value (first occurrence)
fruits.remove("banana")
print(fruits)  # ["apple", "cherry", "orange", "kiwi"]

# Remove by index using pop() (returns the removed item)
removed = fruits.pop(1)
print(removed)  # "cherry"
print(fruits)  # ["apple", "orange", "kiwi"]

# Remove by index using del
del fruits[0]
print(fruits)  # ["orange", "kiwi"]

# Remove all items
fruits.clear()
print(fruits)  # []`}
              </code>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-black">List Methods</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Sorting</h3>
              <p className="text-sm text-gray-600">Organize list elements in a specific order</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`# Sort in ascending order (modifies the original list)
numbers = [3, 1, 4, 1, 5, 9, 2]
numbers.sort()
print(numbers)  # [1, 1, 2, 3, 4, 5, 9]

# Sort in descending order
numbers.sort(reverse=True)
print(numbers)  # [9, 5, 4, 3, 2, 1, 1]

# sorted() creates a new sorted list
original = [3, 1, 4, 1, 5]
sorted_list = sorted(original)
print(original)     # [3, 1, 4, 1, 5] (unchanged)
print(sorted_list)  # [1, 1, 3, 4, 5]`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Finding Information</h3>
              <p className="text-sm text-gray-600">Methods to get information about list elements</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`fruits = ["apple", "banana", "cherry", "apple", "orange"]

# Count occurrences of an element
apple_count = fruits.count("apple")
print(apple_count)  # 2

# Find index of the first occurrence
banana_index = fruits.index("banana")
print(banana_index)  # 1

# Check if item exists in list
has_cherry = "cherry" in fruits
print(has_cherry)  # True

# Get the length of the list
fruit_count = len(fruits)
print(fruit_count)  # 5`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Copying Lists</h3>
              <p className="text-sm text-gray-600">Different ways to copy a list</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`original = ["apple", "banana", "cherry"]

# Copy using copy() method
copy1 = original.copy()

# Copy using list() constructor
copy2 = list(original)

# Copy using slicing
copy3 = original[:]

# Note: These are all shallow copies`}
              </code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}