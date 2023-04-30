//Declaración de variables para uso de la consulta a la API
const API_KEY = "fb58f15b056f0be58b18d8bc693ce131";
const BASE_URL = "https://api.themoviedb.org/3/genre/";
let genero = document.getElementById("genero").value;
var n = 0;
var numero = 0;
var uno = 0;
var dos = 0;
var tres = 0;
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

const API_URL =
  BASE_URL +
  generos[genero] +
  "/movies?api_key=" +
  API_KEY +
  "&language=en-US&include_adult=false&sort_by=created_at.asc";

//Coger video youtube por pelicula pasando el ID
// "https://api.themoviedb.org/3/movie/"+28+"/videos?api_key=fb58f15b056f0be58b18d8bc693ce131&language=en-US&include_adult=false&sort_by=created_at.asc"
fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    let peliculas = data.results;
    let ids = numerosAleatorios();
    let listadoPeliculas = [];
    for (let contador = 0; contador < 3; contador++) {
      listadoPeliculas.push(peliculas[ids[contador]]);
    }
    console.log(listadoPeliculas);
  });

//Funcion para coger 3 numeros aleatorios
function numerosAleatorios() {
  let listaNumeros = [];
  for (let contador = 0; contador < 3; contador++) {
    numero = Math.floor(Math.random() * 20 + 1);
    listaNumeros.push(numero);
  }
  return listaNumeros;
}
