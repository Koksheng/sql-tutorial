# Basic Syntax - Query - Conditional Query - Operators

## Tutorial

Operators are special symbols in SQL used for conditional judgment in conditional queries, such as `=`, `!=`, `<`, `>`, etc. By using different operators, we can set diverse conditions in query statements, thus flexibly filtering and selecting data based on different attributes.

Suppose you are a recruiter, and the data in the table is like the candidates you are interviewing. Different operators are like the different interview conditions you set. For example, you can use the "!=" operator to filter out candidates who do not meet certain conditions, use the ">" operator to select candidates with excellent performance, and use the "BETWEEN" operator to select candidates within a certain age range.



## Example

Let's look at a specific SQL code and result example. Suppose there is a table named `employees`, which stores employee information including employee name (`name`), age (`age`), and salary (`salary`):

Table `employees`：

|   name   | age | salary |
|----------|-----|--------|
|   John   |  25 |  5000  |
|   Alice  |  30 |  6000  |
|   Bob    |  28 |  5500  |
|   Kate   |  22 |  4500  |



Now, let's use different operators for conditional querying:

1) Using the "!=" operator to filter out employees whose name is not 'Kate':

```sql
-- SQL query statement
select name, age, salary from employees where name != 'Kate';
```

Query result:

|   name   | age | salary |
|----------|-----|--------|
|   John   |  25 |  5000  |
|   Alice  |  30 |  6000  |
|   Bob    |  28 |  5500  |



2) Using the ">" operator to filter out employees with a salary greater than 5500:

```sql
-- SQL query statement
select name, age, salary from employees where salary > 5500;
```

Query result:

|   name   | age | salary |
|----------|-----|--------|
|   Alice  |  30 |  6000  |



3) Using the "BETWEEN" operator to filter out employees whose age is between 25 and 30:

```sql
-- SQL query statement
select name, age, salary from employees where age between 25 and 30;
```

Query result: 

|   name   | age | salary |
|----------|-----|--------|
|   John   |  25 |  5000  |
|   Alice  |  30 |  6000  |
|   Bob    |  28 |  5500  |

Through the above SQL query statements, we can perform conditional queries based on different operators and obtain employee information that meets different conditions.



## Exercise

Please write a SQL query statement to select the names (name) and ages (age) of all students from the `student` table, where the student name is not equal to 'George'.

