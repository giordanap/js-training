
const characters = {
    name: 'Hunter',
    codeName: '1809',
    alive: true,
    age: 1,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    jobs: ['Police Officer', 'Journalist', 'Baker'],
    address: {
        zip: '10880, 90265',
        ubication: 'Lima, SMP'
    },
    'last-movie': 'Infinity War'
};

// console.log(characters);
// console.log('Name: ', characters.name);
// console.log('Name: ', characters['name']);
// console.log('Name: ', characters.name);
// console.log('Longitud: ', characters.address);
// console.log('Nro jobs: ', characters.jobs.length);
// console.log('Last job: ', characters.jobs[characters.jobs.length - 1]);

// const x = 'alive';
// console.log('Alive: ', characters[x]);
// console.log('Last movie: ', characters['last-movie']);

// More details

delete characters.age;

console.log(characters);

characters.married = true;

const entriesPares = Object.entries( characters );
console.log( entriesPares );

// characters = true;}

Object.freeze( characters );

characters.money = 10000000;
characters.married = false;

characters.address.ubication = 'Piura';

console.log( characters );

const properties = Object.getOwnPropertyNames( characters );
const values = Object.values( characters );
console.log({ properties, values });









