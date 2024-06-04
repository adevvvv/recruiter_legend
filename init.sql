-- Проверяем существование базы данных db_users
SELECT 'CREATE DATABASE db_users' WHERE NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'db_users');

-- Создаем таблицу пользователей в базе данных db_users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role VARCHAR(20) NOT NULL
);