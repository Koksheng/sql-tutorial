# Basic Syntax - Query - Constants and Operations

## Tutorial

"Constants and Operations" are important concepts in SQL for performing calculations and processing data. In SQL queries, constants refer to fixed numerical or text values (e.g., "1"), while operations involve mathematical calculations or string operations on these constants.


Through constants and operations, we can perform addition, subtraction, multiplication, division, average calculation, text concatenation, and other operations in query statements, thereby obtaining the desired query results.



## Example

Let's look at a specific SQL code and result example. Suppose there is a table named `orders`, which stores order information, including order ID (`order_id`), unit price (`unit_price`), and quantity (`quantity`):


Table `orders`：

|  order_id  | unit_price | quantity |
|------------|------------|----------|
|   1001     |   10.00    |   5      |
|   1002     |   20.00    |   3      |
|   1003     |   15.00    |   2      |
|   1004     |   25.00    |   4      |



Now, we need to calculate the total amount for each order (`total_amount`), which is the unit price (`unit_price`) multiplied by the quantity (`quantity`).


The SQL query statement is as follows:

```sql
select order_id, unit_price, quantity, unit_price * quantity as total_amount from orders;
```



The query result is as follows, where `total_amount` is the newly calculated column:

|  order_id  | unit_price | quantity | total_amount |
|------------|------------|----------|--------------|
|   1001     |   10.00    |   5      |   50.00      |
|   1002     |   20.00    |   3      |   60.00      |
|   1003     |   15.00    |   2      |   30.00      |
|   1004     |   25.00    |   4      |   100.00     |



Additionally, SQL can directly use constants as column names. For example, executing the following SQL statement:

```sql
select 200, 'basketball' as hobby;
```



The query result is as follows:

| 200  | hobby |
| :--- | :---- |
| 200  | basketball  |



## Exercise
Please write a SQL query statement to select the names (`name`) and scores (`score`) of all students from the `student` table, and additionally calculate the double of the scores (`double_score`).

