
const fs = require('fs');
const stream = require('stream')
const util = require('util')

let data = '';
let readeableStream = fs.createReadStream(__dirname + '/input.txt');

// para leer archivos
readeableStream.setEncoding('UTF8')
// readeableStream.on('data', (chunk) => {
//     console.log(chunk)
//     data += chunk;
// });

// readeableStream.on('end', () => {
//     console.log(data);
// })

// para escribir en archivos
// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

const transform = stream.Transform;

function Mayus(params) {
    transform.call(this);
}
util.inherits(Mayus, transform);
Mayus.prototype._transform = function(chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus)
    cb();
}

var mayus = new Mayus();

readeableStream
.pipe(mayus)
.pipe(process.stdout);