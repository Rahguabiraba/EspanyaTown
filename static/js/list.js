function buttonDrop1() {
  $("#boton1-drop").toggleClass("drop-rotate");
  $("#drop1-descripcion").toggleClass("drop-active");
}

function buttonDrop2() {
  $("#boton2-drop").toggleClass("drop-rotate");
  $("#drop2-descripcion").toggleClass("drop-active");
}

function buttonDrop3() {
  $("#boton3-drop").toggleClass("drop-rotate");
  $("#drop3-descripcion").toggleClass("drop-active");
}

function backIndex() {
  window.location.replace("index.html");
}

// Recuperamos el modal
var modal = document.getElementById("myModal");

// Recuperamos el botón que va abrir el modal
var btn = document.getElementById("myBtn");

// Recuperamos el Spam que va cerrar el modal
var span = document.getElementsByClassName("close")[0];

// Cuando clicamos sobre el boton, se abrirá el modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Cuando clicamos sobre el spam, el modal cerrará
span.onclick = function () {
  modal.style.display = "none";
};

// Cuando clicamos sobre el span, el modal cerrará
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Cogemos el dato de la variable y imprimimos en el alert
let mensaje = document.getElementById("alert");

if (mensaje.value != "") {
  alert(mensaje.value);
}