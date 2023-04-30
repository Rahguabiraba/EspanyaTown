//activar el botón de alta
let button = document.getElementById("confirmarcontrasenya");

button.onclick = confirmarContrasenya;

function confirmarContrasenya() {
  //recuperar los datos del forumario
  let newpass = document.getElementById("nueva_contrasenya");
  let confirmpass = document.getElementById("confirm_contrasenya");

  //validar los datos (opcionalmente)
  if (newpass.value == "" || confirmpass.value == "") {
    alert("Todos los datos son obligatorios");
  }
}

const iduser = getCookie("iduser");
let inputuser = document.getElementById("iduser");

//Poner el valor del id en el input
inputuser.value = iduser;

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

//Cogemos el dato de la variable y imprimimos en el alert
let mensaje = document.getElementById("alert");

if (mensaje.value != "") {
  alert(mensaje.value);
}
