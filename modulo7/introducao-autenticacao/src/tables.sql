-- Active: 1663287797891@@35.226.146.116@3306@hooks-4313469-maximiliano-araujo
CREATE TABLE IF NOT EXISTS Authorization_users (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)