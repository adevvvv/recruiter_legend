-- Проверяем существование базы данных db_users
SELECT 'CREATE DATABASE db_recruiter_legend' WHERE NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'db_recruiter_legend');