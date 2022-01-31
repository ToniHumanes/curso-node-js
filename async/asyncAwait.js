async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`)
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla');
            resolve(nombre);
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve(nombre);
        }, 1000);
    });
}
async function main(){
    const nombre = 'Toni';
    await hola(nombre);
    await hablar(nombre)
    await adios(nombre);
    console.log('Terminando proceso...')
}

console.log('Iniciando proceso...')
main();