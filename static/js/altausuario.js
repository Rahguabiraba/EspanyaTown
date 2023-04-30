//activar el botón de alta
let button = document.getElementById("altausuario");
button.onclick = altaUsuario;

function altaUsuario() {

  //recuperar los datos del forumario
  let usuario = document.getElementById("usuario");
  let email = document.getElementById("email");
  let contrasenya = document.getElementById("contrasenya");

  //validar los datos (opcionalmente)
  if (
    usuario.value == "" ||
    email.value == "" ||
    contrasenya.value == ""
  ) {
    alert("Todos los datos son obligatorios");
  } 
}
