$(document).ready(loadPage)     //cargar  página

function loadPage (){
  setTimeout(function () {
    $("#one-section").fadeOut(2500);
  }, 1000);

  $("#searcher").keyup(filterRestaurant);

}

function filterRestaurant (){    //Función para filtrar los restaurantes

  /*var searchContact = $("#searcher".val().toLowerCase();
  if($("#searcher").val().trim().length > 0) {
  for(var i = 0; i < dataRestaurant.length; i++) {
  var restaurantes = dataRestaurant[i].name;
  var filtrar = restaurants.filter(function(restaurantes) {
  return restaurantes.name.toLowerCase().indexOf(searchContact) >= 0;
});

$("#select-option").empty();
filtrar.forEach(function(restaurantes){
paintRestaurantInHtml(restaurantes);
});
} else {
$("#select-option").empty();
dataRestaurant.forEach(function(restaurantes){
paintRestaurantInHtml(restaurantes);
});
*/}
console.log("hola");

//función para validar Restaurantes
  /*function validateRestaurant () {
  var $containerSearch = $("#searcher");
  function addContact(e) {
    e.preventDefault();

//función para pintar Restaurantes
function paintRestaurantInHtml(restaurantes) {

  // crear elementos con DOM
var $newRestaurant = $("<article />", {
    "class": "card-card"
  });
  var $containerRestauranttName = $("<h3 />");
}
// Agregamos atributos y eventos a los elementos creados en el dom

// Asignando valores

// agregamos lo que creamos con el Dom a un elemento existente del html
 $("#select-option").prepend($newRestaurant);*/
