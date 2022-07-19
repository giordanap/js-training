
function greet( name ) {
    // console.log( arguments )
    // console.log( `Hello ${ name }` );
    return [1,2];
    // Este codigo no sera ejecutado
}

const greet2 = function( name ) {
    console.log( `Hello ${ name }` );
}

const arrowGreet = () => {
    console.log( `Hello world!` );
}

const arrowGreet2 = ( name ) => {
    console.log( `Hello ${ name }` );
}

const greetReturn = greet('Giordan', 28, true, 'Lima');
// console.log(greetReturn);

// greet2('Giordan');

// arrowGreet();
// arrowGreet2('Patricia');

function add( a, b ) {
    return a + b;
}

// const add2 = (a, b) => {
//     return a + b;
// }
const add2 = (a, b) => a + b;

// console.log( add(1, 2) );
// console.log( add2(1, 2) );

const getRandom = () => Math.random();
console.log( getRandom() );

