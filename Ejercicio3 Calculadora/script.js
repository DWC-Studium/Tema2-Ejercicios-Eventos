let borrar = document.getElementById("borrar1")
let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let mas = document.getElementById("mas1")
let igual = document.getElementById("igual1")
let resultado1 = document.getElementById("resultado1")
let sumado = 0
let borrarF = function() {
    resultado1.value = 0
}
let n1a = function() {
    if (resultado1.value == "0") {
        resultado1.value = 1
    } else {
        resultado1.value += 1
    }
}
let n2a = function() {
    if (resultado1.value == "0") {
        resultado1.value = 2
    } else {
        resultado1.value += 2
    }
}
let sumar = function() {
    sumado += parseInt(resultado1.value)
    resultado1.value = "0"
}
let total = function() {
    sumado = parseInt(sumado) + parseInt(resultado1.value)
    resultado1.value = sumado
    sumado = 0
}

borrar.addEventListener("click", borrarF)
n1.addEventListener("click", n1a)
n2.addEventListener("click", n2a)
mas.addEventListener("click", sumar)
igual.addEventListener("click", total)