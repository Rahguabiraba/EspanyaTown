const language = getCookie("language");
//Declaramos todos los elementos de textos en variables
let menu_inside_inicio = document.getElementById("menu_inside_inicio");
let menu_inside_login = document.getElementById("menu_inside_login");
let menu_inside_about = document.getElementById("menu_inside_about");
let menu_inside_datos = document.getElementById("menu_inside_datos");
let menu_inside_pass = document.getElementById("menu_inside_pass");
let menu_inside_delete = document.getElementById("menu_inside_delete");
let menu_outside_inicio = document.getElementById("menu_outside_inicio");
let menu_outside_login = document.getElementById("menu_outside_login");
let menu_outside_about = document.getElementById("menu_outside_about");
let menu_outside_datos = document.getElementById("menu_outside_datos");
let menu_outside_pass = document.getElementById("menu_outside_pass");
let menu_outside_delete = document.getElementById("menu_outside_delete");
let titulo = document.getElementById("titulo");

if (language == "es") {
    menu_inside_inicio.childNodes[0].data = "Inicio";
    menu_inside_login.childNodes[0].data = "Login";
    menu_inside_about.childNodes[0].data = "Acerca de";
    menu_inside_datos.childNodes[0].data = "Datos Usuario";
    menu_inside_pass.childNodes[0].data = "Cambiar Contraseña";
    menu_inside_delete.childNodes[0].data = "Salir";
    menu_outside_inicio.childNodes[0].data = "Inicio";
    menu_outside_login.childNodes[0].data = "Login";
    menu_outside_about.childNodes[0].data = "Acerca de";
    menu_outside_datos.childNodes[0].data = "Datos Usuario";
    menu_outside_pass.childNodes[0].data = "Cambiar Contraseña";
    menu_outside_delete.childNodes[0].data = "Salir";
    titulo.childNodes[0].data = "Lista de Peliculas";
} 

//Función para coger la cookie como un string
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
