# Basic Syntax - Query - Distinct

## Tutorial
In a data table, there may be duplicate records. However, if we want to filter out duplicate records and only keep distinct records, we can use the deduplication feature of SQL.

In SQL, we can use the `DISTINCT` keyword to achieve deduplication.

For example, imagine you are a class monitor and you want to list all the different students in the class without caring about how many times they appear. In this case, you can use deduplication.



## Example
Suppose there is a table named `students`, which stores student information including student name (`name`), class ID (`class_id`), exam number (`exam_num`), and score (`score`):

Table `students`：

|   name   | class_id | exam_num | score |
|----------|----------|----------|-------|
|   John   |   1      | 1        | 90    |
|   Alice  |   2      | 2        | 85    |
|   Bob    |   1      | 1        | 92    |
|   Alice  |   2      | 3        | 88    |



Now, let's use the `DISTINCT` keyword to find out the different class IDs:

```sql
-- SQL query statement
select distinct class_id from students;
```



Query result:

| class_id |
|----------|
|   1      |
|   2      |



In addition to deduplication based on a single field, the DISTINCT keyword also supports deduplication based on combinations of multiple fields, ensuring that the combination of multiple fields is unique.

The syntax for this is as follows:

```sql
distinct field1, field2, field3, ...
```



## Exercise

Please write a SQL query statement to select all unique combinations of class ID (`class_id`) and exam number (`exam_num`) from the `student` table.
