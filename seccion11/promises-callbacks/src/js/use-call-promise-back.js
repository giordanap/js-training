
import { findHero as findHeroCallback } from './js/callback';
import { findHero} from './js/promises';
import './styles.css';

const heroId1 = 'cap';
const heroId2 = 'iron';
const heroId3 = 'spider';


// findHero( heroId1, ( err, hero1 ) => {
    
//     if ( err ) { return console.error( err ); }
    
//     findHero( heroId2, ( err, hero2 ) => {
        
//         if ( err ) { return console.error( err ); }

//         findHero( heroId3, ( err, hero3 ) => {
        
//             if ( err ) { return console.error( err ); }
    
//             console.log(`Sending to ${ hero1.name }, ${ hero2.name }, y ${ hero3.name } to the mision`);
    
//         });

//     });

// });

// findHero( heroId1 ).then( hero1 => {
//     // console.log(`Sending to ${ hero.name } to the mision`);
//     findHero( heroId2 ).then( hero2 => {
//         console.log(`Sending to ${ hero1.name } y ${ hero2.name } to the mision`);
//     });
// });

Promise.all([ findHero(heroId1), findHero(heroId2) ])
    .then( ([hero1, hero2]) => {

    console.log(`Sending to ${ hero1.name } y ${ hero2.name } to the mision`);
}).catch( err => {

    alert( err );

}).finally ( () => {

    console.log('Finished Promise.all');
    
});

console.log('Fin del programa');

