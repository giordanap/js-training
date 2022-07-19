
// function createPerson = ( name, lastName ) => {
//     return { name, lastName };
// }

const createPerson = ( name, lastName ) => ({ name, lastName });

const person = createPerson( 'Patricia', 'Poma' );
// console.log( person );

// function printArguments() {
//     console.log( arguments );
// }

// const printArguments2 = ( edad, ...args ) => {
//     console.log({ edad, args });
// }

// printArguments2( 28, true, '123', 'Giordan', 4.5 );

const {lastName: newLastName } = createPerson( 'Hunter', 'Africa' );
console.log({ newLastName });

const tony = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    alive: false,
    // age: 40, // si no viene
    dress: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const printProperties = ({ name, codeName, alive, age = 15, dress }) => {
    console.log({ name });
    console.log({ codeName });
    console.log({ alive });
    console.log({ age });
    console.log({ dress });
}

printProperties( tony );