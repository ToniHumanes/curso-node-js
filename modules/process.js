
// const process =  require('process');

// justo al salir del proceso de node
// nos desconectamos del event loop
process.on('exit', () => {
    console.log('ale, acabo')
})

// antes de salir del proceso de node 
process.on('beforeExit', () => {
    console.log('el proceso va a terminar')
})

// para controlar los errores en los procesos de node
process.on('uncaughtException', (err, origin) => {
    console.log('Error:', err, 'origin: ', origin)
});

var a = 1 + z;