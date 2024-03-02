# Advanced Query - Join Query - Outer Join

## Tutorial

In SQL, OUTER JOIN is a type of join query that combines rows from two tables based on a specified join condition and **includes unmatched rows**.

In OUTER JOIN, there are two types: LEFT OUTER JOIN and RIGHT OUTER JOIN. They respectively represent querying all rows from the left table and the right table (even if they don't have matches), along with the intersecting part that satisfies the condition.


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
| HR      | Clement    | Bishan     |
| Reliability      | Edwin    | Yishun     |


Using LEFT JOIN, we can perform a join query based on the common field `department` between the `employees` and `departments` tables, and select the employee's name, salary, department, and department manager, including all employee information:

```sql
SELECT e.emp_name, e.salary, e.department, d.manager
FROM employees e
LEFT JOIN departments d ON e.department = d.department;
```



The query results in:

| emp_name | salary | department | manager |
|----------|--------|------------|---------|
| John     | 5000   | Technology     | Daniel    |
| David     | 6000   | Finance     | Alex    |
| Vanessa     | 4500   | Sales     | NULL    |


Note the last row in the table. Vanessa's department, Sales, does not exist in the department table, but it still appears in the result set with a NULL manager.

Some databases do not support RIGHT JOIN syntax. So, how do we achieve a RIGHT JOIN?

We simply need to switch the order of the main table (the one after FROM) and the associated table (the one after LEFT JOIN)!


## Question

Suppose we have a student table `student` with the following fields: `id` (student ID), `name` (student name), `age` (student age), `class_id` (class ID). There is also a class table `class` with the following fields: `id` (class ID), `name` (class name), `level` (class level).

Write an SQL query to match the class ID between the student table and the class table, and return the student's name (`student_name`), student's age (`student_age`), class ID (`class_id`), class name (`class_name`), and class level (`class_level`). All student information must be returned (even if the corresponding class ID does not exist).
