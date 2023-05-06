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
let about_titulo = document.getElementById("about_titulo");
let about_parrafo = document.getElementById("about_parrafo");
let about_desen = document.getElementById("about_desen");
let about_version = document.getElementById("about_version");

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
    about_titulo.childNodes[0].data = "Nuestro proyecto";
    about_parrafo.childNodes[0].data = "El objetivo del proyecto es muy simple: ayudar a los chinos a enterarse un poco de la cultura occidental. Muchos chinos cuando que llegan a nuestro país ya tienen un objetivo muy claro. Muchos vienen a trabajo, estudios o simplemente vacaciones. Nosotros siempre partimos del presupuesto que aprender chino es difícil. Pero no paramos para pensar que para ellos entender nuestro idioma y cultura también cuesta. Entonces la idea es presentar nuestra cultura para los chinos de una forma diferente: utilizando películas de los más variados tipos.";
    about_desen.childNodes[0].data = "Desenvolvido por Ramon Guabiraba";
    about_version.childNodes[0].data = "Versión 1.0";
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
