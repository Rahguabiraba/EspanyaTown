from flask import Flask,render_template, request, redirect, url_for
from conexionBBDD import registrarPelicula

app = Flask(__name__)

@app.route("/")
def paginaInicio():
    return render_template("index.html")

@app.route("/login")
def paginaLogin():
    return render_template("login.html")

@app.route("/formulario", methods=['GET'])
def paginaFormulario():
    return render_template("form.html")

@app.route("/enviarDatosPeli", methods=["GET","POST"])
def registrarPeli():
    try:
        if request.method == 'POST':
            registrarPelicula(request)
            return redirect(url_for("paginaLista"))
        else:
            return render_template("form.html")
    except:
        return render_template("form.html")

@app.route("/lista", methods=["GET", "POST"])
def paginaLista():
    return render_template("list.html")

@app.route("/acerca_de")
def paginaAcercaDe():
    return render_template("about.html")

app.config['TEMPLATES_AUTO_RELOAD'] = True
app.run(host='localhost', port=3000, debug=True)

