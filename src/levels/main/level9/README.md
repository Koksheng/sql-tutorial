# Basic Syntax - Query - Conditional Query - Logical Operations

## Tutorial

Logical operations are operators used in conditional queries to combine multiple conditions to filter data that meets specific criteria.

In logical operations, commonly used operators are:


- AND: Represents logical AND, requiring that multiple conditions must be satisfied to return true.
- OR: Represents logical OR, requiring that any one of the conditions must be satisfied to return true.
- NOT: Represents logical NOT, used to negate a condition (originally true, but becomes false after using not).



## Example
Suppose there is a table named `employees`, which stores employee information including employee name (`name`), age (`age`), and salary (`salary`):

Table `employees`：

| name     | age  | salary |
| ----     | ---- | ------ |
| Addison  | 25   | 10000  |
| Adelaide | 30   | 12000  |
| Adeline  | 28   | 15000  |
| John     | 22   | 8000   |



Now, let's use logical operations to find employees whose names contain the keyword "ad" **and** age is less than 30:

```sql
-- SQL query statement
select name, age, salary from employees where name like '%ad%' and age < 30;
```



Query result:

| name     | age  | salary |
| ----     | ---- | ------ |
| Addison  | 25   | 10000  |
| Adeline  | 28   | 15000  |



In the above query statement, we use the logical AND operation to obtain the employee information that meets the requirements.


## Exercise

Please write a SQL query statement to select the names (`name`) and scores (`score`) of all students from the `student` table, where the name (`name`) contains "ar" or the score (score) is greater than 500.