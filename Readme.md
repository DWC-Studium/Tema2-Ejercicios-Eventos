<h1>1. Mensaje</h1>
<p>Crea una aplicación web que muestre un alert con el mensaje "Hola Mundo" cuando se pulse un botón.</p>

<h1>2. Nombre y apellidos</h1>
<p>Crea una aplicación web con un input y dos botones con "Nombre" y "Apellido". Cuando se pulse en cada botón, se escribirá en el input el nombre o el apellido.</p>

<h1>3. Calculadora</h1>
<p>Crea una página web que simule el funcionamiento de una calculadora:</p>

<h1>4. Juego: Golpea el círculo</h1>
<p>La empresa Entretenimientos GrupoStudium, S.L. nos ha pedido implementar el prototipo de un juego muy simple en JavaScript. Nos proporcionan el código HTML y CSS, y tenemos que implementar las reglas siguientes:</p>
<ul>
    <li>El jugador tiene 3 segundos para hacer click sobre el círculo de color rojo, que será seleccionado aleatoriamente.</li>
    <li>Una vez se ha agotado el tiempo, el círculo se intercambia con otro.</li>
    <li>Si se hace click en el círculo dentro del tiempo indicado, muestra una alerta con el mensaje: “Has ganado”.</li>
</ul>

        <style>
          div>div {
            width: 100px;
            height: 100px;
            border: 1px solid red;
            display: inline-block;
            border-radius: 50px;
          }

          .objetivo {
            background-color: red;
          }
        </style>

        <div>
          <div id="d1"></div>
          <div id="d2"></div>
          <div id="d3"></div>
        </div>

        <div>
          <div id="d4"></div>
          <div id="d5"></div>
          <div id="d6"></div>
        </div>

        <div>
          <div id="d7"></div>
          <div id="d8"></div>
          <div id="d9"></div>
        </div>

<p>Para obtener un nodo podemos usar el método document.getElementById pasando como argumento el id del elemento, y para modificar la clase sólo hay que asignar el nuevo valor a la propiedad className del nodo.</p>
<p>Nota: Para acceder a las clases que dan estilo a un elemento de HTML se utiliza la propiedad className del elemento. Esta propiedad contiene una cadena de texto que puede ser modificada para reemplazar las clases, añadir otras nuevas o eliminarlas. Así pues, para cambiar el color del círculo en el que se debe hacer click, sólo hay que reemplazar el className del elemento por objetivo o por una cadena vacía, según si se quiere resaltar o limpiar.</p>

<h1>5. Eventos de teclado</h1>
<h2>Parte 1</h2>
<p>Crea una aplicación web que funcione de tal forma que si pulsas cualquier tecla del teclado el fondo de la pantalla se vuelva rojo.</p>
<h2>Parte 2</h2>
<p>Crea una aplicación web que funcione de tal forma que si pulsas cualquier tecla del teclado el fondo de la pantalla se vuelva rojo. Si levantas la tecla, el fondo vuelve a la normalidad</p>
<h2>Parte 3</h2>
<p>Crea una aplicación web que funcione de tal forma que si pulsas la tecla 'r' del teclado el fondo de la pantalla se vuelva rojo. Si levantas la tecla, el fondo vuelve a la normalidad</p>
<h2>Parte 4</h2>
<p>Crear un ejercicio que sea una extensión del ejercicio anterior. Hacer que ahora no sólo se active el color rojo al pulsar la teclar 'r', sino todas las combinaciones siguientes:</p>
<ul>
    <li>Color rojo al pulsar la tecla 'r'.</li>
    <li>Color azul al pulsar la tecla 'a'.</li>
    <li>Color verde al pulsar la tecla 'b'.</li>
    <li>Color naranja al pulsar la tecla '@'.</li>
    <li>Color morado al pulsar la tecla 'x'.</li>
    <li>Color amarillo al pulsar la tecla 'espacio'.</li>
    <li>Color negro al pulsar la tecla 'AltGr'.</li>
    <li>Color gris al pulsar la tecla 'Control'.</li>
    <li>Color rosa al pulsar la tecla ';'.</li>
    <li>Color marrón al pulsar la tecla 'Shift'.</li>
    <li>Color aguamarina al pulsar la tecla 'F6'.</li>
    <li>Color aleatorio al pulsar la tecla 'Enter'.</li>
</ul>
<p>Además, colocar dos botones que activen o desactiven todo el funcionamiento anterior (usar la función removeEventListener).</p>

<h1>6. Cambio de colores</h1>
<p>La empresa Entretenimientos GrupoStudium, S.L. nos ha pedido que implementemos un sistema de detección que permita cambiar el color de un elemento según la tecla que se pulse:</p>
<ul>
    <li>Tecla r: rojo</li>
    <li>Tecla a: amarillo</li>
    <li>Tecla b: blanco</li>
</ul>
<p>Nos proporcionan el siguiente código HTML y CSS:</p>

        <style>
          div {
            width: 100px; 
            height: 100px;
            border: 1px solid black;
          }

          .blanco {
            background-color: white;
          }

          .rojo {
            background-color: red;
          }

          .amarillo {
            background-color: yellow;
          }
        </style>
 
        <div id="pruebas" tabindex=1></div>

<p>Nota: Tenga en cuenta que se ha utilizado el atributo tabindex=1: esto permite que el elemento div sea seleccionable y sea capaz de detectar los eventos del teclado.</p>
<p>Nota: Para acceder a las clases que dan estilo a un elemento de HTML se utiliza la propiedad className del elemento. Esta propiedad contiene una cadena de texto que puede ser modificada para reemplazar las clases, añadir otras nuevas o eliminarlas. Así pues, para cambiar el color del contenedor simplemente reemplace el className del elemento por el que corresponda.</p>

<h1>7. Formulario interactivo</h1>
<p>La empresa Entretenimientos GrupoStudium, S.L. nos ha pedido que implementemos un formulario de contacto preparado para añadir un sistema de validación propio que se activará cuando se envíe el formulario.</p>
<p>Sólo necesitan una función que muestre una alerta, ya que la alerta será sustituida por el código de validación en una fase posterior. El código proporcionado es el siguiente:</p>

        <form id="contacto" method="post">
          <label>Nombre:</label><input type="text" name="nombre"/><br>
          <label>Correo:</label><input type="text" name="correo"/><br>
          <label>Mensaje:</label><textarea name="mensaje"></textarea><br>
          <button>Enviar</button>
        </form>

<h1>8. Reproductor multimedia</h1>
<p>La empresa Entretenimientos GrupoStudium, S.L. quiere añadir un reproductor de audio en su sitio web y necesitan poder controlar cuando se pone en pausa una canción para mostrar un mensaje personalizado. Es decir, debe implementar un sistema que muestre una alerta cuando se ponga en pausa la canción que se está reproduciendo.</p>
<p>El código proporcionado es el siguiente:</p>

        <audio id="reproductor" controls="controls" src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Rondo_Alla_Turka.ogg">

<h1>9. GrupoStudium</h1>
<p>Sobre el siguiente código, realizar las siguientes modificaciones usando únicamente JavaScript puro, sin CSS. Repetir los ejercicios usando exclusivamente jQuery.</p>
<p>Tabla</p>
<ol>
    <li>Las celdas de la tabla están separadas por líneas grises únicas, con un padding de 10px.</li>
    <li>El color de fondo de la fila de encabezado es darkkhaki.</li>
    <li>El color de fondo de las filas pares es lemonchiffon.</li>
    <li>Al hacer pasar el ratón por todas las filas excepto por la de encabezado, el color de fondo pasa a khaki.</li>
</ol>
<p>Búsqueda</p>
<ol>
    <li>Realizar un filtrado a partir del texto escrito en el cuadro de búsqueda. Es decir, al escribir en el input, sólo muestra las filas que contienen el texto que contiene.</li>
    <li>Al pulsar en el botón "Cambiar", realiza la búsqueda por apellidos. El label cambia a Buscar por apellido: .</li>
</ol>
<p>Añadir filas</p>
<ol>
    <li>Insertar una nueva fila cuando se pulse el botón añadir. Al pulsar al botón se pedirán los datos necesarios al usuario.</li>
</ol>

        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Page Title</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="script.js"></script>
        </head>

        <body>
            <h1 class="cabecera">GrupoStudium</h1>
            <h2 class="cabecera">Presentación</h2>
            <div id="separador"></div>
            <section id="alumnos">
                <h2 class="cabecera">Alumnos</h2>
                <p><label>Buscar por nombre: </label><input type="text"></p>
                <p><button>Cambiar</button></p>
                <table>
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Nota</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Ana</td>
                            <td>Alemán</td>
                            <td>9.8</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Benito</td>
                            <td>Bueno</td>
                            <td>7.2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Carmen</td>
                            <td>Cano</td>
                            <td>8.9</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Diego</td>
                            <td>Duro</td>
                            <td>6.1</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Elisa</td>
                            <td>Escalera</td>
                            <td>5.5</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Javier</td>
                            <td>Escudero</td>
                            <td>9.8</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <button id="addButton">Añadir</button>
        </body>

        </html>

