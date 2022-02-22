// setTimeout( function(){
//     console.log('Hola Mundo');
// }, 1000 );

// setTimeout( () => {
//     console.log('Hola Mundo');
// }, 1000 );

const getUsuarioByID = ( id, callback ) => {
    const usuario = {
        id,
        nombre:'Juan Fernando'
    };

    setTimeout( () => {
        callback( usuario );
    }, 1500 );
}

getUsuarioByID( 10, ( usuario ) => { 
    console.log( usuario );
 });