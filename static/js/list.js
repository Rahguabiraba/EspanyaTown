window.onload = function () {
    //Recuperamos cada celda de la tabla
    const boton_drop = document.querySelectorAll(".boton-drop");

    //Para cada celda, añadimos el listener
    for (let i = 0; i < boton_drop.length; i++) {
      boton_drop[i].addEventListener("click", mostrarDescripcion);
    }
}

function mostrarDescripcion(e) {
  let button = e.target;
  let descripcion = button.parentElement.nextElementSibling;

  button.classList.toggle("drop-rotate");
  descripcion.classList.toggle("drop-active");
}
