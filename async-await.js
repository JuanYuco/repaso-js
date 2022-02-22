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

const getInfoUsuario = async(id) => {
    try {
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id );
        return `El empleado: ${ empleado }, tiene un salario de: ${ salario }`;
    } catch( err ) {
        return err;
    }
    
}

const id = 3;
getInfoUsuario(id)
    .then( msg => console.log(msg) );