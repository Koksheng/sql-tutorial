# Basic Syntax - Query - Select Query

## Tutorial

The select query is the most basic type of query in SQL. It is used to select **specific columns or fields** from a data table and returns only the data values of these columns.


The SQL syntax for a select query is `SELECT {column_name...}`, which tells the database which columns' data we want to view.


Let's understand the select query with an analogy: Imagine you are a class manager, and your class has a student roster table containing information such as name, age, gender, and score for each student. Now, you want to know the names and ages of the students in your class because this information helps you better understand each student's basic profile. So, you simply need to pick out the name and age columns from the student roster table.




## Example
Suppose there is a student data table named `students`, which stores information about students in the class, including name, age, gender, and score.


Table `students`:

|   name   | age | gender | score |
|----------|-----|--------|-------|
|   John   | 18  |   Male |  90   |
|   Alice  | 17  | Female |  88   |
|   Bob    | 19  |   Male |  78   |
|   Kate   | 18  | Female |  95   |



Now, let's use a "select query" to retrieve the names and genders of all students. The SQL statement is as follows:

```sql
select name, gender from students;
```



Query result: 

|   name   | gender |
|----------|--------|
|   John   |   Male |
|   Alice  | Female |
|   Bob    |   Male |
|   Kate   | Female |



With the above SQL query statement, we obtained the names and genders of all students from the student roster table.



## Exercise

Please write an SQL query statement to select the names (`name`) and ages (`age`) of all students from the data table named `student`.

Note that the **order of data column output must be consistent with the requirements of the exercise**! For example, in this exercise, the student's name (`name`) must come first, followed by age (`age`).
