//activar el botón de alta
let button = document.getElementById("altagenero");
button.onclick = altaGenero;

function altaGenero() {

  //recuperar los datos del forumario
  let nombre = document.getElementById("name");
  let correo = document.getElementById("motivo");
  let edad = document.getElementById("edad");
  let genero = document.getElementById("generos_list");

  //validar los datos (opcionalmente)
  if (
    nombre.value == "" ||
    correo.value == "" ||
    edad.value == "" ||
    genero.value == "" 
  ) {
    alert("Todos los datos son obligatorios");
  } 
}
