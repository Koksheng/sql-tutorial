# Advanced Query - Window Functions - sum over

## Tutorial
In SQL, window functions are powerful tools for querying data. They allow us to perform calculations on grouped data while **retaining detailed information about the original rows**.

Window functions can be combined with aggregate functions (such as SUM, AVG, COUNT, etc.), but unlike regular aggregate functions, window functions do not reduce the number of rows in the result set.

Think of window functions as a "magnifying glass" that allows us to focus on a specific group while still seeing the overall picture.

In this section, we'll discuss the first window function: sum over.

The syntax of this function is:

```sql
SUM(column_name) OVER (PARTITION BY group_column_name)
```



## Example
Suppose we have an orders table `orders` with the following data:

| order_id | customer_id | order_date | total_amount |
|----------|-------------|------------|--------------|
| 1        | 101         | 2023-01-01 | 200          |
| 2        | 102         | 2023-01-05 | 350          |
| 3        | 101         | 2023-01-10 | 120          |
| 4        | 103         | 2023-01-15 | 500          |



Now, let's say we want to calculate the total amount of each customer's orders and display the details of each order.

The SQL query would look like this:

```sql
SELECT 
    order_id, 
    customer_id, 
    order_date, 
    total_amount,
    SUM(total_amount) OVER (PARTITION BY customer_id) AS customer_total_amount
FROM
    orders;
```



The result of the query would be:

| order_id | customer_id | order_date  | total_amount | customer_total_amount |
|----------|-------------|-------------|--------------|-----------------------|
| 1        | 101         | 2023-01-01  | 200          | 320                   |
| 3        | 101         | 2023-01-10  | 120          | 320                   |
| 2        | 102         | 2023-01-05  | 350          | 350                   |
| 4        | 103         | 2023-01-15  | 500          | 500                   |



In the above example, we use the window function SUM to calculate the total amount of each customer's orders (customer_total_amount) and partition the data by customer_id. As you can see from the first two rows, the window function retains the details of the original orders while calculating the total amount for each customer.


## Question
Suppose we have a student table `student` with the following fields: `id` (student ID), `name` (student name), `age` (student age), `score` (score), `class_id` (class ID).

Write an SQL query to return the detailed information of each student (in the same order as the original table) and calculate the average score of each class (class_avg_score).