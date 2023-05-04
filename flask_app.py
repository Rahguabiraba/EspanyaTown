from flask import Flask,render_template, request, redirect, url_for
from conexionBBDD import registrarPelicula, registrarUsuario, validarUsuario, validarPassword

app = Flask(__name__)

#Ruta para abrir pagina Inicial
@app.route("/")
def paginaInicio():
    return render_template("index.html")

#Ruta para abrir pagina de Login
@app.route("/login")
def paginaLogin():
    if request.args.get("data"):
        alert = request.args.get("data")
        return render_template("login.html",data=alert)
    else :
        return render_template("login.html")

#Ruta para registrar datos de usuario
@app.route("/registrarUsuario", methods=["GET","POST"])
def registrarUser():
    try:
        if request.method == 'POST':
            registrarUsuario(request)
            return redirect(url_for("paginaInicio"))
        else:
            return render_template("login.html")
    except:
        return render_template("login.html")
    
#Ruta para validar Usuario
@app.route("/loginUsuario", methods=["GET","POST"])
def validarUser():
    try:
        if request.method == 'POST':
            datos = validarUsuario(request)
            if datos == "404" :
                alert = "¡Usuario o contraseña incorrecto!"
                return redirect(url_for("paginaLogin",data=alert))
            else :
                usuario = list(datos[0])
                return redirect(url_for("paginaFormulario",iduser=usuario[0],username=usuario[1],email=usuario[2]))
        else:
            return render_template("login.html")
    except:
        return render_template("login.html")

#Ruta para validar Usuario
@app.route("/cambiarPassword", methods=["GET","POST"])
def validarPass():
    try:
        if request.method == 'POST':
            datos = validarPassword(request)
            if datos == "404" :
                alert = "¡Las contraseñas no son iguales!"
                return redirect(url_for("resetpass",data=alert))
            else :
                return redirect(url_for("paginaLista",data=datos))
        else:
            return render_template("resetpass.html")
    except:
        return render_template("resetpass.html")
    
#Ruta para abrir pagina formulario
@app.route("/formulario", methods=['GET'])
def paginaFormulario():
    if request.args.get("iduser"):
        idusuario = request.args.get("iduser")
        usuario = request.args.get("username")
        correo = request.args.get("email")
        return render_template("form.html",id=idusuario,user=usuario,email=correo)
    else:
        return render_template("form.html")

#Ruta para enviar Datos del Formulario a la base de datos
@app.route("/enviarDatosPeli", methods=["GET","POST"])
def registrarPeli():
    try:
        if request.method == 'POST':
            #Enviamos los datos del formulario a nuestra base de datos
            genero = registrarPelicula(request)
            alert = "¡Registro Finalizado!"
            return redirect(url_for("paginaLista",data=alert,genero=genero))
        else:
            return render_template("form.html")
    except:
        return render_template("form.html")

#Ruta para abrir pagina de Listado de Peliculas
@app.route("/lista", methods=["GET", "POST"])
def paginaLista():
    if request.args.get("genero"):
        genero = request.args.get("genero")
        return render_template("list.html",genero=genero)
    else:
        return render_template("list.html")

#Ruta para abrir pagina de Acerca de
@app.route("/acerca_de")
def paginaAcercaDe():
    return render_template("about.html")

#Ruta para abrir pagina Informaciones de Usuario
@app.route("/informacionUsuario")
def infoUser():
    return render_template("userinfo.html")

#Ruta para abrir pagina Inicial
@app.route("/cambiarContrasenya")
def resetpass():
        if request.args.get("data"):
            alert = request.args.get("data")
            return render_template("resetpass.html",data=alert)
        else: 
            return render_template("resetpass.html")
        
# app.config['TEMPLATES_AUTO_RELOAD'] = True
# app.run(host='localhost', port=3000, debug=True)

