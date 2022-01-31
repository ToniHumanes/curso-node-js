

const fs =  require('fs');

function leer(route, cb) {
    fs.readFile(route, (err, data) => {
        cb(data.toString())
    })
}

function escribir(route, content, cb) {
    fs.writeFile(route, content, function(err){
        if(err){
            console.error('No se ha podido escribir el archivo')
        }else{
            console.log('Se ha escrito el archivo');
        }
    });
}


function borrar(route, cb) {
    fs.unlink(route, cb);
}

// leer(__dirname + '/archive.txt', console.log)
// escribir(__dirname + '/archive2.txt', 'soy un archivo nuevo' , console.log)
borrar(__dirname + '/archive2.txt', console.log)