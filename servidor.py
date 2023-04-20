from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def paginaInicio():
    return render_template("index.html")

@app.route("/login")
def paginaLogin():
    return render_template("login.html")

@app.route("/formulario")
def paginaFormulario():
    return render_template("form.html")

@app.route("/lista")
def paginaLista():
    return render_template("list.html")

@app.route("/acerca_de")
def paginaAcercaDe():
    return render_template("about.html")

app.config['TEMPLATES_AUTO_RELOAD'] = True
app.run(host='localhost', port=3000, debug=True)

