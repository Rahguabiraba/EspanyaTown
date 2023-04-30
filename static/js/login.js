function userinfo() {
    location.replace("/informacionUsuario");
  }
  
  function resetpass() {
    location.replace("/cambiarContrasenya");
  }

  function deleteuser() {
    document.cookie = "username="
    document.cookie = "correo="
    location.replace("/lista");
  }
  