# Basic Syntax - Query - Conditional Query - WHERE

## Tutorial

In the previous tutorials, we queried all rows of the table each time. But sometimes, we only want to retrieve specific data from the table. What to do in such cases?

This is where conditional querying comes into play. With conditional querying, you can filter out data rows from the database that **meet specific conditions**, instead of returning all data from the table.

The primary usage is to set filtering conditions in queries using the `WHERE` clause. Only the data rows that satisfy these conditions will be returned.

The syntax of the `WHERE` clause is as follows:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

Here, `column1, column2, ...` are the columns you want to select, which can be specific column names or `*` to select all columns. `table_name` is the name of the table from which you want to query data. `condition` specifies the query conditions, which can use comparison operators (e.g., `=`, `<`, `>`), logical operators (e.g., `AND`, `OR`), IN operator, LIKE operator, etc.



## Example

Let's look at a specific SQL code and result example. Suppose there is a table named `products`, which stores product information including product name (`name`), price (`price`), and stock (`stock`):

Table `products`：

|   name   | price | stock |
|----------|-------|-------|
|   A      | 10.00 |   50  |
|   B      | 20.00 |   30  |
|   C      | 15.00 |   20  |
|   D      | 25.00 |   10  |

Now, we use the "WHERE" clause to filter out products with stock less than or equal to 20:

```sql
-- SQL query statement
select name, price, stock from products where stock <= 20;
```



The query result is as follows:

|   name   | price | stock |
|----------|-------|-------|
|   C      | 15.00 |   20  |
|   D      | 25.00 |   10  |



Through the above SQL query statement, we filtered out products with stock less than or equal to 20, thereby obtaining the product information that meets the conditions.



## Exercise

Please write a SQL query statement to select the names (name) and scores (score) of all students from the `student` table, where the student name is 'Harry'.

