function otraFnc(params) {
    serompe();
}

function serompe() {
    return 3 + x;
}

function fncRompeAsync() {
    setTimeout(() => {
        try {
            return 3 + x;
        } catch (error) {
            console.error(error.message)
        }

    }, 1000);
}

try {
    //serompe();    
    fncRompeAsync()
} catch (error) {
    console.error(error.message)
}