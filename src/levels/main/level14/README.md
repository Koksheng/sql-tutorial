# Function - Date Functions

## Tutorial
In SQL, date functions are special functions used for handling date and time data. They allow us to manipulate and process date, time, and datetime data in queries, making time-related operations in databases more convenient and flexible.

Commonly used date functions include:

- DATE: Get the current date
- DATETIME: Get the current datetime
- TIME: Get the current time



## Example
Suppose there is an orders table `orders`, containing the following fields: `order_id` (order ID), `order_date` (order date), `order_time` (order time). The data is as follows:

| order_id | order_date  | order_time |
|---------|-------------|------------|
| 1       | 2023-08-01  | 12:30:45   |
| 2       | 2023-08-01  | 14:20:10   |
| 3       | 2023-08-02  | 09:15:00   |
| 4       | 2023-08-02  | 18:05:30   |



Using date functions to get the current date, current datetime, and current time:

```sql
-- Get the current date
SELECT DATE() AS current_date;

-- Get the current datetime
SELECT DATETIME() AS current_datetime;

-- Get the current time
SELECT TIME() AS current_time;
```



Query result:

> For comparison purposes, presented in the same table

| current_date | current_datetime       | current_time |
|--------------|------------------------|--------------|
| 2023-08-01   | 2023-08-01 14:30:00    | 14:30:00     |



> Note that the date, datetime, and time here are generated based on the current system time. The actual results may vary depending on the current time.



There are many other date functions, such as calculating the difference in days between two dates, getting the milliseconds corresponding to the current date, etc. You can refer to them as needed in practical applications, and they won't be discussed here.


## Question

Suppose there is a student table `student`, containing the following fields: name (`name`), age (`age`).

Write an SQL query to display the names (`name`) of all students along with the current date (`column name as "Current_Date"`).