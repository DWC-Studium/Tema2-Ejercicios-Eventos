jQuery(function() {
    let actual = 0;

    let agregarObjetivo = function(id) {
        $('#d' + id).addClass('objetivo');
    }
    let eliminarObjetivo = function(id) {
        $('#d' + id).removeClass('objetivo');
    }

    function getEnteroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let cambiarCirculo = function() {
        if (actual > 0) {
            eliminarObjetivo(actual);
        }
        actual = getEnteroAleatorio(1, 9);
        agregarObjetivo(actual);
        idTemporizador = setTimeout(cambiarCirculo, 500);

        $('.objetivo').click(function() {
            eliminarObjetivo(actual);
            clearTimeout(idTemporizador);
            alert("¡Has ganado!");
        });
    }
    cambiarCirculo();
});