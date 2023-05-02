//Declaración de variables para uso de la consulta a la API
const API_KEY = "fb58f15b056f0be58b18d8bc693ce131";
const BASE_URL = "https://api.themoviedb.org/3/genre/";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const username = getCookie("username");

//Generos que cogemos desde el formulario
let genero = document.getElementById("genero").value;
let contenedor = document.getElementById("contenedor");

//Variables para la funcion de 3 numeros aleatorios
var n = 0;
var numero = 0;
var uno = 0;
var dos = 0;
var tres = 0;

//Array de clave/valor con el id de cada uno de los generos de peliculas
const generos = {
  accion: 28,
  aventura: 12,
  comedia: 35,
  crime: 80,
  documentario: 99,
  drama: 18,
  familia: 10751,
  fantasia: 14,
  historia: 36,
  horror: 27,
  musica: 10402,
  misterio: 9648,
  romance: 10749,
};

//Creamos la URL de la api con base en los parametros
const API_URL =
  BASE_URL +
  generos[genero] +
  "/movies?api_key=" +
  API_KEY +
  "&language=es&include_adult=false&sort_by=created_at.asc";

//Realizamos la consulta con la API
fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    //Pasamos la informacion a una variable
    let peliculas = data.results;
    //Utilizamos la funcion con numeros aleatorios
    let ids = numerosAleatorios();

    let listadoPeliculas = [];

    if (user != "") {
      peliculas.forEach((movie) => {
        const { id, title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add("card");
        movieEl.innerHTML = `
        <div class="card-movies">
          <div class="card__banner">
            <div class="background">
              <div class="c-background">
                <div class="card__banner__content">
                  <div class="__content">
                    <p class="${getColor(vote_average)}">
                      ${vote_average}
                    </p>
                    <button class="__content--btn" id="myBtn" onclick="getTrailer(${id})">
                      Trailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="${IMG_URL + poster_path}"
              alt="Banner"
              class="banner"
            />
            <div class="drop">
              <i class="fas fa-chevron-circle-down boton-drop">
              </i>
            </div>
            <div class="card__descripcion drop-descripcion">
            <div class="c-card__descripcion">
                <div class="card__descripcion__texto">
                    <h1>${title}</h1>
                    <p>${overview}</p>
                </div>
            </div>
        </div>
          </div>
        </div>
        `;
        //Añadimos la pelicula al contenedor
        contenedor.appendChild(movieEl);
      });
    } else {
      for (let contador = 0; contador < 3; contador++) {
        //La lista de la API nos devuelve siempre 20 peliculas. Cogeremos 3 con la función
        listadoPeliculas.push(peliculas[ids[contador]]);
      }
      //Para cada peliculas, iremos coger las informaciones
      listadoPeliculas.forEach((movie) => {
        const { id, title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add("card");
        movieEl.innerHTML = `
        <div class="card-movies">
          <div class="card__banner">
            <div class="background">
              <div class="c-background">
                <div class="card__banner__content">
                  <div class="__content">
                    <p class="${getColor(vote_average)}">
                      ${vote_average}
                    </p>
                    <button class="__content--btn" id="myBtn" onclick="getTrailer(${id})">
                      Trailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="${IMG_URL + poster_path}"
              alt="Banner"
              class="banner"
            />
            <div class="drop">
              <i class="fas fa-chevron-circle-down boton-drop">
              </i>
            </div>
            <div class="card__descripcion drop-descripcion">
            <div class="c-card__descripcion">
                <div class="card__descripcion__texto">
                    <h1>${title}</h1>
                    <p>${overview}</p>
                </div>
            </div>
        </div>
          </div>
        </div>
        `;
        //Añadimos la pelicula al contenedor
        contenedor.appendChild(movieEl);
      });
    }
  });

function getTrailer(id) {
  //Coger video youtube por pelicula pasando el ID
  const VIDEO_URL =
    "https://api.themoviedb.org/3/movie/" +
    id +
    "/videos?api_key=" +
    API_KEY +
    "&language=es&include_adult=false&sort_by=created_at.asc";
  //Realizamos otra consulta a la API
  fetch(VIDEO_URL)
    .then((res) => res.json())
    .then((data) => {
      let clave = data.results[0].key;
      window.open("https://www.youtube.com/watch?v=" + clave);
    });
}

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

//Funcion para coger 3 numeros aleatorios
function numerosAleatorios() {
  let listaNumeros = [];
  for (let contador = 0; contador < 3; contador++) {
    numero = Math.floor(Math.random() * 20 + 1);
    listaNumeros.push(numero);
  }
  return listaNumeros;
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
