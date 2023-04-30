function buttonDrop() {
  $(".boton-drop").toggleClass("drop-rotate");
  $(".drop-descripcion").toggleClass("drop-active");
}

function buttonDrop2() {
  $("#boton2-drop").toggleClass("drop-rotate");
  $("#drop2-descripcion").toggleClass("drop-active");
}

function buttonDrop3() {
  $("#boton3-drop").toggleClass("drop-rotate");
  $("#drop3-descripcion").toggleClass("drop-active");
}

//Cogemos el dato de la variable y imprimimos en el alert
let mensaje = document.getElementById("alert");

if (mensaje.value != "") {
  alert(mensaje.value);
}