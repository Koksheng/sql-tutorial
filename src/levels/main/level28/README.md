# Advanced Query - Window Functions - rank

## Tutorial
In this section, we will learn about a new window function called Rank.

The Rank window function in SQL is used to **rank** rows in the result set. It assigns a rank to each row based on specified columns or expressions. During ranking, rows with the same value are assigned the same rank, and different values are assigned different ranks.

> When there are ties (same sorting values), Rank will skip the subsequent ranks and keep the same rank.

A common usage of the Rank window function is to find the top N rows or the highest-ranked rows in a query result.

The syntax for the Rank window function is as follows:

```sql
RANK() OVER (
  PARTITION BY column1, column2, ... -- Optional, specifies the grouping columns
  ORDER BY column3 [ASC|DESC], column4 [ASC|DESC], ... -- Specifies the sorting columns and order
) AS rank_column
```

Here, the `PARTITION BY` clause is optional and is used to specify grouping columns to partition the result set. The `ORDER BY` clause is used to specify sorting columns and their order, determining the sorting rules for calculating Rank. `AS rank_column` specifies the alias for the generated Rank column.


## Example
Suppose we have an orders table `orders` with the following data:

| order_id | customer_id | order_date | total_amount |
|----------|-------------|------------|--------------|
| 1        | 101         | 2023-01-01 | 200          |
| 2        | 102         | 2023-01-05 | 350          |
| 3        | 101         | 2023-01-10 | 120          |
| 4        | 103         | 2023-01-15 | 500          |



Now, let's say we want to rank each customer's orders by total amount in descending order and display the details of each order.

```sql
SELECT 
    order_id, 
    customer_id, 
    order_date, 
    total_amount,
    RANK() OVER (PARTITION BY customer_id ORDER BY total_amount DESC) AS customer_rank
FROM
    orders;
```



The query result will be:

| order_id | customer_id | order_date | total_amount | customer_rank |
| -------- | ----------- | ---------- | ------------ | ------------- |
| 1        | 101         | 2023-01-01 | 200          | 1             |
| 3        | 101         | 2023-01-10 | 120          | 2             |
| 2        | 102         | 2023-01-05 | 350          | 1             |
| 4        | 103         | 2023-01-15 | 500          | 1             |



In the above example, we use the Rank window function to rank each customer's orders by total amount in descending order (customer_rank). We partition the result set by customer_id and order by total_amount in descending order.

As seen from the example, the window function retains the details of the original orders while calculating the rank of each customer's orders.


## Question

Suppose we have a student table `student` with the following fields: `id` (student ID), `name` (student name), `age` (student age), `score` (score), `class_id` (class ID).

Write an SQL query to return the detailed information of each student (in the same order as the original table) and calculate the ranking of students within each class in descending order of scores (ranking).
