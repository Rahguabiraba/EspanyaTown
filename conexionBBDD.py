import sqlite3

try:
    conector = sqlite3.connect("database/cinema")
    cursor = conector.cursor()
    cursor.execute("CREATE TABLE prueba (nombre VARCHAR(50), edad INTEGER)")
except Exception as ex:
    print(ex)