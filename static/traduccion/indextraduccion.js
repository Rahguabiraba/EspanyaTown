let buttonEspanyol = document.getElementById("es-btn");
let buttonChino = document.getElementById("ch-btn");
const language = getCookie("language");
buttonEspanyol.addEventListener("click", traduccion);
buttonChino.addEventListener("click", traduccion);

changeEspanyol();

function traduccion(e) {
  let button = e.target;
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
  let index_titulo = document.getElementById("index_titulo");
  let index_span = document.getElementById("index_span");
  let index_p = document.getElementById("index_p");
  let index_register = document.getElementById("index_register");

  //Si el botón pulsado es en español
  if (button.childNodes[0].data == "ES") {
    document.cookie = "language=es";
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
    index_titulo.childNodes[0].data = "¡Justo lo que";
    index_span.childNodes[0].data = "ME GUSTA!";
    index_p.childNodes[0].data =
      "¿Quieres saber cómo encontrar tu película perfecta? ¿Qué te parece si te paso un listado? ¡Complete el formulario y reciba una muestra gratis!";
    index_register.childNodes[0].data = "COMENZAR";
  } else if (button.childNodes[0].data == "中文") {
    document.cookie = "language=";
    menu_inside_inicio.childNodes[0].data = "开始";
    menu_inside_login.childNodes[0].data = "登录";
    menu_inside_about.childNodes[0].data = "关于";
    menu_inside_datos.childNodes[0].data = "用户数据";
    menu_inside_pass.childNodes[0].data = "更改密码";
    menu_inside_delete.childNodes[0].data = "出去";
    menu_outside_inicio.childNodes[0].data = "开始";
    menu_outside_login.childNodes[0].data = "登录";
    menu_outside_about.childNodes[0].data = "关于";
    menu_outside_datos.childNodes[0].data = "用户数据";
    menu_outside_pass.childNodes[0].data = "更改密码";
    menu_outside_delete.childNodes[0].data = "出去";
    index_titulo.childNodes[0].data = "就是";
    index_span.childNodes[0].data = "我特别喜欢!";
    index_p.childNodes[0].data =
      "如果你想知道自己最喜欢的电影，就可以怎么做呢? 如果你恨想，请填写表格以接受电影列表。";
    index_register.childNodes[0].data = "开始填写";
  }
}

function changeEspanyol() {
    //Si el botón pulsado es en español
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
      index_titulo.childNodes[0].data = "¡Justo lo que";
      index_span.childNodes[0].data = "ME GUSTA!";
      index_p.childNodes[0].data =
        "¿Quieres saber cómo encontrar tu película perfecta? ¿Qué te parece si te paso un listado? ¡Complete el formulario y reciba una muestra gratis!";
      index_register.childNodes[0].data = "COMENZAR";
    }
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
