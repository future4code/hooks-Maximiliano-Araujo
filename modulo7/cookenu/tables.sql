-- Active: 1663287797891@@35.226.146.116@3306@hooks-4313469-maximiliano-araujo

Active: 1663287797891 @ @35.226.146.116 @3306 @hooks -4313469 - maximiliano - araujo --
 CREATE TABLE IF NOT EXISTS cookenu (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    name VARCHAR (255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS recipes (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);