// function buttonDrop() {
//   $(".boton-drop").toggleClass("drop-rotate");
//   $(".drop-descripcion").toggleClass("drop-active");
// }

// function activarEfecto(et) {

// 	//necesito localizar la etiqueta <tr> de la fila que contiene la celda pulsada
// 	let buttondrop = et.closest('.boton-drop')
//   let buttondescripcion = et.closest('.drop-descripcion')

//   buttondrop.classList.toggle("drop-rotate");
//   buttondescripcion.classList.toggle("drop-active");
// }

let buttonsdrop = document.getElementsByClassName("boton-drop");

for (let i=0;i<buttonsdrop.length;i++) {
  buttonsdrop[i].addEventListener("click",desplegarDescripcion)
}

function desplegarDescripcion(e) {
  let button = e.target;
  let descripcion = document.getElementById("drop-descripcion");
  button.nodeChildren.classList.toggle("drop-rotate");
  descripcion.classList.toggle("drop-active");
}

//Cogemos el dato de la variable y imprimimos en el alert
let mensaje = document.getElementById("alert");

if (mensaje.value != "") {
  alert(mensaje.value);
}
