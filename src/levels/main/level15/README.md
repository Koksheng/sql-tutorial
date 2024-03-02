# Function - String Functions

## Tutorial
In SQL, string functions are used to manipulate text data. They allow us to perform various operations on strings, such as converting case, calculating string length, searching, and replacing substrings. String functions help us process and transform strings in the database to meet different needs.


## Example
Suppose there is an employee table `employees`, containing the following fields: `id` (employee ID), `name` (employee name). The data is as follows:

| id | name       |
|----|------------|
| 1  | John       |
| 2  | Bob        |
| 3  | Alice      |
| 4  | Kate       |




1）Using the string function `UPPER` to convert names to uppercase:

```sql
-- Convert names to uppercase
SELECT name, UPPER(name) AS upper_name
FROM employees;
```

Query result:

| name       | upper_name |
|------------|------------|
| John       | JOHN       |
| Bob        | BOB        |
| Alice      | ALICE      |
| Kate       | KATE       |



2）Using the string function `LENGTH` to calculate the length of names:

```sql
-- Calculate the length of names
SELECT name, LENGTH(name) AS name_length
FROM employees;
```

Query result:

| name       | name_length |
|------------|-------------|
| John       | 4           |
| Bob        | 3           |
| Alice      | 5           |
| Kate       | 4           |



3）Using the string function `LOWER` to convert names to lowercase:

```sql
-- Convert names to lowercase
SELECT name, LOWER(name) AS lower_name
FROM employees;
```

Query result:

| name       | lower_name |
| --------   | ---------- |
| John       | john       |
| Bob        | bob        |
| Alice      | alice      |
| Kate       | kate       |



## Question

Suppose there is a student table `student`, containing the following fields: `id` (student ID), `name` (name). Write an SQL query to filter out students with the name 'Harry', and display their ID (`id`), name (`name`), and their uppercase name (`upper_name`).
