const empleados = [
    {
        id: 1,
        nombre: 'Juan',
    },
    {
        id: 2,
        nombre: 'Lorena',
    },
    {
        id: 1,
        nombre: 'Henry',
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 5000
    }
];

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( e => e.id === id )?.nombre;

    if ( empleado ) {
        callback(null, empleado);
        return;
    }

    callback( `Empleado con id ${ id } no existe`);
}

const getSalario = ( id, callback ) => {
    const salario = salarios.find( s => s.id === id )?.salario;
    if ( salario ) {
        callback( null, salario );
        return;
    }

    callback( `El empleado con el id ${ id } no tiene salario` );
}

const id = 1;

getEmpleado( id, ( err, empleado ) => {
    if ( err ) {
        console.log( 'Error!' );
        return console.log( err );
    }

    getSalario( id, ( err, salario ) => {
        if ( err ) {
            console.log( 'Error!' );
            return console.log( err );
        }
    
        console.log( `El empleado: ${ empleado }, tiene un salario de: ${ salario }` );
    });
});

