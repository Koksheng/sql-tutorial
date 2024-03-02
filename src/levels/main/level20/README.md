# Advanced Querying - Joining - Cross Join


## Tutorial
In the previous tutorials, all our querying operations were performed within a single data table. However, there are times when we want to fetch additional data based on a single table, such as obtaining information about the classes to which students belong. In such cases, we need to use join queries.

In SQL, a join query is a method used to combine data from multiple data tables.

Among them, `CROSS JOIN` is a simple type of join query that does not require any conditions to match rows. It directly combines **every row** from the left table with **every row** from the right table, returning the Cartesian product of the two tables.


## Example
Suppose there is an employee table `employees`, containing the following fields: `emp_id` (employee ID), `emp_name` (employee name), `department` (department), `salary` (salary). The data is as follows:

| emp_id | emp_name | department | salary |
|--------|----------|------------|--------|
| 1      | John     | Technology Department     | 5000   |
| 2      | David     | Finance Department     | 6000   |
| 3      | Vanessa     | Sales Department     | 4500   |



Suppose there is also a department table `departments`, containing the following fields: `department` (department name), `manager` (department manager), `location` (location). The data is as follows:

| department | manager | location |
|------------|---------|----------|
| Technology Department     | Daniel    | Serangoon     |
| Finance Department     | Alex    | Paya Lebar     |
| Sales Department     | Viji    | Bishan     |



Use CROSS JOIN for a join query, combining all rows from the employee table and the department table together, and fetching employee name, salary, department name, and department manager. The SQL code example is as follows:

```sql
SELECT e.emp_name, e.salary, e.department, d.manager
FROM employees e
CROSS JOIN departments d;
```



Note that in SQL queries involving multiple tables, it's best to specify the table name for selected fields (e.g., e.emp_name), and you can simplify the SQL statement by assigning aliases to tables (e.g., employees e).

Query result:

| emp_name | salary | department | manager |
|----------|--------|------------|---------|
| John     | 5000   | Technology Department     | Daniel    |
| John     | 5000   | Finance Department     | Alex    |
| John     | 5000   | Sales Department     | Viji    |
| David     | 6000   | Technology Department     | Daniel    |
| David     | 6000   | Finance Department     | Alex    |
| David     | 6000   | Sales Department     | Viji    |
| Vanessa     | 4500   | Technology Department     | Daniel    |
| Vanessa     | 4500   | Finance Department     | Alex    |
| Vanessa     | 4500   | Sales Department     | Viji    |



## Question

Suppose there is a student table `student`, containing the following fields: id (student ID), name (name), age (age), class_id (class ID); and there is also a class table `class`, containing the following fields: id (class ID), name (class name).

Write an SQL query to combine all rows from the student table and the class table, returning student name (`student_name`), student age (`student_age`), class ID (`class_id`), and class name (`class_name`).