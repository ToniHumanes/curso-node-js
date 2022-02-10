const http = require('http');
http.createServer(router).listen(3000);


function router(request, response) {
    console.log('nueva peticion');
    console.log(request.url);

    switch (request.url) {
        case '/hola':
            response.write('Hola, que tal?');
            response.end();
            break;

        default:
            response.write('Error 404, no se que quieres')
            response.end();
            break;
    }

    // response.writeHead(201, {'Content-Type': 'text/plain'})
    // response.write('Hola, ya se usar http de nodejs')

}

console.log('Escuchando http en el puerto 300')

// Para debugear: node --inspect http.js
// y en el navegador: chrome://inspect