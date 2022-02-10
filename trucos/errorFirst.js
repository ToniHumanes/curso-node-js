

function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error, null)
        }
    }, 1000);
}

asincrona((err, data) => {
    if(err){
        console.error('tenemos un error', err);
        return false;
    }

    console.log('Todo ha ido bien, mi dato es: ', data)
})

// el patron throw solo funciona en funcines sincronas, ya que requiere de un try catch para funcionar

// Para funciones asincronas utilizar error frist callback