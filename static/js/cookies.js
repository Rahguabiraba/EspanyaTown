//Declaración de variables
let id = document.getElementById("iduser");
let usuario = document.getElementById("user");
let correo = document.getElementById("email");
let imagelogin = document.getElementById("logon");
const user = getCookie("username");
const mail = getCookie("correo");


//Verificar si existe la cookie
if (usuario.value != "" || correo.value != "") {
  document.cookie = "iduser=" + id.value;
  document.cookie = "username=" + usuario.value;
  document.cookie = "correo=" + correo.value;
  imagelogin.style.display = "block";
}

//Si la cookie existe, entonces mostramos el icono del login
if (user != "" || mail != "") {
  imagelogin.style.display = "block";
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
