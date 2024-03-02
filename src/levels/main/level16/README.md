# Function - Aggregate Functions

## Tutorial

In SQL, aggregate functions are a special type of functions used to perform **summary calculations** on a dataset. They allow us to perform operations such as counting, summing, averaging, finding the maximum, and finding the minimum of a set of data. Aggregate functions are often used in conjunction with the GROUP BY clause in SELECT statements to summarize and analyze grouped data.

Commonly used aggregate functions include:

- COUNT: Count the number of rows or non-null values in a specified column.
- SUM: Calculate the sum of values in a specified column.
- AVG: Calculate the average value of values in a specified column.
- MAX: Find the maximum value in a specified column.
- MIN: Find the minimum value in a specified column.


## Example
Suppose there is an orders table `orders`, containing the following fields: `order_id` (order ID), `customer_id` (customer ID), `amount` (order amount). The data is as follows:

| order_id | customer_id | amount |
|---------|-------------|--------|
| 1       | A001        | 100    |
| 2       | A002        | 200    |
| 3       | A001        | 150    |
| 4       | A003        | 50     |



1）Using the aggregate function `COUNT` to calculate the total number of orders in the orders table:

```sql
SELECT COUNT(*) AS order_num
FROM orders;
```

Query result:

| order_num |
| --------- |
| 4         |



2）Using the aggregate function `COUNT(DISTINCT column_name)` to calculate the number of distinct customers in the orders table:

```sql
SELECT COUNT(DISTINCT customer_id) AS customer_num
FROM orders;
```

Query result: 

| customer_num |
| ------------ |
| 3            |



3）Using the aggregate function `SUM` to calculate the total order amount:

```sql
SELECT SUM(amount) AS total_amount
FROM orders;
```

Query result:

| total_amount |
| ------------ |
| 500          |



## Question

Suppose there is a student table `student`, containing the following fields: `id` (student ID), `name` (name), `class_id` (class ID), `score` (score). Write an SQL query to summarize the total score (`total_score`), average score (`avg_score`), maximum score (`max_score`), and minimum score (`min_score`) of all students in the student table.