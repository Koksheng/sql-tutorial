# Basic Syntax - Query - Conditional Query - Fuzzy Query

## Tutorial

Fuzzy query is a special type of conditional query that allows us to search for data that matches specific patterns. It can be implemented using the LIKE keyword.

In LIKE fuzzy queries, we use wildcards to represent zero or multiple characters, allowing us to quickly find matching data.

There are 2 wildcards available:
- Percent sign (%) represents any sequence of zero or more characters.
- Underscore (_) represents any single character.

Application scenario of fuzzy query: Suppose you are a detective and you need to find the target based on partial clues. For example, you can search for the target based on keywords or characters contained in their name.



## Example

Suppose there is a table named `employees`, which stores employee information including employee name (`name`), age (`age`), and position (`position`):

Table `employees`：

|   name   | age | position       |
|----------|-----|----------------|
|   John   |  25 | Software Engineer |
|   Alice  |  30 | Data Analyst   |
|   Bob    |  28 | Product Manager|
|   Kate   |  22 | Software Test Engineer|



Now, let's use a LIKE fuzzy query to find employees whose names contain the keyword "John":

```sql
-- SQL query statement
select name, age, position from employees where name like '%John%';
```



Query result:

|   name   | age | position       |
|----------|-----|----------------|
|   John   |  25 | Software Engineer |



We can also use fuzzy queries to match the beginning and end:

```sql
-- Only query rows starting with "John"
select name, age, position from employees where name like 'John%';

-- Only query rows ending with "John"
select name, age, position from employees where name like '%John';
```



Similarly, we can use `not like` to query information that does not contain certain keywords.



## Exercise

Please write a SQL query statement to select the names (`name`) and scores (`score`) of all students from the `student` table, where the name (`name`) does not contain the letter "ar".