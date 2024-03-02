# Basic Syntax - Query - Conditional Query - Null Values

## Tutorial

In databases, sometimes certain fields of a data table may have no value, which is represented as a NULL value.

A NULL value indicates that the value of the field is unknown, nonexistent, or has not been filled in. In SQL queries, we can use "IS NULL" and "IS NOT NULL" to determine whether a field is NULL or not NULL.

Application scenarios of NULL values: Suppose you are an exam teacher, and the data in the table is like the exam scores of your students. When a student does not take the exam or the score is not yet available, their exam score is NULL. You can use "IS NULL" to find students who have not taken the exam and "IS NOT NULL" to find students who have scores.



## Example

Suppose there is a table named `employees`, which stores employee information including employee name (`name`), age (`age`), and hire date (`hire_date`):

Table `employees` ：

|   name   | age | hire_date  |
|----------|-----|------------|
|   John   |  25 | 2020-01-01 |
|   Alice  |  30 | 2020-02-15 |
|   Bob    |  28 |   NULL     |
|   Kate   | NULL| 2020-03-20 |

Now, let's use "IS NULL" to query employees whose hire date is not filled in:

```sql
-- SQL query statement
select name, age from employees where hire_date is null;
```

Query result:

| name | age  |
| ---- | ---- |
| Bob | 28   |



## Exercise

Please write a SQL query statement to select the names (`name`), ages (`age`), and scores (`score`) of all students from the `student` table, where the student age is not NULL.