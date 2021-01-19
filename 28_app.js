// tipos de requires:
//const fs = require('fs'); // Librerías que pertenecen a Nodejs.
//const fs = require('express'); // Libreria que no es nativa de Node. Desarrollados de forma externa y se instala para su uso.
//const fs = require('./ps'); // Archivos que nosotros mismo creamos en el proyecto. Se indica su ruta en el directorio.

// Requires:
const argv = require('./config/yargs').argv; // Dentro del objeto argv se busca utilizar la propiedad argv
const colors = require('colors');

// Importación módulos:
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0]; // Recoge el primer comando del arreglo que contiene argv y lo almacena en la var

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//let base = '4';

let argv2 = process.argv;

console.log('Limite', argv.limite);
console.log(argv2);

/* let parametro = argv[2];
let base = parametro.split('=')[1]; */