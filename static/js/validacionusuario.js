function validacionUsuario() {

  //recuperar los datos del forumario
  let email = document.getElementById("emailLogin");
  let contrasenya = document.getElementById("passwordLogin");

  //validar los datos (opcionalmente)
  if (
    email.value == "" ||
    contrasenya.value == ""
  ) {
    alert("Todos los datos son obligatorios");
  } 
}

//Cogemos el dato de la variable y imprimimos en el alert
let mensaje = document.getElementById("alert");

if (mensaje.value != "") {
  alert(mensaje.value);
}
