var botonNombre = document.getElementById("nombre1")
var botonApellido = document.getElementById("apellido1")
var inputResultado = document.getElementById("resultado1")
var escribirNombre = function() {
    inputResultado.value = "Alvaro"
}
var escribirApellido = function() {
    inputResultado.value = "Carballo"
}
botonNombre.addEventListener("click", escribirNombre)
botonApellido.addEventListener("click", escribirApellido)