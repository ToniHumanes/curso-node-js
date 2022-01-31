


function hola(nombre , callback){
    setTimeout(() => {
        console.log(`Hola ${nombre}`)
        callback(nombre);
    }, 1000);
}

function hablar(callbackHablar){
    setTimeout(() => {
        console.log('bla bla bla');
        callbackHablar();
    }, 1000);
}

function adios(nombre, callback){
    setTimeout(() => {
        console.log('Adios', nombre);
        callback(nombre);
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if( veces >= 0){
        hablar(function(){
            conversacion(nombre, --veces, callback)
        })
    }else{
        adios(nombre, callback)
    }
}

// - -

console.log('Iniciando proceso...')
hola('Toni', (nombre) => {
    conversacion(nombre, 5, function(){
        console.log('Terminando proceso...')
    })
});
