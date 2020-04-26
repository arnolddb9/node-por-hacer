const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        //console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();
        console.log('=========Por Hacer======='.green);
        for (let tarea of listado) {

            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);

        }
        console.log('========================='.green);
        //console.log('Mostar todas las tareas por hacer');
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        console.log(argv.descripcion);
        let bor = porHacer.borrar(argv.descripcion);
        console.log(bor);
        break;

    default:
        console.log('Comando no reconocido');


}