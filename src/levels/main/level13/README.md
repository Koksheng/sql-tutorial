# Basic Syntax - Conditional Branching

## Tutorial

Conditional branching `case when` is a syntax in SQL used to branch processing based on conditions. It is similar to if-else conditional statements in other programming languages, allowing us to select different results based on different conditions.

Using `case when`, we can dynamically generate new columns or transform existing columns in query results based on specific conditions.

For example: Suppose you are a waiter in a restaurant, and customers order different dishes. You need to determine the service method based on the dishes ordered by the customers. If a customer orders fish, you will serve them with utensils and service suitable for eating fish; if a customer orders steak, you will use utensils and service suitable for steak. `case when` is like the process of choosing different service methods based on the dishes ordered by the customers.



## Example
Suppose there is a student table `student`, which contains the following fields: `name` (name) and `age` (age). The data is as follows:

|   name   | age |
|----------|-----|
|   John   |  18 |
|   Bob    |  19 |
|   Alice  |  20 |
|   Kate   |  20 |



Using conditional branching `case when` to determine if the student can rap based on their name, and alias it as `can_rap`.

Example SQL:

```sql
SELECT
  name,
  CASE WHEN (name = 'Bob') THEN 'Yes' ELSE 'No' END AS can_rap
FROM
  student;
```



Query result:

| name  | can_rap |
|-------|---------|
|   John   |  No |
|   Bob    |  Yes |
|   Alice  |  No |
|   Kate   |  No |



`case when` supports specifying multiple branches simultaneously. The syntax is as follows:

```sql
CASE WHEN (condition1) THEN result1
	   WHEN (condition2) THEN result2
	   ...
	   ELSE other_result END
```



## Exercise

Suppose there is a student table `student`, which contains the following fields: name (`name`) and age (`age`). Write a SQL query to classify students into three age levels (`age_level`) based on their age: "Senior Age Classmate" (Senior Age Classmate) for those above 60 years old, "Middle Age Classmate" (Middle Age Classmate) for those above 20 years old (excluding those above 60 years old), and "Junior Age Classmate" (Junior Age Classmate) for those 20 years old and below, or those without age information.

The result should include student names (`name`) and age levels (`age_level`), sorted in ascending order by name.