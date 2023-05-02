//Funcion abrir la pagina de inicio del menu
function inicio() {
  location.replace("/");
}

function login() {
  location.replace("/login");
}

function form() {
  location.replace("/formulario");
}

function list() {
  location.replace("/lista");
}

function about() {
  location.replace("/acerca_de");
}

function abrirMenu() {
  // Utilizar variables
  icono = document.getElementById("menu");
  menu = document.getElementById("myNav");
  let links = document.getElementById("menu-inside");
  linea1 = document.getElementById("bar1");
  linea2 = document.getElementById("bar2");
  linea3 = document.getElementById("bar3");

  //Cambiamos el icono
  icono.classList.toggle("change");

  if (menu.style.width == "100%") {
    menu.style.width = "0%";
    links.style.display = "none";
  } else {
    menu.style.width = "100%";
    links.style.display = "block";
  }
}