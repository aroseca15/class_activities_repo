# MySQL

* Non-case sensitive, but long time convention says values lower case, commands and clauses upper case.
* End every statement with a ';'! This is NECESSARY.

## Commands
(Except Tables)

### CREATE DATABASE

```sql
CREATE DATABASE test_db;
```
This creates a database named 'test_db' on the server we run the query against. In order to create tables, we need to have a database first. If we want to flush an existing database and recreate it anew, we can do a:

```sql
DROP DATABASE IF EXISTS test_db;
CREATE DATABASE test_db;
```

which will delete the old database, if it exists, and then create a blank one. Note: We use the 'IF EXISTS' because this means the command works even if there is no 'test_db' database. If there is no 'test_db' database, the command `DROP DATABASE test_db` will throw an error.


### USE

You need to tell MySQL which database your query is referring to! We do this with:

```sql
USE test_db;
```

That means everything *after* this command will affect the 'test_db' database;

### SELECT

The most essential command is to get some data. In it's most basic form, it is as below.

```sql
SELECT * FROM <table>;
SELECT <columns> FROM <table>;
```

The first command is to get 'all columns' from the given <table>. For example, the command 
```sql
SELECT * FROM people;
```
will return all records from the people table. We call this return the 'result.set';


## Table Creation

### CREATE TABLE

```sql
CREATE TABLE example_table (
    -- COLUMNS GO HERE --
);
```
The most important part of creating our database is making our tables. Columns are created as so:
```sql
id INT AUTO_INCREMENT NOT NULL
--NAME TYPE MODIFIERS--
```

Important types:
```sql
INT -- Integers ---
VARCHAR(50) -- Text, up to 50 characters. Change the 50 to increase size limit --
BOOLEAN -- Booleans --
```

Important modifiers:
```sql
NOT NULL -- Rows cannot have a null value in this row --
DEFAULT 0 -- If nothing supplied on upsertion, default value is supplied to the row --
AUTO_INCREMENT PRIMARY KEY -- Our ID magic --
```

### Starting Table

If you are gonna make a table, this should be your starting point:

```sql
CREATE TABLE rename_me (
  id INT AUTO_INCREMENT NOT NULL,
  -- Add Columns Here -- 
  
  PRIMARY KEY (id)
);
```

## Important Clauses

Clauses are modifiers you can add to commands!


### WHERE

The WHERE clause is used to filter records. The WHERE clause is used to extract only those records that fulfill a specified condition.

```sql
SELECT *
FROM table_name
WHERE condition;
```

|Operator	|Description|
|-----|-----|
| =	| Equal	|
| > | 	Greater than | 	
| <	| Less than	|
| >=	| Greater than or equal |	
| <= |	Less than or equal	 |
| <>	| Not equal. Note: In some versions of SQL this operator may be written as !=	 |
| BETWEEN	| Between a certain range	|
| LIKE | Search for a pattern	|
| IN |	To specify multiple possible values for a column |