# Basic Syntax - Truncation and Offset

## Tutorial

Let's introduce truncation and offset with a metaphor.

Imagine you have a to-do list with many tasks on it. When you only want to view a few tasks at a time, what would you do?

1) You can use your finger to cover up the parts you don't want to see (truncation).

2) You can directly jump to the desired location based on the task number (offset).



In SQL, we use the `LIMIT` keyword to achieve data truncation and offset.

A typical application scenario for truncation and offset is pagination, where users can view only part of the data at a time based on page numbers.



## Example
Suppose there is a table named `tasks`, which stores to-do list information including task names (`task_name`) and due dates (`due_date`).

Table `tasks`：

|    task_name   | due_date  |
|----------------|-----------|
|  Complete report | 2023-08-05|
|  Schedule doctor's appointment | 2023-08-08|
|  Buy gifts      | 2023-08-10|
|  Plan a trip    | 2023-08-15|



Now, let's use the `LIMIT` keyword to perform pagination:

```sql
-- LIMIT followed by only one integer, indicating the number of records to be truncated (how many to retrieve at once)
select task_name, due_date from tasks limit 2;

-- LIMIT followed by 2 integers, indicating the starting position and how many records to retrieve at once
select task_name, due_date from tasks limit 2, 2;
```



Query 1 result, retrieves only 2 records:

|   task_name   | due_date  |
|---------------|-----------|
|  Complete report | 2023-08-05|
|  Schedule doctor's appointment | 2023-08-08|



Query 2 result, retrieves 2 records starting from index 2 (the 3rd task):

|   task_name   | due_date  |
|---------------|-----------|
|  Buy gifts      | 2023-08-10|
|  Plan a trip    | 2023-08-15|



Through the above SQL queries, we respectively selected the first two tasks and the following two tasks from the to-do list, achieving data truncation and offset.



## Exercise

Please write a SQL query statement to select the student names (`name`) and ages (`age`) from the `student` table, sorted by age in ascending order, retrieving information for 3 students starting from the second data entry.