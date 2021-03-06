
// podemos medir tiempo que tardan las cosas con .time

let suma = 0;
console.time('bucle')
for (let i = 0; i < 1000000000; i++) {
    suma += 1;
}
console.timeEnd('bucle')




console.time('asincrono')
console.log('Empieza el proceso asincrono')
asincrona()
.then( () => {
    console.timeEnd('asincrono')
});


function asincrona(){
    return new Promise((resolve) => {
        setTimeout(function(){
            console.log('Termina el proceso asincrono')
            resolve();
        }, 1000);
    });
}