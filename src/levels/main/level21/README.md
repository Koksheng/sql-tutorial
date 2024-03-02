# Advanced Query - Join Query - Inner Join

## Tutorial
In SQL, INNER JOIN is a common type of join query that combines rows from two tables based on a related condition between them.

It's important to note that INNER JOIN only returns the intersection of rows that satisfy the join condition in both tables.


## Example
Suppose we have an employee table `employees` with the following fields: `emp_id` (employee ID), `emp_name` (employee name), `department` (department), `salary` (salary). Here's the data:

| emp_id | emp_name | department | salary |
|--------|----------|------------|--------|
| 1      | John     | Technology     | 5000   |
| 2      | David     | Finance     | 6000   |
| 3      | Vanessa     | Sales     | 4500   |



Now, let's assume we also have a department table `departments` with the following fields: `department` (department name), `manager` (department manager), `location` (location). Here's the data:

| department | manager | location |
|------------|---------|----------|
| Technology     | Daniel    | Serangoon     |
| Finance      | Alex    | Paya Lebar     |
| Sales      | Viji    | Bishan     |
| Reliability      | Edwin    | Yishun     |


Using INNER JOIN, we can perform a join query based on the common field `department` between the `employees` and `departments` tables, and select the employee's name, salary, department, and department manager:

```sql
SELECT e.emp_name, e.salary, e.department, d.manager
FROM employees e
JOIN departments d ON e.department = d.department;
```



The query results in:

| emp_name | salary | department | manager |
|----------|--------|------------|---------|
| John     | 5000   | Technology     | Daniel    |
| David     | 6000   | Finance     | Alex    |
| Vanessa     | 4500   | Sales     | Viji    |



We can observe that only the data that exists in both tables based on the department is included in the result set after using INNER JOIN.


## Question

Suppose we have a student table `student` with the following fields: `id` (student ID), `name` (student name), `age` (student age), `class_id` (class ID). There is also a class table `class` with the following fields: `id` (class ID), `name` (class name), `level` (class level).

Write an SQL query to match the class ID between the student table and the class table and return the student's name (`student_name`), student's age (`student_age`), class ID (`class_id`), class name (`class_name`), and class level (`class_level`).
