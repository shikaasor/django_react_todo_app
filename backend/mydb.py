import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="postgres",
    user="postgres",
    password='lamis',
    port='5432',
)

conn.autocommit = True

cursor = conn.cursor()

cursor.execute("SELECT 1 FROM pg_database WHERE datname='todo'")
exists = cursor.fetchone()

if not exists:
    cursor.execute("create database todo")
    print("Database created successfully")
else:
    print("Database already exist")

conn.close()