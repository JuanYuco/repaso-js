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

const id = 10;
const getEmpleado = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        const empleado = empleados.find( e => e.id === id )?.nombre;
        if ( empleado ) {
            return resolve( empleado );
        }

        reject( `No existe empleado con id ${ id }` );;
    });
}

const getSalario = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        const salario = salarios.find( s => s.id === id )?.salario;
        if ( salario ) {
            return resolve( salario );
        }

        reject( `No existe un salario para el empleado con id ${ id }` );;
    });
}

// getEmpleado(id)
//     .then( empleado => console.log( empleado ) )
//     .catch( err => console.log(err) );

// getSalario(id)
//     .then( salario => console.log( salario ) )
//     .catch( err => console.log(err) );

// getEmpleado(id)
//     .then( empleado => {
//         getSalario( id )
//             .then( salario => {
//                 console.log( `El empleado: ${ empleado }, tiene un salario de: ${ salario }` )
//             })
//             .catch( err => console.log(err) );
//     })
//     .catch( err => console.log(err) );

let nombre;
getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario( id );
    })
    .then( salario => console.log( `El empleado: ${ nombre }, tiene un salario de: ${ salario }` ) )
    .catch( err => console.log(err) );