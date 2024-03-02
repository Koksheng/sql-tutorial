

# Advanced Query - Compound Query

## Tutorial
In SQL, a compound query is an operation that merges the results of multiple SELECT queries.

There are two common compound query operations: UNION and UNION ALL.

1. UNION operation: It is used to combine the result sets of two or more queries and **remove duplicate rows**. That is, if two queries have the same row, only one row is retained.

2. UNION ALL operation: It is also used to combine the result sets of two or more queries, **but it does not remove duplicate rows**. That is, if two queries have the same row, all rows are retained.



## Example
Suppose we have two tables: `table1` and `table2`, containing employee information from different departments.

table1 ：

| emp_id | name     | age | department |
|--------|----------|-----|------------|
| 101    | Alice    | 25  | HR         |
| 102    | Bob      | 28  | Finance    |
| 103    | Charlie  | 22  | IT         |



table2 ：

| emp_id | name  | age  | department |
| ------ | ----- | ---- | ---------- |
| 101    | Alice | 25   | HR         |
| 201    | David | 27   | Finance    |
| 202    | Eve   | 24   | HR         |
| 203    | Frank | 26   | IT         |



Now, let's merge the data from these two tables, performing UNION and UNION ALL operations separately.

UNION operation:

```sql
SELECT name, age, department
FROM table1
UNION
SELECT name, age, department
FROM table2;
```



The result of the UNION operation, removing duplicate rows (name Alice):

| name    | age | department |
|---------|-----|------------|
| Alice   | 25  | HR         |
| Bob     | 28  | Finance    |
| Charlie | 22  | IT         |
| David   | 27  | Finance    |
| Eve     | 24  | HR         |
| Frank   | 26  | IT         |



UNION ALL operation

```sql
-- UNION ALL operation
SELECT name, age, department
FROM table1
UNION ALL
SELECT name, age, department
FROM table2;
```



The result is as follows, retaining duplicate rows:

| name    | age  | department |
| ------- | ---- | ---------- |
| Alice   | 25   | HR         |
| Bob     | 28   | Finance    |
| Charlie | 22   | IT         |
| Alice   | 25   | HR         |
| David   | 27   | Finance    |
| Eve     | 24   | HR         |
| Frank   | 26   | IT         |



## Question

Suppose we have a student table `student` with the following fields: `id` (student ID), `name` (student name), `age` (student age), `score` (score), `class_id` (class ID). There is also a new student table `student_new` with the same fields as the student table.

Write an SQL statement to retrieve the student name (`name`), age (`age`), score (`score`), and class ID (`class_id`) fields from both the student table and the new student table, retaining duplicate student records.
