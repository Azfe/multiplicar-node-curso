const fs = require('fs'); 
const colors = require('colors');

let listarTabla = (base, limite = 10) => { // Por defecto el límite será 10.

    console.log('====================='.green);
    console.log(` === tabla del ${base} ===`.yellow);
    console.log('====================='.green);

    for(let i = 1; i <= limite; i++){ // Muestra la tabla de multiplicar según la base. El limite indica hasta donde debe llegar la tabla
        
        res = base * i;
        console.log(`${base} x ${i} = ${res}`); 
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if(!Number){ // Si se envía un número de tipo string tb es válido
            reject(`El valor introducido ${base} NO es un número`);
            return; // Detiene la ejecución del código
        }
        
        let data = '';

        for(let i = 1; i <= limite; i++){
            res = base * i;
            data += `${base} x ${i} = ${res}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);     
        });
    });
}

// Se exporta el modulo:
module.exports = {
    crearArchivo, // == crearArchivo: crearArchivo
    listarTabla
}