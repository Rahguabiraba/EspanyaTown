window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealTop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

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
  window.location.replace("index.html")
}

// Recuperamos el modal
var modal = document.getElementById("myModal");

// Recuperamos el botón que va abrir el modal
var btn = document.getElementById("myBtn");

// Recuperamos el Spam que va cerrar el modal
var span = document.getElementsByClassName("close")[0];

// Cuando clicamos sobre el boton, se abrirá el modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando clicamos sobre el spam, el modal cerrará
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando clicamos sobre el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}