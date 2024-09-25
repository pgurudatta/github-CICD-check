import sqlite3

def get_user(username):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    query = "SELECT * FROM users WHERE username = '" + username + "';"
    cursor.execute(query)
    user = cursor.fetchone()
    conn.close()
    return user

username = input("Enter username: ")
user = get_user(username)
print(user)

