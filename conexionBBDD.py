import sqlite3 as sql


def registrarPelicula(request):
    # Pasamos la respuesta del formulario a una variable
    respuesta = request.form

    # Pasar las informaciones del formulario a las variables
    nombre = respuesta['nombre']
    correo = respuesta['correo']
    edad = respuesta['edad']
    genero = respuesta['genero']
    comentario = respuesta['comentario']

    try:
        conector = sql.connect("database/cinema.db")
        cursor = conector.cursor()
        cursor.execute(f"INSERT INTO formulario (nombre,correo,edad,genero,comentarios) VALUES ('{nombre}','{correo}','{edad}','{genero}','{comentario}')")
        conector.commit()
        conector.close()
        return
    except Exception as ex:
        print(ex)
