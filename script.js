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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}