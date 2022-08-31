CREATE TABLE Users(
id INT PRIMARY KEY,
name VARCHAR (255) NOT NULL,
email VARCHAR (100) NOT NULL UNIQUE
);

INSERT INTO Users(id, name, email) 
VALUES("01", "Luana", "luana@email.com"),
	("02", "Vinicius", "vinicius@email.com"),
    ("03", "Laura", "laura@email.com");
    
SELECT * FROM Users;
SELECT * FROM Users WHERE name LIKE "%a%";
SELECT * FROM Users WHERE name NOT LIKE "%r%" and email LIKE "%u%";

INSERT INTO Users
VALUES("04", "Yuzo", "yuzo@lbn.com");

SELECT * FROM Users;

DELETE FROM Users WHERE id = "04";

SELECT * FROM Users;

SELECT id AS identifier, name FROM Users



