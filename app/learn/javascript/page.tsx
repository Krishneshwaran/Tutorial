import { MainHeader } from "@/components/main-header";

export default function JavaScriptPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MainHeader />
      <main className="flex-1 p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-black border-b pb-2">JavaScript Functions</h1>
        
        <p className="mb-6 text-gray-800">
          Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code 
          designed to perform a particular task. Functions are executed when they are called, or invoked.
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Function Declarations</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Basic Function</h3>
              <p className="text-sm text-gray-600">Define a function using the function keyword</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`function greet() {
  console.log("Hello, world!");
}`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Function with Parameters</h3>
              <p className="text-sm text-gray-600">Functions can accept inputs called parameters</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`function greet(name) {
  console.log("Hello, " + name + "!");
}`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Function with Return Value</h3>
              <p className="text-sm text-gray-600">Functions can return values using the return keyword</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`function add(a, b) {
  return a + b;
}

const sum = add(5, 3); // sum = 8`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Default Parameters</h3>
              <p className="text-sm text-gray-600">Set default values for parameters that aren't provided</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`function greet(name = "Guest") {
  return "Hello, " + name + "!";
}

greet();       // "Hello, Guest!"
greet("Alex"); // "Hello, Alex!"`}
              </code>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Function Expressions</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Anonymous Function Expression</h3>
              <p className="text-sm text-gray-600">Assign a function to a variable without naming the function</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`const greet = function(name) {
  return "Hello, " + name + "!";
};

greet("Sarah"); // "Hello, Sarah!"`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Arrow Functions</h3>
              <p className="text-sm text-gray-600">A shorter syntax for writing function expressions</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`// Basic arrow function
const add = (a, b) => {
  return a + b;
};

// Shorter version for single statement functions
const multiply = (a, b) => a * b;

// Arrow function with single parameter
const square = x => x * x;`}
              </code>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Function Scope</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Local Variables</h3>
              <p className="text-sm text-gray-600">Variables declared within a function are only accessible inside that function</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`function myFunction() {
  const localVar = "I am local";
  console.log(localVar); // Accessible
}

// console.log(localVar); // Error! Not accessible outside`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Closures</h3>
              <p className="text-sm text-gray-600">Functions can access variables from their containing scope</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`function outerFunction() {
  const outerVar = "I am from outer function";
  
  function innerFunction() {
    console.log(outerVar); // Can access outer variable
  }
  
  return innerFunction;
}

const myFunc = outerFunction();
myFunc(); // Logs: "I am from outer function"`}
              </code>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-black">Function Methods</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">call()</h3>
              <p className="text-sm text-gray-600">Call a function with a given this value and arguments</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
}

const person1 = {
  firstName: "John",
  lastName: "Doe"
}

person.fullName.call(person1, "New York", "USA");`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">apply()</h3>
              <p className="text-sm text-gray-600">Similar to call(), but arguments are passed as an array</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
}

const person1 = {
  firstName: "John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["New York", "USA"]);`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">bind()</h3>
              <p className="text-sm text-gray-600">Creates a new function with the specified this value</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName: "Jane",
  lastName: "Smith",
}

const getMemberName = person.fullName.bind(member);
console.log(getMemberName()); // "Jane Smith"`}
              </code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}