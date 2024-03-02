# Basic Syntax - Query - Sorting

## Tutorial
When querying data, we sometimes want to sort the results based on the values of a certain field for better data visualization.

In SQL, we can use the `ORDER BY` keyword to achieve sorting. After `ORDER BY`, we specify the field by which we want to sort, and we can choose to sort in ascending (ASC) or descending (DESC) order.



## Example
Suppose we have a table named `students`, which stores student information including student name (`name`), age (`age`), and score (`score`):

Table `students` ：

|   name   | age | score |
|----------|-----|-------|
|   John   |  18 |  90   |
|   Alice  |  20 |  85   |
|   Bob    |  19 |  92   |
|   Kate   |  20 |  88   |


Now, let's use the `ORDER BY` keyword to sort the student table:

```sql
-- SQL query statement 1
select name, age from students order by age asc;

-- SQL query statement 2
select name, score from students order by score desc;
```



Query statement 1 result, sorted by age in ascending order:

|   name   | age |
|----------|-----|
|   John   |  18 |
|   Bob    |  19 |
|   Alice  |  20 |
|   Kate   |  20 |



Query statement 2 result, sorted by score in descending order:

|   name   | score |
|----------|-------|
|   Bob    |  92   |
|   John   |  90   |
|   Kate   |  88   |
|   Alice  |  85   |



In addition to sorting based on a single field, we can also sort based on combinations of multiple fields. When the values of the first field are the same, sorting is based on the values of the second field, and so on.

The syntax for this is as follows:

```sql
ORDER BY field1 [ASC/DESC], field2 [ASC/DESC], ...
```



## Exercise
Please write a SQL query statement to select student name (`name`), age (`age`), and score (`score`) from the `student` table. Sort the results first by score in descending order, and if the scores are the same, then sort by age in ascending order.
