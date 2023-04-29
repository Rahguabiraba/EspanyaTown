from flask import Flask,render_template, request, redirect, url_for
from conexionBBDD import registrarPelicula, registrarUsuario, validarUsuario

app = Flask(__name__)

#Ruta para abrir pagina Inicial
@app.route("/")
def paginaInicio():
    return render_template("index.html")

#Ruta para abrir pagina de Login
@app.route("/login")
def paginaLogin():
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
            datosUsuario = validarUsuario(request)
            return redirect(url_for("paginaLista",user=datosUsuario))
        else:
            return render_template("login.html")
    except:
        return render_template("login.html")
    
#Ruta para abrir pagina formulario
@app.route("/formulario", methods=['GET'])
def paginaFormulario():
    return render_template("form.html")

#Ruta para enviar Datos del Formulario a la base de datos
@app.route("/enviarDatosPeli", methods=["GET","POST"])
def registrarPeli():
    try:
        if request.method == 'POST':
            #Enviamos los datos del formulario a nuestra base de datos
            registrarPelicula(request)
            alert = "¡Registro Finalizado!"
            return redirect(url_for("paginaLista",data=alert))
        else:
            return render_template("form.html")
    except:
        return render_template("form.html")

#Ruta para abrir pagina de Listado de Peliculas
@app.route("/lista", methods=["GET", "POST"])
def paginaLista():
    if request.args.get("data"):
        alert = request.args.get("data")
        return render_template("list.html",data=alert)
    elif request.args.get("user"):
        usuario = request.args.get("user")
        lista = list(usuario)
        print(lista)
        return render_template("list.html",user=usuario)
    else:
        return render_template("list.html")

#Ruta para abrir pagina de Acerca de
@app.route("/acerca_de")
def paginaAcercaDe():
    return render_template("about.html")

#Ruta para traducir paginas
@app.route("/traduccion",methods=["GET","POST"])
def traducirPaginas():
    try:
        if request.method == 'POST':
            #Enviamos los datos del formulario a nuestra base de datos
            registrarPelicula(request)
            alert = "¡Registro Finalizado!"
            return redirect(url_for("paginaLista",data=alert))
        else:
            return render_template("form.html")
    except:
        return render_template("form.html")

#Ruta para abrir pagina Informaciones de Usuario
@app.route("/informacionUsuario")
def infoUser():
    return render_template("userinfo.html")

#Ruta para abrir pagina Inicial
@app.route("/cambiarContrasenya")
def resetpass():
    return render_template("resetpass.html")

app.config['TEMPLATES_AUTO_RELOAD'] = True
app.run(host='localhost', port=3000, debug=True)

