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

def registrarUsuario(request):
    # Pasamos la respuesta del formulario a una variable
    respuesta = request.form

    # Pasar las informaciones del formulario a las variables
    usuario = respuesta['usuario']
    email = respuesta['email']
    contrasenya = respuesta['contrasenya']

    try:
        conector = sql.connect("database/cinema.db")
        cursor = conector.cursor()
        cursor.execute(f"INSERT INTO usuarios (nombreUser,email,contrasenya) VALUES ('{usuario}','{email}','{contrasenya}')")
        conector.commit()
        conector.close()
        return
    except Exception as ex:
        print(ex)

def validarUsuario(request):
    # Pasamos la respuesta del formulario a una variable
    respuesta = request.form

    # Pasar las informaciones del formulario a las variables
    email = respuesta['emailLogin']
    password = respuesta['passwordLogin']

    try:
        conector = sql.connect("database/cinema.db")
        cursor = conector.cursor()
        cursor.execute(f"SELECT * FROM usuarios WHERE email='{email}'")
        datos = cursor.fetchall()
        conector.commit()
        conector.close()

        if len(datos) > 0 :
            if datos[0][3] == password:
                return datos
            else :
                return "Usuario o contraseña invalido"
        else :
            return "Usuario o contraseña invalido"
        
    except Exception as ex:
        print(ex)