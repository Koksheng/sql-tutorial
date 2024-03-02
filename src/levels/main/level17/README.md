# Grouping Aggregates - Single Field Grouping

## Tutorial
In SQL, grouping aggregates is an operation to classify data and perform aggregate calculations on each category. It allows us to group data by specified columns or fields and then apply aggregate functions such as COUNT, SUM, AVG, etc., to obtain summary results for each group.

For example, a school can group students by class and then perform statistics on each class. We can find out how many students are in each class and the average score of each class. This way, we can have an overall understanding of the student situation in each class, rather than just looking at individual student information.

In SQL, the `GROUP BY` keyword is typically used to group data.


## Example
Suppose there is an orders table `orders`, containing the following fields: `order_id` (order ID), `customer_id` (customer ID), `amount` (order amount). The data is as follows:

| order_id | customer_id | amount |
|---------|-------------|--------|
| 1       | A001        | 100    |
| 2       | A002        | 200    |
| 3       | A001        | 150    |
| 4       | A003        | 50     |



1）Using grouping aggregates to query the customer ID for each order:

```sql
SELECT customer_id
FROM orders
GROUP BY customer_id;
```

Query result:

| customer_id |
| ----------- |
| A001        |
| A002        |
| A003        |



2）Using grouping aggregates to query the number of orders for each customer:

```sql
SELECT customer_id, COUNT(order_id) AS order_num
FROM orders
GROUP BY customer_id;
```

Query result:

| customer_id | order_num |
| ----------- | --------- |
| A001        | 2         |
| A002        | 1         |
| A003        | 1         |



## Question

Suppose there is a student table `student`, containing the following fields: `id` (student ID), `name` (name), `class_id` (class ID), `score` (score). Write an SQL query to calculate the class ID (`class_id`) and the average score (`avg_score`) for each class in the student table.