# Basic Syntax - Query - Alias

## Tutorial

An alias is a temporary, more readable name given to columns in a data table or fields in query results, making the query results more intuitive and easier to read.


Let's understand "alias" with an analogy: Suppose you are a team leader, and your team has many members, each with their own name. To better manage the team, you decide to give each member a nickname, making communication within the team more convenient. This nickname is an "alias". It does not change the members' real information, but provides a convenient name for internal team communication.


In SQL queries, we can use the alias syntax `{original_field_name} as {alias}` to give a more understandable name to the columns in the query results. By using aliases, we can more intuitively understand the meaning of each column in the query results, making it easier to read and use.


## Example

Suppose there is a table named `employees`, which stores information about team members, including name, age, and position:

Table `employees`：

|   name   | age | position      |
|----------|-----|---------------|
|   John   | 30  | Project Manager|
|   Alice  | 28  | Software Engineer|
|   Bob    | 32  | Product Designer|
|   Kate   | 26  | Marketing Specialist|

Now, let's use "alias" to get the names (`name`) and positions (`position`) of all team members, and alias them as `Employee Name` and `Position Name`:

```sql
-- SQL query statement
select name as 'Employee Name', position as 'Position Name' from employees;
```

> The as keyword in the above code can also be omitted, such as `name Employee Name` is also valid.



The query result: 

|   Employee Name   | Position Name            |
|---------------|-------------------|
|   John        | Project Manager    |
|   Alice       | Software Engineer  |
|   Bob         | Product Designer   |
|   Kate        | Marketing Specialist |



Through the above SQL query statement, we get the names and positions of all team members in the team member list table, and make the query results more readable and intuitive through aliases.



## Exercise

Please write a SQL query statement to select the names (name) and ages (age) of all students from the `student` data table, and alias them as `StudentName` and `StudentAge`.

