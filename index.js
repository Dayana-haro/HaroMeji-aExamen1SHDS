// Protocolo de intercambio
var http = require('http');

// Crear servidor
var server = http.createServer();

// Servicio web
function haromejia(req, resp) {
    // Estado satisfactorio 200, mensaje tipo texto plano configurado por JSON
    resp.writeHead(200, { 'Content-Type': 'text/plain' });

    //Mensaje
    resp.write('Dayana Haro Mejía\n');
    resp.write('Edad: 20 años\n');
    resp.write('Estudiante de la carrera de Desarrollo de Software\n');
    resp.write('Hobbies:\n');
    resp.write('- Leer\n');
    resp.write('- Hacer deporte\n');
    resp.write('- Mirar series relacionadas con romance y criminología\n');

    // Finalizar la comunicación entre cliente y servidor
    resp.end();
}

server.on('request', haromejia);

server.listen(3002, function () {
    console.log("La aplicación está corriendo en el puerto 3001");
});