import { MainHeader } from "@/components/main-header";

export default function SqlPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MainHeader />
      <main className="flex-1 p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-black border-b pb-2">SQL SELECT Statements</h1>
        
        <p className="mb-6 text-gray-800">
          The SELECT statement is the most commonly used command in SQL. It retrieves data from database tables,
          allowing you to specify which columns you want, filter rows, sort results, and more.
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Basic SELECT Syntax</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Select All Columns</h3>
              <p className="text-sm text-gray-600">Retrieve all columns from a table</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`SELECT * FROM employees;`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Select Specific Columns</h3>
              <p className="text-sm text-gray-600">Retrieve only the columns you need</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`SELECT first_name, last_name, salary FROM employees;`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Select with Column Aliases</h3>
              <p className="text-sm text-gray-600">Rename columns in the result set</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`SELECT 
  first_name AS "First Name",
  last_name AS "Last Name",
  hire_date AS "Start Date"
FROM employees;`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Select Distinct Values</h3>
              <p className="text-sm text-gray-600">Retrieve only unique values</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`SELECT DISTINCT department_id FROM employees;`}
              </code>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Filtering Data with WHERE</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Basic Comparison Operators</h3>
              <p className="text-sm text-gray-600">Filter rows using comparison operators</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`-- Equals
SELECT * FROM employees WHERE department_id = 10;

-- Greater than
SELECT * FROM employees WHERE salary > 50000;

-- Less than or equal to
SELECT * FROM employees WHERE hire_date <= '2023-01-01';

-- Not equal
SELECT * FROM employees WHERE job_title <> 'Manager';`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Logical Operators</h3>
              <p className="text-sm text-gray-600">Combine conditions using AND, OR, NOT</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`-- AND (both conditions must be true)
SELECT * FROM employees 
WHERE salary > 50000 AND department_id = 20;

-- OR (either condition can be true)
SELECT * FROM employees 
WHERE department_id = 10 OR department_id = 20;

-- NOT (negates a condition)
SELECT * FROM employees 
WHERE NOT (department_id = 10);`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">BETWEEN, IN, LIKE, IS NULL</h3>
              <p className="text-sm text-gray-600">Special operators for common filtering needs</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`-- BETWEEN (inclusive range)
SELECT * FROM employees 
WHERE salary BETWEEN 40000 AND 60000;

-- IN (match any value in a list)
SELECT * FROM employees 
WHERE department_id IN (10, 20, 30);

-- LIKE (pattern matching)
SELECT * FROM employees 
WHERE last_name LIKE 'S%';  -- Names starting with S

-- IS NULL (check for NULL values)
SELECT * FROM employees 
WHERE manager_id IS NULL;`}
              </code>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Sorting Results with ORDER BY</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Basic Sorting</h3>
              <p className="text-sm text-gray-600">Sort results in ascending or descending order</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`-- Ascending order (default)
SELECT * FROM employees ORDER BY last_name;

-- Descending order
SELECT * FROM employees ORDER BY salary DESC;

-- Multiple columns
SELECT * FROM employees 
ORDER BY department_id, salary DESC;`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Sorting by Column Position</h3>
              <p className="text-sm text-gray-600">Use column position numbers instead of names</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`SELECT first_name, last_name, hire_date FROM employees 
ORDER BY 3;  -- Sort by the third column (hire_date)`}
              </code>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Limiting Results</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">LIMIT (MySQL, PostgreSQL, SQLite)</h3>
              <p className="text-sm text-gray-600">Restrict the number of rows returned</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`-- Get the first 10 employees
SELECT * FROM employees LIMIT 10;

-- Skip first 20 rows, then get 10 rows (pagination)
SELECT * FROM employees LIMIT 10 OFFSET 20;

-- Alternative syntax
SELECT * FROM employees LIMIT 20, 10;  -- MySQL`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">TOP (SQL Server)</h3>
              <p className="text-sm text-gray-600">SQL Server's approach to limiting results</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`-- Get the top 10 employees
SELECT TOP 10 * FROM employees;

-- Get top 10 percent of rows
SELECT TOP 10 PERCENT * FROM employees;`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">FETCH (Standard SQL)</h3>
              <p className="text-sm text-gray-600">Standard SQL approach for pagination</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`-- Get the first 10 employees
SELECT * FROM employees 
ORDER BY employee_id
FETCH FIRST 10 ROWS ONLY;

-- Skip first 20 rows, then get 10 rows
SELECT * FROM employees 
ORDER BY employee_id
OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY;`}
              </code>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-black">Aggregate Functions</h2>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Common Aggregate Functions</h3>
              <p className="text-sm text-gray-600">Perform calculations on sets of rows</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`-- Count rows
SELECT COUNT(*) FROM employees;

-- Count non-null values in a column
SELECT COUNT(manager_id) FROM employees;

-- Sum of values
SELECT SUM(salary) FROM employees;

-- Average value
SELECT AVG(salary) FROM employees;

-- Minimum and maximum values
SELECT MIN(salary), MAX(salary) FROM employees;`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Grouping with GROUP BY</h3>
              <p className="text-sm text-gray-600">Group rows by column values before aggregation</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`-- Count employees in each department
SELECT department_id, COUNT(*) AS employee_count
FROM employees
GROUP BY department_id;

-- Find average salary by department
SELECT department_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id
ORDER BY avg_salary DESC;`}
              </code>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-bold">Filtering Groups with HAVING</h3>
              <p className="text-sm text-gray-600">Filter groups after aggregation (WHERE filters before aggregation)</p>
              <code className="block bg-gray-100 p-2 mt-2 text-sm">
                {`-- Find departments with more than 10 employees
SELECT department_id, COUNT(*) AS employee_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 10;

-- Find departments with average salary over 50000
SELECT department_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 50000;`}
              </code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}