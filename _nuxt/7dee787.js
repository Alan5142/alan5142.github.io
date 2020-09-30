(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{284:function(module,exports){eval('\nmodule.exports = { \n      attributes: {"title":"Introducción al protocolo CAN","year":2020,"month":7,"day":17,"hour":"00:25","excerpt":"El protocolo de comunicaciones CAN (Controller Area Network), un protocolo muy interesante por su versatilidad y sobre todo por todo lo que ofrece, quizá deberías considerarlo si te interesa realizar una comunicación segura y a prueba de errores","picture":"/images/blog/can/can.png"},\n    \n      html: "<p>El protocolo de comunicación CAN (Controller Area Network), un protocolo muy interesante por su versatilidad y sobre todo por todo lo que ofrece, quizá deberías considerarlo si te interesa realizar una comunicación segura y a prueba de errores</p>\\n<h1 id=\\"contenido\\"><a id=\\"user-content-contenido\\" class=\\"anchor\\" href=\\"#contenido\\" aria-hidden=\\"true\\"><svg aria-hidden=\\"true\\" class=\\"octicon octicon-link\\" height=\\"16\\" version=\\"1.1\\" viewbox=\\"0 0 16 16\\" width=\\"16\\"><path d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Contenido</h1>\\n<ol>\\n<li><a href=\\"#que-es\\">🤔¿Qué es?</a></li>\\n<li><a href=\\"#can-estandar-y-extendido\\">CAN estándar y CAN extendido</a>\\n<ol>\\n<li><a href=\\"#can-estandar\\">Estándar</a></li>\\n<li><a href=\\"#can-extendido\\">Extendido</a></li>\\n</ol>\\n</li>\\n<li><a href=\\"#mensajes\\">Mensajes</a>\\n<ol>\\n<li><a href=\\"#arbitraje\\">Arbitraje</a></li>\\n<li><a href=\\"#tipos-de-mensajes\\">Tipos</a></li>\\n</ol>\\n</li>\\n<li><a href=\\"#fin\\">Fin</a></li>\\n</ol>\\n<br>\\n<h1 id=\\"que-es\\"><a id=\\"user-content-¿qué-es\\" class=\\"anchor\\" href=\\"#¿qué-es\\" aria-hidden=\\"true\\"><svg aria-hidden=\\"true\\" class=\\"octicon octicon-link\\" height=\\"16\\" version=\\"1.1\\" viewbox=\\"0 0 16 16\\" width=\\"16\\"><path d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>¿Qué es?</h1>\\n<p>CAN es un protocolo desarrollado por Bosch, pensado para ser utilizado en automoviles, es un protocolo serial y desarrollado\\npara reemplazar otros protocolos, de la misma forma, por especificación es altamente inmune a interferencias electricas,\\nde autodiagonsticarse y reparar algunos datos con errores. Debido a todo esto, ha crecido su popularidad, siendo utilizado\\ntambién en entornos médicos, manufactura, aviación, trenes, entre otros sectores.</p>\\n<p>El estandar se adhiere al modelo OSI, quedando de esta manera</p>\\n<table>\\n<thead>\\n<tr>\\n<th>OSI</th>\\n<th>CAN</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Aplicación</td>\\n<td>Microcontroladores o DSP</td>\\n</tr>\\n<tr>\\n<td>Enlace de datos</td>\\n<td>Controlador CAN</td>\\n</tr>\\n<tr>\\n<td>Capa física</td>\\n<td>Controlador CAN y <em>transceiver</em> CAN</td>\\n</tr>\\n</tbody>\\n</table>\\n<p>Actualmente esta estandarizado bajo la <a href=\\"https://www.iso.org/standard/63648.html\\">ISO</a>, además, es fácil encontrar\\nmicrocontroladores y placas de desarrollo con controladores CAN integrados, algunas empresas que brindan dispositivos con CAN:</p>\\n<ul>\\n<li>STMicroelectronics</li>\\n<li>NXP</li>\\n<li>Microchip</li>\\n<li>Espressif</li>\\n<li>Texas Instruments</li>\\n</ul>\\n<p>CAN no define ningún tipo de conector para el bus CAN</p>\\n<h1 id=\\"can-estandar-y-extendido\\"><a id=\\"user-content-can-estándar-y-extendido\\" class=\\"anchor\\" href=\\"#can-estándar-y-extendido\\" aria-hidden=\\"true\\"><svg aria-hidden=\\"true\\" class=\\"octicon octicon-link\\" height=\\"16\\" version=\\"1.1\\" viewbox=\\"0 0 16 16\\" width=\\"16\\"><path d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>CAN estándar y extendido</h1>\\n<p>Se definen dos modos de operación para CAN, estándar y extendido, a continuación veremos de que trata cada uno.</p>\\n<h2 id=\\"can-estandar\\"><a id=\\"user-content-can-estándar\\" class=\\"anchor\\" href=\\"#can-estándar\\" aria-hidden=\\"true\\"><svg aria-hidden=\\"true\\" class=\\"octicon octicon-link\\" height=\\"16\\" version=\\"1.1\\" viewbox=\\"0 0 16 16\\" width=\\"16\\"><path d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>CAN estándar</h2>\\n<p>Una trama en CAN estándar tiene la siguiente forma</p>\\n<div style=\\"overflow-x: auto\\">\\n<table>\\n<thead>\\n<tr>\\n<th>SOF</th>\\n<th>Identificador</th>\\n<th>RTR</th>\\n<th>IDE</th>\\n<th>r0</th>\\n<th>DLC</th>\\n<th>datos</th>\\n<th>CRC</th>\\n<th>ACK</th>\\n<th>EOF</th>\\n<th>IFS</th>\\n</tr>\\n</thead>\\n<tbody></tbody>\\n</table>\\n</div>\\n<p>Cada uno de estos campos consta de 1 bit a menos que se indique lo contrario.</p>\\n<ul>\\n<li>SOF (Start Of Frame): es dominante e indica el inicio de la trama</li>\\n<li>Identificador: 11 bits, establece la prioridad del mensaje, los mensajes con más prioridad tienen valores más bajos, por ejemplo, el id &quot;0&quot; es el de mayor prioridad.</li>\\n<li>RTR (Remote Transmission Request): este bit es dominante cuando se solicita información de otro nodo.</li>\\n<li>IDE (Identifier Extension): es un bit dominante para indicar que es CAN estándar, es recesivo para indicar que es CAN extendido.</li>\\n<li>r0 (reserved): bit reservado</li>\\n<li>DLC (Data Length Code): 4 bits que indican la cantidad de bytes que se transmitirán</li>\\n<li>Data: hasta 64 bits, son los datos que se desean transmitir.</li>\\n<li>CRC (Cyclic Redundancy Check): 16 bits (15 y un delimitador), esta parte contiene el checksum y se utiliza para detectar errores.</li>\\n<li>ACK (Acknowledgment): 2 bits, uno es el ACK y otro es un delimitador, cada nodo que reciba un mensaje correcto, sobreescribe este bit, inicialmente recesivo por un bit dominante.</li>\\n<li>EOF (End Of Frame): 7 bits, marca el fin de la trama CAN, tiene fines de verificación de errores.</li>\\n<li>IFS (Interframe Space): contiene el tiempo requerido por un controlador para mover una trama correcta a un buffer de mensajes (para la aplicación).</li>\\n</ul>\\n<h2 id=\\"can-extendido\\"><a id=\\"user-content-can-extendido\\" class=\\"anchor\\" href=\\"#can-extendido\\" aria-hidden=\\"true\\"><svg aria-hidden=\\"true\\" class=\\"octicon octicon-link\\" height=\\"16\\" version=\\"1.1\\" viewbox=\\"0 0 16 16\\" width=\\"16\\"><path d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>CAN extendido</h2>\\n<p>Una trama CAN tiene la siguiente forma.</p>\\n<div style=\\"overflow-x: auto\\">\\n<table>\\n<thead>\\n<tr>\\n<th>SOF</th>\\n<th>Identificador</th>\\n<th>SRR</th>\\n<th>IDE</th>\\n<th>Identificador</th>\\n<th>r1</th>\\n<th>r0</th>\\n<th>DLC</th>\\n<th>Data</th>\\n<th>CRC</th>\\n<th>ACK</th>\\n<th>EOF</th>\\n<th>IFS</th>\\n</tr>\\n</thead>\\n<tbody></tbody>\\n</table>\\n</div>\\n<p>Los bits son los mismos, salvo:</p>\\n<ul>\\n<li>SRR (Substitute Remote Request): es un placeholder.</li>\\n<li>IDE: ahora es recesivo para indicar que los siguientes 18 bits bits forman parte del identificador.</li>\\n<li>r1: un bit más reservado</li>\\n</ul>\\n<h1 id=\\"mensajes\\"><a id=\\"user-content-mensajes\\" class=\\"anchor\\" href=\\"#mensajes\\" aria-hidden=\\"true\\"><svg aria-hidden=\\"true\\" class=\\"octicon octicon-link\\" height=\\"16\\" version=\\"1.1\\" viewbox=\\"0 0 16 16\\" width=\\"16\\"><path d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Mensajes</h1>\\n<h2 id=\\"arbitraje\\"><a id=\\"user-content-arbitraje\\" class=\\"anchor\\" href=\\"#arbitraje\\" aria-hidden=\\"true\\"><svg aria-hidden=\\"true\\" class=\\"octicon octicon-link\\" height=\\"16\\" version=\\"1.1\\" viewbox=\\"0 0 16 16\\" width=\\"16\\"><path d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Arbitraje</h2>\\n<p>Una característica muy importante de CAN es que cuenta con dos señales para la transmisión de datos: CAN H y CAN L, emiten el mismo\\nmensaje pero con lógica opuesta, la razón de esto es garantizar más seguridad y tolerancia a fallos.</p>\\n<p>Puesto que es un bus de nodos y no hay un orden específico para enviar mensajes, ocurre algo llamado arbitraje, en la\\nque los mensajes de mayor prioridad ocurren antes que los de menor prioridad.</p>\\n<h2 id=\\"tipos-de-mensajes\\"><a id=\\"user-content-tipos-de-mensajes\\" class=\\"anchor\\" href=\\"#tipos-de-mensajes\\" aria-hidden=\\"true\\"><svg aria-hidden=\\"true\\" class=\\"octicon octicon-link\\" height=\\"16\\" version=\\"1.1\\" viewbox=\\"0 0 16 16\\" width=\\"16\\"><path d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Tipos de mensajes</h2>\\n<p>En CAN hay 4 tipos de mensajes:</p>\\n<ul>\\n<li>Data Frame: es el mensaje más común, tal cual su nombre dice, es para transmitir datos.</li>\\n<li>Remote Frame: sirve para solicitar datos de otro nodo, los específica el bit RTR</li>\\n<li>Error Frame: es una trama que no cumple con lo especificado por CAN, si se envía una trama de error, todos los demás nodos enviarán una trama de error, la razón de esto es para que el nodo que envió el mensaje se entere de su error.</li>\\n<li>Valid Frame: una trama es libre de errores si el último bit de EOF es recibido.</li>\\n</ul>\\n<h1 id=\\"fin\\"><a id=\\"user-content-fin\\" class=\\"anchor\\" href=\\"#fin\\" aria-hidden=\\"true\\"><svg aria-hidden=\\"true\\" class=\\"octicon octicon-link\\" height=\\"16\\" version=\\"1.1\\" viewbox=\\"0 0 16 16\\" width=\\"16\\"><path d=\\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\\"></path></svg></a>Fin</h1>\\n<p>Aunque quedaron muchas cosas sin explicar, espero que haya servido como una pequeña introducción al protocolo CAN.</p>\\n<p>Es un protocolo muy interesante que deberías considerar si necesitas algo confiable o piensas utilizarlo en un sector como la automatización.</p>\\n",\n    \n      meta: {"resourcePath":"/home/runner/work/alan-blog/alan-blog/content/blog/2020-07-17-can.md"},\n     }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZW50L2Jsb2cvMjAyMC0wNy0xNy1jYW4ubWQ/ZDg4NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esa0I7QUFDQSxtQkFBbUIsNlhBQTZYOztBQUVoWix1cktBQXVySyxPQUFPOztBQUU5ckssYUFBYSxzRkFBc0Y7QUFDbkciLCJmaWxlIjoiMjg0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5tb2R1bGUuZXhwb3J0cyA9IHsgXG4gICAgICBhdHRyaWJ1dGVzOiB7XCJ0aXRsZVwiOlwiSW50cm9kdWNjacOzbiBhbCBwcm90b2NvbG8gQ0FOXCIsXCJ5ZWFyXCI6MjAyMCxcIm1vbnRoXCI6NyxcImRheVwiOjE3LFwiaG91clwiOlwiMDA6MjVcIixcImV4Y2VycHRcIjpcIkVsIHByb3RvY29sbyBkZSBjb211bmljYWNpb25lcyBDQU4gKENvbnRyb2xsZXIgQXJlYSBOZXR3b3JrKSwgdW4gcHJvdG9jb2xvIG11eSBpbnRlcmVzYW50ZSBwb3Igc3UgdmVyc2F0aWxpZGFkIHkgc29icmUgdG9kbyBwb3IgdG9kbyBsbyBxdWUgb2ZyZWNlLCBxdWl6w6EgZGViZXLDrWFzIGNvbnNpZGVyYXJsbyBzaSB0ZSBpbnRlcmVzYSByZWFsaXphciB1bmEgY29tdW5pY2FjacOzbiBzZWd1cmEgeSBhIHBydWViYSBkZSBlcnJvcmVzXCIsXCJwaWN0dXJlXCI6XCIvaW1hZ2VzL2Jsb2cvY2FuL2Nhbi5wbmdcIn0sXG4gICAgXG4gICAgICBodG1sOiBcIjxwPkVsIHByb3RvY29sbyBkZSBjb211bmljYWNpw7NuIENBTiAoQ29udHJvbGxlciBBcmVhIE5ldHdvcmspLCB1biBwcm90b2NvbG8gbXV5IGludGVyZXNhbnRlIHBvciBzdSB2ZXJzYXRpbGlkYWQgeSBzb2JyZSB0b2RvIHBvciB0b2RvIGxvIHF1ZSBvZnJlY2UsIHF1aXrDoSBkZWJlcsOtYXMgY29uc2lkZXJhcmxvIHNpIHRlIGludGVyZXNhIHJlYWxpemFyIHVuYSBjb211bmljYWNpw7NuIHNlZ3VyYSB5IGEgcHJ1ZWJhIGRlIGVycm9yZXM8L3A+XFxuPGgxIGlkPVxcXCJjb250ZW5pZG9cXFwiPjxhIGlkPVxcXCJ1c2VyLWNvbnRlbnQtY29udGVuaWRvXFxcIiBjbGFzcz1cXFwiYW5jaG9yXFxcIiBocmVmPVxcXCIjY29udGVuaWRvXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PHN2ZyBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcIm9jdGljb24gb2N0aWNvbi1saW5rXFxcIiBoZWlnaHQ9XFxcIjE2XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdib3g9XFxcIjAgMCAxNiAxNlxcXCIgd2lkdGg9XFxcIjE2XFxcIj48cGF0aCBkPVxcXCJNNCA5aDF2MUg0Yy0xLjUgMC0zLTEuNjktMy0zLjVTMi41NSAzIDQgM2g0YzEuNDUgMCAzIDEuNjkgMyAzLjUgMCAxLjQxLS45MSAyLjcyLTIgMy4yNVY4LjU5Yy41OC0uNDUgMS0xLjI3IDEtMi4wOUMxMCA1LjIyIDguOTggNCA4IDRINGMtLjk4IDAtMiAxLjIyLTIgMi41UzMgOSA0IDl6bTktM2gtMXYxaDFjMSAwIDIgMS4yMiAyIDIuNVMxMy45OCAxMiAxMyAxMkg5Yy0uOTggMC0yLTEuMjItMi0yLjUgMC0uODMuNDItMS42NCAxLTIuMDlWNi4yNWMtMS4wOS41My0yIDEuODQtMiAzLjI1QzYgMTEuMzEgNy41NSAxMyA5IDEzaDRjMS40NSAwIDMtMS42OSAzLTMuNVMxNC41IDYgMTMgNnpcXFwiPjwvcGF0aD48L3N2Zz48L2E+Q29udGVuaWRvPC9oMT5cXG48b2w+XFxuPGxpPjxhIGhyZWY9XFxcIiNxdWUtZXNcXFwiPvCfpJTCv1F1w6kgZXM/PC9hPjwvbGk+XFxuPGxpPjxhIGhyZWY9XFxcIiNjYW4tZXN0YW5kYXIteS1leHRlbmRpZG9cXFwiPkNBTiBlc3TDoW5kYXIgeSBDQU4gZXh0ZW5kaWRvPC9hPlxcbjxvbD5cXG48bGk+PGEgaHJlZj1cXFwiI2Nhbi1lc3RhbmRhclxcXCI+RXN0w6FuZGFyPC9hPjwvbGk+XFxuPGxpPjxhIGhyZWY9XFxcIiNjYW4tZXh0ZW5kaWRvXFxcIj5FeHRlbmRpZG88L2E+PC9saT5cXG48L29sPlxcbjwvbGk+XFxuPGxpPjxhIGhyZWY9XFxcIiNtZW5zYWplc1xcXCI+TWVuc2FqZXM8L2E+XFxuPG9sPlxcbjxsaT48YSBocmVmPVxcXCIjYXJiaXRyYWplXFxcIj5BcmJpdHJhamU8L2E+PC9saT5cXG48bGk+PGEgaHJlZj1cXFwiI3RpcG9zLWRlLW1lbnNhamVzXFxcIj5UaXBvczwvYT48L2xpPlxcbjwvb2w+XFxuPC9saT5cXG48bGk+PGEgaHJlZj1cXFwiI2ZpblxcXCI+RmluPC9hPjwvbGk+XFxuPC9vbD5cXG48YnI+XFxuPGgxIGlkPVxcXCJxdWUtZXNcXFwiPjxhIGlkPVxcXCJ1c2VyLWNvbnRlbnQtwr9xdcOpLWVzXFxcIiBjbGFzcz1cXFwiYW5jaG9yXFxcIiBocmVmPVxcXCIjwr9xdcOpLWVzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PHN2ZyBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcIm9jdGljb24gb2N0aWNvbi1saW5rXFxcIiBoZWlnaHQ9XFxcIjE2XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdib3g9XFxcIjAgMCAxNiAxNlxcXCIgd2lkdGg9XFxcIjE2XFxcIj48cGF0aCBkPVxcXCJNNCA5aDF2MUg0Yy0xLjUgMC0zLTEuNjktMy0zLjVTMi41NSAzIDQgM2g0YzEuNDUgMCAzIDEuNjkgMyAzLjUgMCAxLjQxLS45MSAyLjcyLTIgMy4yNVY4LjU5Yy41OC0uNDUgMS0xLjI3IDEtMi4wOUMxMCA1LjIyIDguOTggNCA4IDRINGMtLjk4IDAtMiAxLjIyLTIgMi41UzMgOSA0IDl6bTktM2gtMXYxaDFjMSAwIDIgMS4yMiAyIDIuNVMxMy45OCAxMiAxMyAxMkg5Yy0uOTggMC0yLTEuMjItMi0yLjUgMC0uODMuNDItMS42NCAxLTIuMDlWNi4yNWMtMS4wOS41My0yIDEuODQtMiAzLjI1QzYgMTEuMzEgNy41NSAxMyA5IDEzaDRjMS40NSAwIDMtMS42OSAzLTMuNVMxNC41IDYgMTMgNnpcXFwiPjwvcGF0aD48L3N2Zz48L2E+wr9RdcOpIGVzPzwvaDE+XFxuPHA+Q0FOIGVzIHVuIHByb3RvY29sbyBkZXNhcnJvbGxhZG8gcG9yIEJvc2NoLCBwZW5zYWRvIHBhcmEgc2VyIHV0aWxpemFkbyBlbiBhdXRvbW92aWxlcywgZXMgdW4gcHJvdG9jb2xvIHNlcmlhbCB5IGRlc2Fycm9sbGFkb1xcbnBhcmEgcmVlbXBsYXphciBvdHJvcyBwcm90b2NvbG9zLCBkZSBsYSBtaXNtYSBmb3JtYSwgcG9yIGVzcGVjaWZpY2FjacOzbiBlcyBhbHRhbWVudGUgaW5tdW5lIGEgaW50ZXJmZXJlbmNpYXMgZWxlY3RyaWNhcyxcXG5kZSBhdXRvZGlhZ29uc3RpY2Fyc2UgeSByZXBhcmFyIGFsZ3Vub3MgZGF0b3MgY29uIGVycm9yZXMuIERlYmlkbyBhIHRvZG8gZXN0bywgaGEgY3JlY2lkbyBzdSBwb3B1bGFyaWRhZCwgc2llbmRvIHV0aWxpemFkb1xcbnRhbWJpw6luIGVuIGVudG9ybm9zIG3DqWRpY29zLCBtYW51ZmFjdHVyYSwgYXZpYWNpw7NuLCB0cmVuZXMsIGVudHJlIG90cm9zIHNlY3RvcmVzLjwvcD5cXG48cD5FbCBlc3RhbmRhciBzZSBhZGhpZXJlIGFsIG1vZGVsbyBPU0ksIHF1ZWRhbmRvIGRlIGVzdGEgbWFuZXJhPC9wPlxcbjx0YWJsZT5cXG48dGhlYWQ+XFxuPHRyPlxcbjx0aD5PU0k8L3RoPlxcbjx0aD5DQU48L3RoPlxcbjwvdHI+XFxuPC90aGVhZD5cXG48dGJvZHk+XFxuPHRyPlxcbjx0ZD5BcGxpY2FjacOzbjwvdGQ+XFxuPHRkPk1pY3JvY29udHJvbGFkb3JlcyBvIERTUDwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPkVubGFjZSBkZSBkYXRvczwvdGQ+XFxuPHRkPkNvbnRyb2xhZG9yIENBTjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPkNhcGEgZsOtc2ljYTwvdGQ+XFxuPHRkPkNvbnRyb2xhZG9yIENBTiB5IDxlbT50cmFuc2NlaXZlcjwvZW0+IENBTjwvdGQ+XFxuPC90cj5cXG48L3Rib2R5PlxcbjwvdGFibGU+XFxuPHA+QWN0dWFsbWVudGUgZXN0YSBlc3RhbmRhcml6YWRvIGJham8gbGEgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cuaXNvLm9yZy9zdGFuZGFyZC82MzY0OC5odG1sXFxcIj5JU088L2E+LCBhZGVtw6FzLCBlcyBmw6FjaWwgZW5jb250cmFyXFxubWljcm9jb250cm9sYWRvcmVzIHkgcGxhY2FzIGRlIGRlc2Fycm9sbG8gY29uIGNvbnRyb2xhZG9yZXMgQ0FOIGludGVncmFkb3MsIGFsZ3VuYXMgZW1wcmVzYXMgcXVlIGJyaW5kYW4gZGlzcG9zaXRpdm9zIGNvbiBDQU46PC9wPlxcbjx1bD5cXG48bGk+U1RNaWNyb2VsZWN0cm9uaWNzPC9saT5cXG48bGk+TlhQPC9saT5cXG48bGk+TWljcm9jaGlwPC9saT5cXG48bGk+RXNwcmVzc2lmPC9saT5cXG48bGk+VGV4YXMgSW5zdHJ1bWVudHM8L2xpPlxcbjwvdWw+XFxuPHA+Q0FOIG5vIGRlZmluZSBuaW5nw7puIHRpcG8gZGUgY29uZWN0b3IgcGFyYSBlbCBidXMgQ0FOPC9wPlxcbjxoMSBpZD1cXFwiY2FuLWVzdGFuZGFyLXktZXh0ZW5kaWRvXFxcIj48YSBpZD1cXFwidXNlci1jb250ZW50LWNhbi1lc3TDoW5kYXIteS1leHRlbmRpZG9cXFwiIGNsYXNzPVxcXCJhbmNob3JcXFwiIGhyZWY9XFxcIiNjYW4tZXN0w6FuZGFyLXktZXh0ZW5kaWRvXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PHN2ZyBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcIm9jdGljb24gb2N0aWNvbi1saW5rXFxcIiBoZWlnaHQ9XFxcIjE2XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdib3g9XFxcIjAgMCAxNiAxNlxcXCIgd2lkdGg9XFxcIjE2XFxcIj48cGF0aCBkPVxcXCJNNCA5aDF2MUg0Yy0xLjUgMC0zLTEuNjktMy0zLjVTMi41NSAzIDQgM2g0YzEuNDUgMCAzIDEuNjkgMyAzLjUgMCAxLjQxLS45MSAyLjcyLTIgMy4yNVY4LjU5Yy41OC0uNDUgMS0xLjI3IDEtMi4wOUMxMCA1LjIyIDguOTggNCA4IDRINGMtLjk4IDAtMiAxLjIyLTIgMi41UzMgOSA0IDl6bTktM2gtMXYxaDFjMSAwIDIgMS4yMiAyIDIuNVMxMy45OCAxMiAxMyAxMkg5Yy0uOTggMC0yLTEuMjItMi0yLjUgMC0uODMuNDItMS42NCAxLTIuMDlWNi4yNWMtMS4wOS41My0yIDEuODQtMiAzLjI1QzYgMTEuMzEgNy41NSAxMyA5IDEzaDRjMS40NSAwIDMtMS42OSAzLTMuNVMxNC41IDYgMTMgNnpcXFwiPjwvcGF0aD48L3N2Zz48L2E+Q0FOIGVzdMOhbmRhciB5IGV4dGVuZGlkbzwvaDE+XFxuPHA+U2UgZGVmaW5lbiBkb3MgbW9kb3MgZGUgb3BlcmFjacOzbiBwYXJhIENBTiwgZXN0w6FuZGFyIHkgZXh0ZW5kaWRvLCBhIGNvbnRpbnVhY2nDs24gdmVyZW1vcyBkZSBxdWUgdHJhdGEgY2FkYSB1bm8uPC9wPlxcbjxoMiBpZD1cXFwiY2FuLWVzdGFuZGFyXFxcIj48YSBpZD1cXFwidXNlci1jb250ZW50LWNhbi1lc3TDoW5kYXJcXFwiIGNsYXNzPVxcXCJhbmNob3JcXFwiIGhyZWY9XFxcIiNjYW4tZXN0w6FuZGFyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PHN2ZyBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcIm9jdGljb24gb2N0aWNvbi1saW5rXFxcIiBoZWlnaHQ9XFxcIjE2XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdib3g9XFxcIjAgMCAxNiAxNlxcXCIgd2lkdGg9XFxcIjE2XFxcIj48cGF0aCBkPVxcXCJNNCA5aDF2MUg0Yy0xLjUgMC0zLTEuNjktMy0zLjVTMi41NSAzIDQgM2g0YzEuNDUgMCAzIDEuNjkgMyAzLjUgMCAxLjQxLS45MSAyLjcyLTIgMy4yNVY4LjU5Yy41OC0uNDUgMS0xLjI3IDEtMi4wOUMxMCA1LjIyIDguOTggNCA4IDRINGMtLjk4IDAtMiAxLjIyLTIgMi41UzMgOSA0IDl6bTktM2gtMXYxaDFjMSAwIDIgMS4yMiAyIDIuNVMxMy45OCAxMiAxMyAxMkg5Yy0uOTggMC0yLTEuMjItMi0yLjUgMC0uODMuNDItMS42NCAxLTIuMDlWNi4yNWMtMS4wOS41My0yIDEuODQtMiAzLjI1QzYgMTEuMzEgNy41NSAxMyA5IDEzaDRjMS40NSAwIDMtMS42OSAzLTMuNVMxNC41IDYgMTMgNnpcXFwiPjwvcGF0aD48L3N2Zz48L2E+Q0FOIGVzdMOhbmRhcjwvaDI+XFxuPHA+VW5hIHRyYW1hIGVuIENBTiBlc3TDoW5kYXIgdGllbmUgbGEgc2lndWllbnRlIGZvcm1hPC9wPlxcbjxkaXYgc3R5bGU9XFxcIm92ZXJmbG93LXg6IGF1dG9cXFwiPlxcbjx0YWJsZT5cXG48dGhlYWQ+XFxuPHRyPlxcbjx0aD5TT0Y8L3RoPlxcbjx0aD5JZGVudGlmaWNhZG9yPC90aD5cXG48dGg+UlRSPC90aD5cXG48dGg+SURFPC90aD5cXG48dGg+cjA8L3RoPlxcbjx0aD5ETEM8L3RoPlxcbjx0aD5kYXRvczwvdGg+XFxuPHRoPkNSQzwvdGg+XFxuPHRoPkFDSzwvdGg+XFxuPHRoPkVPRjwvdGg+XFxuPHRoPklGUzwvdGg+XFxuPC90cj5cXG48L3RoZWFkPlxcbjx0Ym9keT48L3Rib2R5PlxcbjwvdGFibGU+XFxuPC9kaXY+XFxuPHA+Q2FkYSB1bm8gZGUgZXN0b3MgY2FtcG9zIGNvbnN0YSBkZSAxIGJpdCBhIG1lbm9zIHF1ZSBzZSBpbmRpcXVlIGxvIGNvbnRyYXJpby48L3A+XFxuPHVsPlxcbjxsaT5TT0YgKFN0YXJ0IE9mIEZyYW1lKTogZXMgZG9taW5hbnRlIGUgaW5kaWNhIGVsIGluaWNpbyBkZSBsYSB0cmFtYTwvbGk+XFxuPGxpPklkZW50aWZpY2Fkb3I6IDExIGJpdHMsIGVzdGFibGVjZSBsYSBwcmlvcmlkYWQgZGVsIG1lbnNhamUsIGxvcyBtZW5zYWplcyBjb24gbcOhcyBwcmlvcmlkYWQgdGllbmVuIHZhbG9yZXMgbcOhcyBiYWpvcywgcG9yIGVqZW1wbG8sIGVsIGlkICZxdW90OzAmcXVvdDsgZXMgZWwgZGUgbWF5b3IgcHJpb3JpZGFkLjwvbGk+XFxuPGxpPlJUUiAoUmVtb3RlIFRyYW5zbWlzc2lvbiBSZXF1ZXN0KTogZXN0ZSBiaXQgZXMgZG9taW5hbnRlIGN1YW5kbyBzZSBzb2xpY2l0YSBpbmZvcm1hY2nDs24gZGUgb3RybyBub2RvLjwvbGk+XFxuPGxpPklERSAoSWRlbnRpZmllciBFeHRlbnNpb24pOiBlcyB1biBiaXQgZG9taW5hbnRlIHBhcmEgaW5kaWNhciBxdWUgZXMgQ0FOIGVzdMOhbmRhciwgZXMgcmVjZXNpdm8gcGFyYSBpbmRpY2FyIHF1ZSBlcyBDQU4gZXh0ZW5kaWRvLjwvbGk+XFxuPGxpPnIwIChyZXNlcnZlZCk6IGJpdCByZXNlcnZhZG88L2xpPlxcbjxsaT5ETEMgKERhdGEgTGVuZ3RoIENvZGUpOiA0IGJpdHMgcXVlIGluZGljYW4gbGEgY2FudGlkYWQgZGUgYnl0ZXMgcXVlIHNlIHRyYW5zbWl0aXLDoW48L2xpPlxcbjxsaT5EYXRhOiBoYXN0YSA2NCBiaXRzLCBzb24gbG9zIGRhdG9zIHF1ZSBzZSBkZXNlYW4gdHJhbnNtaXRpci48L2xpPlxcbjxsaT5DUkMgKEN5Y2xpYyBSZWR1bmRhbmN5IENoZWNrKTogMTYgYml0cyAoMTUgeSB1biBkZWxpbWl0YWRvciksIGVzdGEgcGFydGUgY29udGllbmUgZWwgY2hlY2tzdW0geSBzZSB1dGlsaXphIHBhcmEgZGV0ZWN0YXIgZXJyb3Jlcy48L2xpPlxcbjxsaT5BQ0sgKEFja25vd2xlZGdtZW50KTogMiBiaXRzLCB1bm8gZXMgZWwgQUNLIHkgb3RybyBlcyB1biBkZWxpbWl0YWRvciwgY2FkYSBub2RvIHF1ZSByZWNpYmEgdW4gbWVuc2FqZSBjb3JyZWN0bywgc29icmVlc2NyaWJlIGVzdGUgYml0LCBpbmljaWFsbWVudGUgcmVjZXNpdm8gcG9yIHVuIGJpdCBkb21pbmFudGUuPC9saT5cXG48bGk+RU9GIChFbmQgT2YgRnJhbWUpOiA3IGJpdHMsIG1hcmNhIGVsIGZpbiBkZSBsYSB0cmFtYSBDQU4sIHRpZW5lIGZpbmVzIGRlIHZlcmlmaWNhY2nDs24gZGUgZXJyb3Jlcy48L2xpPlxcbjxsaT5JRlMgKEludGVyZnJhbWUgU3BhY2UpOiBjb250aWVuZSBlbCB0aWVtcG8gcmVxdWVyaWRvIHBvciB1biBjb250cm9sYWRvciBwYXJhIG1vdmVyIHVuYSB0cmFtYSBjb3JyZWN0YSBhIHVuIGJ1ZmZlciBkZSBtZW5zYWplcyAocGFyYSBsYSBhcGxpY2FjacOzbikuPC9saT5cXG48L3VsPlxcbjxoMiBpZD1cXFwiY2FuLWV4dGVuZGlkb1xcXCI+PGEgaWQ9XFxcInVzZXItY29udGVudC1jYW4tZXh0ZW5kaWRvXFxcIiBjbGFzcz1cXFwiYW5jaG9yXFxcIiBocmVmPVxcXCIjY2FuLWV4dGVuZGlkb1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjxzdmcgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJvY3RpY29uIG9jdGljb24tbGlua1xcXCIgaGVpZ2h0PVxcXCIxNlxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Ym94PVxcXCIwIDAgMTYgMTZcXFwiIHdpZHRoPVxcXCIxNlxcXCI+PHBhdGggZD1cXFwiTTQgOWgxdjFINGMtMS41IDAtMy0xLjY5LTMtMy41UzIuNTUgMyA0IDNoNGMxLjQ1IDAgMyAxLjY5IDMgMy41IDAgMS40MS0uOTEgMi43Mi0yIDMuMjVWOC41OWMuNTgtLjQ1IDEtMS4yNyAxLTIuMDlDMTAgNS4yMiA4Ljk4IDQgOCA0SDRjLS45OCAwLTIgMS4yMi0yIDIuNVMzIDkgNCA5em05LTNoLTF2MWgxYzEgMCAyIDEuMjIgMiAyLjVTMTMuOTggMTIgMTMgMTJIOWMtLjk4IDAtMi0xLjIyLTItMi41IDAtLjgzLjQyLTEuNjQgMS0yLjA5VjYuMjVjLTEuMDkuNTMtMiAxLjg0LTIgMy4yNUM2IDExLjMxIDcuNTUgMTMgOSAxM2g0YzEuNDUgMCAzLTEuNjkgMy0zLjVTMTQuNSA2IDEzIDZ6XFxcIj48L3BhdGg+PC9zdmc+PC9hPkNBTiBleHRlbmRpZG88L2gyPlxcbjxwPlVuYSB0cmFtYSBDQU4gdGllbmUgbGEgc2lndWllbnRlIGZvcm1hLjwvcD5cXG48ZGl2IHN0eWxlPVxcXCJvdmVyZmxvdy14OiBhdXRvXFxcIj5cXG48dGFibGU+XFxuPHRoZWFkPlxcbjx0cj5cXG48dGg+U09GPC90aD5cXG48dGg+SWRlbnRpZmljYWRvcjwvdGg+XFxuPHRoPlNSUjwvdGg+XFxuPHRoPklERTwvdGg+XFxuPHRoPklkZW50aWZpY2Fkb3I8L3RoPlxcbjx0aD5yMTwvdGg+XFxuPHRoPnIwPC90aD5cXG48dGg+RExDPC90aD5cXG48dGg+RGF0YTwvdGg+XFxuPHRoPkNSQzwvdGg+XFxuPHRoPkFDSzwvdGg+XFxuPHRoPkVPRjwvdGg+XFxuPHRoPklGUzwvdGg+XFxuPC90cj5cXG48L3RoZWFkPlxcbjx0Ym9keT48L3Rib2R5PlxcbjwvdGFibGU+XFxuPC9kaXY+XFxuPHA+TG9zIGJpdHMgc29uIGxvcyBtaXNtb3MsIHNhbHZvOjwvcD5cXG48dWw+XFxuPGxpPlNSUiAoU3Vic3RpdHV0ZSBSZW1vdGUgUmVxdWVzdCk6IGVzIHVuIHBsYWNlaG9sZGVyLjwvbGk+XFxuPGxpPklERTogYWhvcmEgZXMgcmVjZXNpdm8gcGFyYSBpbmRpY2FyIHF1ZSBsb3Mgc2lndWllbnRlcyAxOCBiaXRzIGJpdHMgZm9ybWFuIHBhcnRlIGRlbCBpZGVudGlmaWNhZG9yLjwvbGk+XFxuPGxpPnIxOiB1biBiaXQgbcOhcyByZXNlcnZhZG88L2xpPlxcbjwvdWw+XFxuPGgxIGlkPVxcXCJtZW5zYWplc1xcXCI+PGEgaWQ9XFxcInVzZXItY29udGVudC1tZW5zYWplc1xcXCIgY2xhc3M9XFxcImFuY2hvclxcXCIgaHJlZj1cXFwiI21lbnNhamVzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PHN2ZyBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcIm9jdGljb24gb2N0aWNvbi1saW5rXFxcIiBoZWlnaHQ9XFxcIjE2XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdib3g9XFxcIjAgMCAxNiAxNlxcXCIgd2lkdGg9XFxcIjE2XFxcIj48cGF0aCBkPVxcXCJNNCA5aDF2MUg0Yy0xLjUgMC0zLTEuNjktMy0zLjVTMi41NSAzIDQgM2g0YzEuNDUgMCAzIDEuNjkgMyAzLjUgMCAxLjQxLS45MSAyLjcyLTIgMy4yNVY4LjU5Yy41OC0uNDUgMS0xLjI3IDEtMi4wOUMxMCA1LjIyIDguOTggNCA4IDRINGMtLjk4IDAtMiAxLjIyLTIgMi41UzMgOSA0IDl6bTktM2gtMXYxaDFjMSAwIDIgMS4yMiAyIDIuNVMxMy45OCAxMiAxMyAxMkg5Yy0uOTggMC0yLTEuMjItMi0yLjUgMC0uODMuNDItMS42NCAxLTIuMDlWNi4yNWMtMS4wOS41My0yIDEuODQtMiAzLjI1QzYgMTEuMzEgNy41NSAxMyA5IDEzaDRjMS40NSAwIDMtMS42OSAzLTMuNVMxNC41IDYgMTMgNnpcXFwiPjwvcGF0aD48L3N2Zz48L2E+TWVuc2FqZXM8L2gxPlxcbjxoMiBpZD1cXFwiYXJiaXRyYWplXFxcIj48YSBpZD1cXFwidXNlci1jb250ZW50LWFyYml0cmFqZVxcXCIgY2xhc3M9XFxcImFuY2hvclxcXCIgaHJlZj1cXFwiI2FyYml0cmFqZVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjxzdmcgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJvY3RpY29uIG9jdGljb24tbGlua1xcXCIgaGVpZ2h0PVxcXCIxNlxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Ym94PVxcXCIwIDAgMTYgMTZcXFwiIHdpZHRoPVxcXCIxNlxcXCI+PHBhdGggZD1cXFwiTTQgOWgxdjFINGMtMS41IDAtMy0xLjY5LTMtMy41UzIuNTUgMyA0IDNoNGMxLjQ1IDAgMyAxLjY5IDMgMy41IDAgMS40MS0uOTEgMi43Mi0yIDMuMjVWOC41OWMuNTgtLjQ1IDEtMS4yNyAxLTIuMDlDMTAgNS4yMiA4Ljk4IDQgOCA0SDRjLS45OCAwLTIgMS4yMi0yIDIuNVMzIDkgNCA5em05LTNoLTF2MWgxYzEgMCAyIDEuMjIgMiAyLjVTMTMuOTggMTIgMTMgMTJIOWMtLjk4IDAtMi0xLjIyLTItMi41IDAtLjgzLjQyLTEuNjQgMS0yLjA5VjYuMjVjLTEuMDkuNTMtMiAxLjg0LTIgMy4yNUM2IDExLjMxIDcuNTUgMTMgOSAxM2g0YzEuNDUgMCAzLTEuNjkgMy0zLjVTMTQuNSA2IDEzIDZ6XFxcIj48L3BhdGg+PC9zdmc+PC9hPkFyYml0cmFqZTwvaDI+XFxuPHA+VW5hIGNhcmFjdGVyw61zdGljYSBtdXkgaW1wb3J0YW50ZSBkZSBDQU4gZXMgcXVlIGN1ZW50YSBjb24gZG9zIHNlw7FhbGVzIHBhcmEgbGEgdHJhbnNtaXNpw7NuIGRlIGRhdG9zOiBDQU4gSCB5IENBTiBMLCBlbWl0ZW4gZWwgbWlzbW9cXG5tZW5zYWplIHBlcm8gY29uIGzDs2dpY2Egb3B1ZXN0YSwgbGEgcmF6w7NuIGRlIGVzdG8gZXMgZ2FyYW50aXphciBtw6FzIHNlZ3VyaWRhZCB5IHRvbGVyYW5jaWEgYSBmYWxsb3MuPC9wPlxcbjxwPlB1ZXN0byBxdWUgZXMgdW4gYnVzIGRlIG5vZG9zIHkgbm8gaGF5IHVuIG9yZGVuIGVzcGVjw61maWNvIHBhcmEgZW52aWFyIG1lbnNhamVzLCBvY3VycmUgYWxnbyBsbGFtYWRvIGFyYml0cmFqZSwgZW4gbGFcXG5xdWUgbG9zIG1lbnNhamVzIGRlIG1heW9yIHByaW9yaWRhZCBvY3VycmVuIGFudGVzIHF1ZSBsb3MgZGUgbWVub3IgcHJpb3JpZGFkLjwvcD5cXG48aDIgaWQ9XFxcInRpcG9zLWRlLW1lbnNhamVzXFxcIj48YSBpZD1cXFwidXNlci1jb250ZW50LXRpcG9zLWRlLW1lbnNhamVzXFxcIiBjbGFzcz1cXFwiYW5jaG9yXFxcIiBocmVmPVxcXCIjdGlwb3MtZGUtbWVuc2FqZXNcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48c3ZnIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwib2N0aWNvbiBvY3RpY29uLWxpbmtcXFwiIGhlaWdodD1cXFwiMTZcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld2JveD1cXFwiMCAwIDE2IDE2XFxcIiB3aWR0aD1cXFwiMTZcXFwiPjxwYXRoIGQ9XFxcIk00IDloMXYxSDRjLTEuNSAwLTMtMS42OS0zLTMuNVMyLjU1IDMgNCAzaDRjMS40NSAwIDMgMS42OSAzIDMuNSAwIDEuNDEtLjkxIDIuNzItMiAzLjI1VjguNTljLjU4LS40NSAxLTEuMjcgMS0yLjA5QzEwIDUuMjIgOC45OCA0IDggNEg0Yy0uOTggMC0yIDEuMjItMiAyLjVTMyA5IDQgOXptOS0zaC0xdjFoMWMxIDAgMiAxLjIyIDIgMi41UzEzLjk4IDEyIDEzIDEySDljLS45OCAwLTItMS4yMi0yLTIuNSAwLS44My40Mi0xLjY0IDEtMi4wOVY2LjI1Yy0xLjA5LjUzLTIgMS44NC0yIDMuMjVDNiAxMS4zMSA3LjU1IDEzIDkgMTNoNGMxLjQ1IDAgMy0xLjY5IDMtMy41UzE0LjUgNiAxMyA2elxcXCI+PC9wYXRoPjwvc3ZnPjwvYT5UaXBvcyBkZSBtZW5zYWplczwvaDI+XFxuPHA+RW4gQ0FOIGhheSA0IHRpcG9zIGRlIG1lbnNhamVzOjwvcD5cXG48dWw+XFxuPGxpPkRhdGEgRnJhbWU6IGVzIGVsIG1lbnNhamUgbcOhcyBjb23Dum4sIHRhbCBjdWFsIHN1IG5vbWJyZSBkaWNlLCBlcyBwYXJhIHRyYW5zbWl0aXIgZGF0b3MuPC9saT5cXG48bGk+UmVtb3RlIEZyYW1lOiBzaXJ2ZSBwYXJhIHNvbGljaXRhciBkYXRvcyBkZSBvdHJvIG5vZG8sIGxvcyBlc3BlY8OtZmljYSBlbCBiaXQgUlRSPC9saT5cXG48bGk+RXJyb3IgRnJhbWU6IGVzIHVuYSB0cmFtYSBxdWUgbm8gY3VtcGxlIGNvbiBsbyBlc3BlY2lmaWNhZG8gcG9yIENBTiwgc2kgc2UgZW52w61hIHVuYSB0cmFtYSBkZSBlcnJvciwgdG9kb3MgbG9zIGRlbcOhcyBub2RvcyBlbnZpYXLDoW4gdW5hIHRyYW1hIGRlIGVycm9yLCBsYSByYXrDs24gZGUgZXN0byBlcyBwYXJhIHF1ZSBlbCBub2RvIHF1ZSBlbnZpw7MgZWwgbWVuc2FqZSBzZSBlbnRlcmUgZGUgc3UgZXJyb3IuPC9saT5cXG48bGk+VmFsaWQgRnJhbWU6IHVuYSB0cmFtYSBlcyBsaWJyZSBkZSBlcnJvcmVzIHNpIGVsIMO6bHRpbW8gYml0IGRlIEVPRiBlcyByZWNpYmlkby48L2xpPlxcbjwvdWw+XFxuPGgxIGlkPVxcXCJmaW5cXFwiPjxhIGlkPVxcXCJ1c2VyLWNvbnRlbnQtZmluXFxcIiBjbGFzcz1cXFwiYW5jaG9yXFxcIiBocmVmPVxcXCIjZmluXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PHN2ZyBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcIm9jdGljb24gb2N0aWNvbi1saW5rXFxcIiBoZWlnaHQ9XFxcIjE2XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdib3g9XFxcIjAgMCAxNiAxNlxcXCIgd2lkdGg9XFxcIjE2XFxcIj48cGF0aCBkPVxcXCJNNCA5aDF2MUg0Yy0xLjUgMC0zLTEuNjktMy0zLjVTMi41NSAzIDQgM2g0YzEuNDUgMCAzIDEuNjkgMyAzLjUgMCAxLjQxLS45MSAyLjcyLTIgMy4yNVY4LjU5Yy41OC0uNDUgMS0xLjI3IDEtMi4wOUMxMCA1LjIyIDguOTggNCA4IDRINGMtLjk4IDAtMiAxLjIyLTIgMi41UzMgOSA0IDl6bTktM2gtMXYxaDFjMSAwIDIgMS4yMiAyIDIuNVMxMy45OCAxMiAxMyAxMkg5Yy0uOTggMC0yLTEuMjItMi0yLjUgMC0uODMuNDItMS42NCAxLTIuMDlWNi4yNWMtMS4wOS41My0yIDEuODQtMiAzLjI1QzYgMTEuMzEgNy41NSAxMyA5IDEzaDRjMS40NSAwIDMtMS42OSAzLTMuNVMxNC41IDYgMTMgNnpcXFwiPjwvcGF0aD48L3N2Zz48L2E+RmluPC9oMT5cXG48cD5BdW5xdWUgcXVlZGFyb24gbXVjaGFzIGNvc2FzIHNpbiBleHBsaWNhciwgZXNwZXJvIHF1ZSBoYXlhIHNlcnZpZG8gY29tbyB1bmEgcGVxdWXDsWEgaW50cm9kdWNjacOzbiBhbCBwcm90b2NvbG8gQ0FOLjwvcD5cXG48cD5FcyB1biBwcm90b2NvbG8gbXV5IGludGVyZXNhbnRlIHF1ZSBkZWJlcsOtYXMgY29uc2lkZXJhciBzaSBuZWNlc2l0YXMgYWxnbyBjb25maWFibGUgbyBwaWVuc2FzIHV0aWxpemFybG8gZW4gdW4gc2VjdG9yIGNvbW8gbGEgYXV0b21hdGl6YWNpw7NuLjwvcD5cXG5cIixcbiAgICBcbiAgICAgIG1ldGE6IHtcInJlc291cmNlUGF0aFwiOlwiL2hvbWUvcnVubmVyL3dvcmsvYWxhbi1ibG9nL2FsYW4tYmxvZy9jb250ZW50L2Jsb2cvMjAyMC0wNy0xNy1jYW4ubWRcIn0sXG4gICAgIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///284\n')}}]);