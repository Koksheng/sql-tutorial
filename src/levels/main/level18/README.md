# Grouping Aggregates - Multiple Field Grouping


## Tutorial
Sometimes, single-field grouping may not meet our needs. For example, if we want to count the number of students in each class for each exam in a school, we can use multiple-field grouping.

The implementation of multiple-field grouping is almost the same as single-field grouping, using the `GROUP BY` syntax.


## Example
Suppose there is an orders table `orders`, containing the following fields: `order_id` (order ID), `product_id` (product ID), `customer_id` (customer ID), `amount` (order amount). The data is as follows:

| order_id | product_id | customer_id | amount |
|---------|-------------|--------|---------|
| 1       | 1      | A001        | 100    |
| 2       | 1      | A002        | 200    |
| 3       | 1      | A001        | 150    |
| 4       | 1      | A003        | 50     |
| 5 | 2 | A001 | 50 |



To query the total amount of **each product** purchased by **each customer**, we need to group by both customer ID and product ID:

```sql
-- Query the total amount of each product purchased by each customer, grouped by customer ID and product ID
SELECT customer_id, product_id, SUM(amount) AS total_amount
FROM orders
GROUP BY customer_id, product_id;
```



Query result:

| customer_id | product_id | total_amount |
| ----------- | ---------- | ------------ |
| A001        | 1          | 250          |
| A001        | 2          | 50           |
| A002        | 1          | 200          |
| A003        | 1          | 50           |



## Question

Suppose there is a student table `student`, containing the following fields: `id` (student ID), `name` (name), `class_id` (class ID), `exam_num` (number of exams taken), `score` (score). Write an SQL query to calculate the class ID (`class_id`), the number of exams (`exam_num`), and the total number of students (`total_num`) for each class in the student table.
