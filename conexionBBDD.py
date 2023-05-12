import sqlite3 as sql
import os


def registrarPelicula(request):
    # Pasamos la respuesta del formulario a una variable
    respuesta = request.form

    # Pasar las informaciones del formulario a las variables
    nombre = respuesta['nombre']
    motivo = respuesta['motivo']
    edad = respuesta['edad']
    genero = respuesta['genero']
    comentario = respuesta['comentario']

    try:
        ruta = os.getcwd()
        conector = sql.connect(f"{ruta}/database/cinema.db")
        cursor = conector.cursor()
        cursor.execute(
            f"INSERT INTO formulario (nombre,motivo,edad,genero,comentarios) VALUES ('{nombre}','{motivo}','{edad}','{genero}','{comentario}')")
        conector.commit()
        conector.close()
        return genero
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
        ruta = os.getcwd()
        conector = sql.connect(f"{ruta}/database/cinema.db")
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
        ruta = os.getcwd()
        conector = sql.connect(f"{ruta}/database/cinema.db")
        cursor = conector.cursor()
        cursor.execute(f"SELECT * FROM usuarios WHERE email='{email}'")
        datos = cursor.fetchall()
        conector.commit()
        conector.close()
        
        #Creamos el codigo de error
        codigo = "404"
        if len(datos) > 0 :
            if datos[0][3] == password:
                return datos
            else :
                return codigo
        else :
            return codigo
        
    except Exception as ex:
        print(ex)

def validarPassword(request):
        # Pasamos la respuesta del formulario a una variable
    respuesta = request.form

    # Pasar las informaciones del formulario a las variables
    iduser = respuesta['iduser']
    newpass = respuesta['nueva_contrasenya']
    confirmpass = respuesta['confirm_contrasenya']

    if newpass == confirmpass:
        try:
            ruta = os.getcwd()
            conector = sql.connect(f"{ruta}/database/cinema.db")
            cursor = conector.cursor()
            cursor.execute(f"UPDATE usuarios SET contrasenya='{newpass}' WHERE iduser='{iduser}'")
            conector.commit()
            conector.close()
            alert = "¡Contraseña cambiada correctamente!"
            return alert
        except Exception as ex:
            print(ex)
    else:
        codigo = "404"
        return codigo
