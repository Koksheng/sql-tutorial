# Advanced Query - Subquery

## Tutorial
A subquery is a query **nested** within another complete query inside a database. The inner query is referred to as the subquery. Subqueries can be used to obtain more complex query results or to filter data.

When executing a query statement that contains a subquery, the database engine first executes the subquery and then uses its result as a condition or data source to execute the outer query.

To illustrate, think of a subquery like a box within a box. The outer query is the big box, and the inner query is the small box. When executing the query, we first open the small box to get the result and then put the result of the small box into the big box for further processing.



## Example
Suppose we have two tables: `orders` and `customers`, which contain order and customer information, respectively.

Orders table:

| order_id | customer_id | order_date | total_amount |
|----------|-------------|------------|--------------|
| 1        | 101         | 2023-01-01 | 200          |
| 2        | 102         | 2023-01-05 | 350          |
| 3        | 101         | 2023-01-10 | 120          |
| 4        | 103         | 2023-01-15 | 500          |



customers 表：

| customer_id | name     | city       |
|-------------|----------|------------|
| 101         | Alice    | New York   |
| 102         | Bob      | Los Angeles|
| 103         | Charlie  | Chicago    |



Now, suppose we want to query the names of customers and their total order amounts for customers whose total order amount is greater than 200. The SQL example is as follows:

```sql
-- Outer Query
SELECT name, total_amount
FROM customers
WHERE customer_id IN (
    -- Subquery
    SELECT DISTINCT customer_id
    FROM orders
    WHERE total_amount > 200
);
```



In the above SQL, we first filter out the customer IDs that meet the condition from the orders table through the subquery. Then, we retrieve customer information from the customer information table based on the customer IDs. This approach reduces the amount of customer information queried.

The result of the above query:

| name    | total_amount |
| ------- | ------------ |
| Bob     | 350          |
| Charlie | 500          |




## Question
Suppose we have a student table `student` with the following fields: `id` (student ID), `name` (student name), `age` (student age), `score` (score), `class_id` (class ID). There is also a class table `class` with the following fields: `id` (class ID), `name` (class name).

Write an SQL query to retrieve all data of students who belong to corresponding classes using a subquery. Return the fields: student name (`name`), score (`score`), and class ID (`class_id`).
