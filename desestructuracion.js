const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad: 50,
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`;
    }
};

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

//const { nombre, apellido, poder, edad = 0 } = deadpool;
function imprimeHeroe ( { nombre, apellido, poder, edad } ) {
    console.log( nombre, apellido, poder, edad );
}

//imprimeHeroe( deadpool );

const heroes = [ 'Deadpool', 'Superman', 'Batman' ];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [ h1, h2, h3 ] = heroes;
const [ , , h4 ] = heroes;

console.log( h1, h2, h3 );
console.log( h4 );