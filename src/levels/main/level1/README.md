# Basic Syntax - Querying - Full Table Query

## Tutorial

At the beginning of learning SQL, we need to understand some basic concepts, including databases, tables, SQL, select queries, and full table queries.

A database is a repository specifically designed to store and manage data. A database is like a large library that can store a vast amount of information. Within the library, we can set up various bookshelves, each representing a data table.

On each bookshelf, there are many books. Each row in a data table is like a book, and each column represents the attributes of that book, such as the book's title, publication date, and so on.

SQL (Structured Query Language) is a standardized language used to manage, manipulate, and query databases. It is widely used in various types of databases, such as MySQL, PostgreSQL, Oracle, Microsoft SQL Server, etc. In this tutorial series, we will introduce SQL query learning using generic SQL syntax.

SQL syntax is simple and easy to learn. It uses a structure similar to natural language, making it convenient for developers and database administrators to operate and manage databases. Whether it's a website application, enterprise software, or large-scale data system, SQL is the foundation and core of database operations.

How do we use SQL to query data from a database?

First, we need to understand select queries, which is like searching for books we are interested in from the library. We can use select queries to retrieve the desired information from data tables, just like finding the books we want to read through the library catalog.

There are many syntaxes for select queries. In this section, we will learn the simplest and most direct **Full Table Query**.

When we use the SQL statement `select * from table_name`, it is performing a full table query. It returns all rows from the data table, allowing us to comprehensively understand the data in the table.




## Example

Let's assume there is a table named `student`, which stores student information, including student ID, name, and age.

Now, let's use the select full table query statement to view the contents of the entire student table.

Table `student`: 


| Student ID | Name | Age |
| ---- | ---- | ---- |
| 101  | John Smith | 20   |
| 102  | Emily Johnson | 22   |
| 103  | Michael Brown | 21   |
| 104  | Emma Davis | 19   |




SQL query statement:

```sql
select * from student;
```



Query result:

| Student ID | Name | Age |
| ---- | ---- | ---- |
| 101  | John Smith | 20   |
| 102  | Emily Johnson | 22   |
| 103  | Michael Brown | 21   |
| 104  | Emma Davis | 19   |




With the above SQL query statement, we have obtained all student information from the student table. Isn't it simple?

Now, try to complete the exercises below~



## Exercise

Please write an SQL query statement to retrieve all student information from the table named `student` .
