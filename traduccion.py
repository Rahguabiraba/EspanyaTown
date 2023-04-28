from googletrans import Translator

listaEspanyol = ["Inicio", #Caracteres del MENU
                 "Login",
                 "Acerca de",
                 "¡Justo lo que", #Caracteres del INDEX 
                 "ME GUSTA!",
                 "¿Quieres saber cómo encontrar tu película perfecta? ¿Qué te parece si te paso un listado? ¡Complete el formulario y reciba una muestra gratis!",
                 "COMENZAR",
                 "¿Tu nombre?", #Caracteres del FORM
                 "SIGUIENTE",
                 "VOLVER",
                 "¿Tu edad?",
                 "Seleccione el genero que más te gusta",
                 "Acción",
                 "Aventura",
                 "Comedia",
                 "Drama",
                 "Suspense",
                 "Comedia Romantica",
                 "Musical",
                 "¿Quieres añadir algún comentario?",
                 "Enviar",
                 "Lista de Peliculas", #Caracteres del LIST
                 "Nuestro proyecto", #Caracteres del ABOUT
                 "Desenvolvido por Ramon Guabiraba",
                 "Versión 1.0",
                 "Registrarse", #Caracteres del LOGIN
                 "Nombre de Usuario",
                 "Correo Electrónico",
                 "Contraseña",
                 "Entrar"
                 ]

translator = Translator()

listaChina = []
for caracteres in listaEspanyol:
    palabraChina = translator.translate(caracteres, src='es', dest='zh-cn')
    listaChina.append(palabraChina.text)

print(listaChina)

