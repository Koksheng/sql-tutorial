# Advanced Query - Subquery - Exists

## Tutorial
In the previous tutorial, we learned that a subquery is a powerful tool for querying, allowing us to nest one query within another to perform more complex conditional filtering and data retrieval.

One special type of subquery is the "exists" subquery, used to check whether there are records that satisfy certain conditions in the result set of the main query. It returns a boolean value (True or False) rather than actual data.



## Example
Suppose we have two tables: `orders` and `customers`, containing order and customer information, respectively.

Orders table:

| order_id | customer_id | order_date | total_amount |
|----------|-------------|------------|--------------|
| 1        | 101         | 2023-01-01 | 200          |
| 2        | 102         | 2023-01-05 | 350          |
| 3        | 101         | 2023-01-10 | 120          |
| 4        | 103         | 2023-01-15 | 500          |



Customers table:

| customer_id | name    | city        |
| ----------- | ------- | ----------- |
| 101         | Alice   | New York    |
| 102         | Bob     | Los Angeles |
| 103         | Charlie | Chicago     |
| 104         | Darren  | China       |



Now, suppose we want to query the names and order amounts of customers who have **placed orders**.

Using the exists subquery, the SQL code is as follows:

```sql
-- Outer Query
SELECT name, total_amount
FROM customers
WHERE EXISTS (
    -- Subquery
    SELECT 1
    FROM orders
    WHERE orders.customer_id = customers.customer_id
);
```



In the above statement, we first iterate over each row of the customer information table to get the customer ID. Then, we execute the subquery to check whether this customer ID exists in the orders table. If it exists, we return the result.

The result of the query is as follows:

| name   | total_amount |
|--------|--------------|
| Alice  | 200          |
| Bob    | 350          |
| Charlie| 500          |



The opposite of exists is not exists, which is used to find records that do not meet the existence condition.


## Question

Suppose we have a student table `student` with the following fields: `id` (student ID), `name` (student name), `age` (student age), `score` (score), `class_id` (class ID). There is also a class table `class` with the following fields: `id` (class ID), `name` (class name).

Write an SQL query to retrieve all data of students who **do not belong to any corresponding classes** using exists subquery. Return the fields: student name (`name`), age (`age`), and class ID (`class_id`).
