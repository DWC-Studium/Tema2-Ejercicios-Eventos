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