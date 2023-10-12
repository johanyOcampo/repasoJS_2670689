function proceso1(callback) {
    let suma1 = 0;
    setTimeout(() => {
        for (let i = 0; i <= 5000; i++) {
            suma1 += i;
        }
        callback(`Proceso 1: La suma es ${suma1}`);
    }, 5000); 
}

function proceso2(callback) {
    let suma2 = 0;
    setTimeout(() => {
        for (let i = 0; i <= 20000; i++) {
            suma2 += i;
        }
        callback(`Proceso 2: La suma es ${suma2}`);
    }, 8000);
}

function proceso3(callback) {
    let suma3 = 0;
    setTimeout(() => {
        for (let i = 0; i <= 1000; i++) {
            suma3 += i;
        }
        callback(`Proceso 3: La suma es ${suma3}`);
    }, 3000);
}

document.querySelector('#btnBuscar').addEventListener('click', () => {
    proceso1(mensaje => {
        console.log(mensaje);
        proceso2(mensaje => {
            console.log(mensaje);
            proceso3(mensaje => {
                console.log(mensaje);
            });
        });
    });
});