

// const arr = new Array(10);
// const arr = [];
// console.log(arr);

// let videoGames = ['Mario Left 4 Dead', 'Final Figther', 'Call of Dutty'];
// console.log(videoGames);

// console.log(videoGames[0]);
// console.log(videoGames[2]);

// let arrThings = [
//     true,
//     123,
//     'Giordan',
//     1 + 2,
//     function(){},
//     ()=>{},
//     { a: 1 },
//     ['X', 'Y', [
//         'Gabriel', 
//         'Giuseppi',
//         ]
//     ]
// ];

// console.log(arrThings);
// console.log( arrThings[0] );
// console.log( arrThings[2] );
// console.log( arrThings[7][2][1] );

let games = [ 'Zelda', 'Mario', 'Metroid', 'Chrono' ];
console.log('Largo: ', games.length);

let first = games[0];
let last = games[ games.length - 1 ];

console.log({ first, last });

games.forEach( (element, index) => {
    console.log({ element, index })
});

let newLength = games.push( 'Bomberman' );
console.log( newLength, games);

newLength = games.unshift( 'Contra' );
console.log( newLength, games);

let deleteGame = games.pop();
console.log( deleteGame, games);

let pos = 1;
console.log(games);
let deleteGames = games.splice( pos, 2);
console.log( deleteGames, games );

let metroidIndex = games.indexOf('metroid'); // CaSeSeNsItIvE
console.log( metroidIndex );