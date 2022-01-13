//Parte 1
/*
jQuery(function() {
    $(this).on('keydown', function() {
        $('body').css('background-color', 'red');
    });
});
*/
//Parte 2
/*
jQuery(function() {
    $(this).on('keydown', function() {
        $('body').css('background-color', 'red');
    });
    $(this).on('keyup', function() {
        $('body').css('background-color', '');
    });
});
*/
//Parte 3
/*
jQuery(function() {
    $(this).on('keydown', function(event) {
        if (event.key == 'r') {
            $('body').css('background-color', 'red');
        }
    });
    $(this).on('keyup', function(event) {
        if (event.key == 'r') {
            $('body').css('background-color', '');
        }
    });
});
*/
//Parte 4
jQuery(function() {

    $('#botonActivar').on('click', function() {
        $(document).on('keydown', function(event) {
            cambiarColor(event);
        });
        $(document).on('keyup', function(event) {
            limpiarCambio(event);
        });
    });

    $('#botonDesactivar').on('click', function() {
        $(document).off('keydown');
        $(document).off('keyup');
    });

    function limpiarCambio(e) {
        $('body').css('background-color', '');
    }

    function cambiarColor(e) {
        var color = ""
        switch (e.key) {
            case "r":
                color = "red";
                break
            case "a":
                color = "blue";
                break
            case "b":
                color = "green";
                break
            case "@":
                color = "orange";
                break
            case "x":
                color = "purple";
                break
            case " ":
                color = "yellow";
                break
            case "AltGraph":
                color = "black";
                break
            case "Control":
                color = "grey";
                break
            case ";":
                color = "pink";
                break
            case "Shift":
                color = "brown";
                break
            case "F6":
                color = "aquamarine";
                break
            case "Enter":
                color = randomColor();
        }
        $('body').css('background-color', color);
    }

});

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}