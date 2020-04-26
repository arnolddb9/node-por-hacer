const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    demand: true,
    desc: 'Marca como completada la tarea por hacer'
}


const Actualiza = {
    descripcion,
    completado
}

const Crear = {
    descripcion
}

const Borrar = {
    descripcion
}


const argv = require('yargs')
    //.command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'crear un elemento por hacer', Crear)
    .command('actualizar', 'Actualiza el estado completo de una tarea', Actualiza)
    .command('borrar', 'borrar un elemento por hacer', Borrar)
    .help()
    .argv;


module.exports = {
    argv
}