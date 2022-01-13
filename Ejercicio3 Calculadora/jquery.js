$(document).ready(function() {
    let pantalla = $("#resultado2")
    let resParcial = 0
    $("#borrar2").click(function() {
        pantalla.val(0);
    })
    $("#x1").click(function() {
        let valorPantalla = pantalla.val();
        if (valorPantalla == "0") {
            pantalla.val("1");
        } else {
            pantalla.val(valorPantalla + "1");
        }
    });
    $("#x2").click(function() {
        let valorPantalla = pantalla.val();
        valorPantalla == 0 ? pantalla.val("2") : pantalla.val(valorPantalla + "2");
    });
    $("#mas2").click(function() {
        resParcial += parseInt(pantalla.val())
        pantalla.val(0);
    });
    $("#igual2").click(function() {
        pantalla.val(parseInt(pantalla.val()) + resParcial);
        resParcial = 0;
    });
});