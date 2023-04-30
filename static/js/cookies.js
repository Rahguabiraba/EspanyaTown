let usuario = document.getElementById("user")
let correo = document.getElementById("email")
let imagelogin = document.getElementById("logon")

if (usuario.value != "" || correo.value != "") {
  document.cookie = "username=" + usuario.value;
  document.cookie = "correo=" + correo.value;
} 


//Verificar si existe la cookie
let user = getCookie("username");
let mail = getCookie("correo");

//Si la cookie existe, entonces mostramos el icono del login
if (user != "" || mail != "") {
  imagelogin.style.display = "block"
} 


function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}