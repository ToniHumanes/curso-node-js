function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`)
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla');
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve(nombre);
        }, 1000);
    });
}

// - - 
console.log('Iniciando el proceso...')
hola('Toni')
    .then(adios)
    .then(hablar)
    .then(() => {
        console.log('Terminando proceso...')
    })
    .catch( () => {
        console.error('Error...')
    })