# Advanced Query - Window Functions - sum over order by

## Tutorial
In the previous tutorial, we learned about the sum over window function and how it can be used for group statistics.

In this section, we'll explore another usage of the sum over function: sum over order by, which allows us to perform **cumulative sum** within groups.

The syntax for this usage is:

```sql
SUM(column_name) OVER (PARTITION BY group_column_name ORDER BY order_column ASC/DESC)
```



Here's an example scenario: A teacher takes attendance in each class one by one. As each student is called, the teacher keeps a running total of the scores of the students already called.


## Example
Suppose we have an orders table `orders` with the following data:

| order_id | customer_id | order_date | total_amount |
|----------|-------------|------------|--------------|
| 1        | 101         | 2023-01-01 | 200          |
| 2        | 102         | 2023-01-05 | 350          |
| 3        | 101         | 2023-01-10 | 120          |
| 4        | 103         | 2023-01-15 | 500          |



Now, let's say we want to calculate the cumulative total amount of each customer's orders and display the details of each order.

```sql
SELECT 
    order_id, 
    customer_id, 
    order_date, 
    total_amount,
    SUM(total_amount) OVER (PARTITION BY customer_id ORDER BY order_date ASC) AS cumulative_total_amount
FROM
    orders;
```



The result will be:

| order_id | customer_id | order_date  | total_amount | cumulative_total_amount |
|----------|-------------|-------------|--------------|-------------------------|
| 1        | 101         | 2023-01-01  | 200          | 200                     |
| 3        | 101         | 2023-01-10  | 120          | 320                     |
| 2        | 102         | 2023-01-05  | 350          | 350                     |
| 4        | 103         | 2023-01-15  | 500          | 500                     |



In the above example, we use the SUM window function to calculate the cumulative total amount of each customer's orders (cumulative_total_amount), partitioned by customer_id, and ordered by order_date in ascending order. As you can see from the first two rows of the result, the window function retains the details of the original orders while calculating the cumulative total amount for each customer.


## Question
Suppose we have a student table `student` with the following fields: `id` (student ID), `name` (student name), `age` (student age), `score` (score), `class_id` (class ID).

Write an SQL query to return the detailed information of each student (in the same order as the original table) and calculate the cumulative sum of scores for each class in ascending order of scores (class_sum_score).
