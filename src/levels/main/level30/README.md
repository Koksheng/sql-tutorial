# Advanced Query - Window Functions - lag / lead

## Tutorial
The window functions Lag and Lead are used to retrieve values from rows that are **before or after the current row**, respectively. These functions are particularly useful when comparing adjacent row data or performing time-series analysis.

1) **Lag Function**

The Lag function is used to retrieve the value of a column from **before the current row**. It helps us to examine data from the previous row.

The syntax for the Lag function is as follows:

```sql
LAG(column_name, offset, default_value) OVER (PARTITION BY partition_column ORDER BY sort_column)
```

Parameters:

- `column_name`: The name of the column from which to retrieve the value.
- `offset`: Specifies the number of rows to move up. For example, an offset of 1 retrieves the value from the previous row, an offset of 2 retrieves the value from two rows ago, and so on.
- `default_value`: An optional parameter used to specify a default value when there is no previous row.
- `PARTITION BY` and `ORDER BY` clauses are optional and are used to group and sort the data.



2）Lead Function

The Lead function is used to retrieve the value of a column from **after the current row**. It helps us to examine data from the next row.

The syntax for the Lead function is as follows:

```sql
LEAD(column_name, offset, default_value) OVER (PARTITION BY partition_column ORDER BY sort_column)
```

Parameters:

- `column_name`: The name of the column from which to retrieve the value.
- `offset`: Specifies the number of rows to move down. For example, an offset of 1 retrieves the value from the next row, an offset of 2 retrieves the value from two rows ahead, and so on.
- `default_value`: An optional parameter used to specify a default value when there is no subsequent row.
- `PARTITION BY` and `ORDER BY` clauses are optional and are used to group and sort the data.



## Example

Consider a scores table `scores` containing student scores and exam dates:

| student_id | exam_date  | score |
| ---------- | ---------- | ----- |
| 101        | 2023-01-01 | 85    |
| 101        | 2023-01-05 | 78    |
| 101        | 2023-01-10 | 92    |
| 101        | 2023-01-15 | 80    |



Suppose we want to query the exam dates for each student along with the previous and next exam scores. Here's an example SQL query:

```sql
SELECT 
    student_id,
    exam_date,
    score,
    LAG(score, 1, NULL) OVER (PARTITION BY student_id ORDER BY exam_date) AS previous_score,
    LEAD(score, 1, NULL) OVER (PARTITION BY student_id ORDER BY exam_date) AS next_score
FROM
    scores;
```

The result will be:

| student_id | exam_date  | score | previous_score | next_score |
| ---------- | ---------- | ----- | -------------- | ---------- |
| 101        | 2023-01-01 | 85    | NULL           | 78         |
| 101        | 2023-01-05 | 78    | 85             | 92         |
| 101        | 2023-01-10 | 92    | 78             | 80         |
| 101        | 2023-01-15 | 80    | 92             | NULL       |

In this example, we use the Lag function to get the previous exam score for each student (previous_score) and the Lead function to get the next exam score for each student (next_score). If there is no previous or next exam, the corresponding column will display NULL.



## Question
Suppose we have a student table `student` with the following fields: `id` (student ID), `name` (student name), `age` (student age), `score` (score), `class_id` (class ID).

Write an SQL query to return the detailed information of each student (in the same order as the original table) and retrieve the name of the previous top student (`prev_name`) and the name of the next top student (`next_name`) within each class in descending order of scores.
