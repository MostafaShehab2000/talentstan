# PostgreSQL Setup Guide

Your local PostgreSQL instance (version 17) requires initial configuration before we can run the database migrations for TalentStan.

## Current Status
- **PostgreSQL Installed:** ✅ Yes (`C:\Program Files\PostgreSQL\17`)
- **talentstan User:** ❌ Not Found
- **talentstan Database:** ❌ Not Found

## Required Action
Please execute the following commands using `psql`. If you do not have `psql` in your global PATH, use the full path: `& "C:\Program Files\PostgreSQL\17\bin\psql.exe" -U postgres`.

### Step 1: Create Database and User
Open your PowerShell or Command Prompt and run the following commands, pressing Enter after each one. When prompted, enter your root `postgres` password.

```sql
CREATE USER talentstan WITH PASSWORD 'talentstan';
ALTER USER talentstan CREATEDB;
CREATE DATABASE talentstan OWNER talentstan;
```

### Step 2: Validate the Environment Variables
A `.env.example` and a `.env.local` file have been generated in your workspace (`D:\talentstan`).
The Django application is now configured to load database credentials directly from `.env.local`.

If you decide to use a different password than `'talentstan'`, please update `DB_PASSWORD` inside the `.env.local` file.

### Step 3: Run Migrations
Once the database is created, you can verify connectivity by running:
```powershell
python manage.py check
```
If this passes, you can execute migrations:
```powershell
python manage.py makemigrations
python manage.py migrate
```
