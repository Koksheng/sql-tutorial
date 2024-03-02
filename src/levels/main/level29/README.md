# Advanced Query - Window Functions - row_number

## Tutorial


The Row_Number window function in SQL is used to assign a **unique consecutive ranking** to each row in the query result set.

Unlike the Rank function discussed earlier, the Row_Number function assigns a unique integer value to each row, regardless of whether ties (same sorting values) exist. Each row is assigned a unique row number, starting from 1 and incrementing continuously.

The syntax for the Row_Number window function is almost identical to the Rank function:

```sql
ROW_NUMBER() OVER (
  PARTITION BY column1, column2, ... -- Optional, specifies the grouping columns
  ORDER BY column3 [ASC|DESC], column4 [ASC|DESC], ... -- Specifies the sorting columns and order
) AS row_number_column
```

Here, the `PARTITION BY` clause is optional and is used to specify grouping columns to partition the result set. The `ORDER BY` clause is used to specify sorting columns and their order, determining the sorting rules for calculating Row_Number. `AS row_number_column` specifies the alias for the generated row number column.


## Example
Suppose we have an `orders` table orders with the following data:

| order_id | customer_id | order_date | total_amount |
|----------|-------------|------------|--------------|
| 1        | 101         | 2023-01-01 | 200          |
| 2        | 102         | 2023-01-05 | 350          |
| 3        | 101         | 2023-01-10 | 120          |
| 4        | 103         | 2023-01-15 | 500          |



Now, let's say we want to rank each customer's orders by total amount in descending order and assign a row number to each order.

```sql
SELECT 
    order_id, 
    customer_id, 
    order_date, 
    total_amount,
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY total_amount DESC) AS row_number
FROM
    orders;
```



The result will be:

| order_id | customer_id | order_date | total_amount | row_number |
| -------- | ----------- | ---------- | ------------ | ---------- |
| 4        | 103         | 2023-01-15 | 500          | 1          |
| 2        | 102         | 2023-01-05 | 350          | 1          |
| 1        | 101         | 2023-01-01 | 200          | 1          |
| 3        | 101         | 2023-01-10 | 120          | 2          |



In the above example, we use the Row_Number window function to rank each customer's orders by total amount in descending order and assign a number to each order (row_number). We partition the result set by customer_id and order by total_amount in descending order.


## Question
Suppose we have a student table `student` with the following fields: `id` (student ID), `name` (student name), `age` (student age), `score` (score), `class_id` (class ID).

Write an SQL query to return the detailed information of each student (in the same order as the original table) and assign a number (row_number) to each student within each class in descending order of scores.