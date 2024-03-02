# Grouping Aggregates - HAVING Clause

## Tutorial
In SQL, the HAVING clause is used to filter groups after grouping and aggregation. It allows us to filter the grouped results based on specific conditions, retaining only the groups that meet certain criteria.

The difference between the HAVING clause and the WHERE clause for conditional queries lies in the timing of filtering: the WHERE clause filters **before grouping**, while the HAVING clause filters **after grouping**.


## Example
Suppose there is an orders table `orders`, containing the following fields: `order_id` (order ID), `customer_id` (customer ID), `amount` (order amount). The data is as follows:

| order_id | customer_id | amount |
|---------|-------------|--------|
| 1       | A001        | 100    |
| 2       | A002        | 200    |
| 3       | A001        | 150    |
| 4       | A003        | 50     |



1）Use the HAVING clause to query customers with more than 1 order:

```sql
SELECT customer_id, COUNT(order_id) AS order_num
FROM orders
GROUP BY customer_id
HAVING COUNT(order_id) > 1;
```

Query result:

| customer_id | order_num |
| ----------- | --------- |
| A001        | 2         |



2）Use the HAVING clause to query customers with a total order amount exceeding 100:

```sql
-- Query customers with a total order amount exceeding 100
SELECT customer_id, SUM(amount) AS total_amount
FROM orders
GROUP BY customer_id
HAVING SUM(amount) > 100;
```

Query result:

| customer_id | total_amount |
| ----------- | ------------ |
| A001        | 250          |
| A002        | 200          |



## Question

Suppose there is a student table `student`, containing the following fields: `id` (student ID), `name` (name), `class_id` (class ID), `score` (score). Write an SQL query to calculate the class ID (`class_id`) and the total score (`total_score`) for each class in the student table where the total score exceeds 150 points.