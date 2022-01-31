

const { exec, spawn } = require('child_process');


// exec('node modules/consola.js', (err, stdout, sterr) => {
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);

// });

let process = spawn('ls', ['-la']);

console.log(process.connected)

process.stdout.on('data', (dato) => {
    console.log(process.killed)
    console.log(dato.toString());
});

process.on('exit', () => {
    console.log('Proceso terminado')
    console.log(process.kill)
})