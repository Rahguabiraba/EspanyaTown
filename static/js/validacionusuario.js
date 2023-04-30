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
