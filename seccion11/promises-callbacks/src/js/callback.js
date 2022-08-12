

const heros = {
    cap: {
        name: 'America Captain',
        power: 'Bear injections without dying'
    },
    iron: {
        name: 'Iron Man',
        power: 'Have an absurd amount of money'
    },
    spider: {
        name: 'Spiderman',
        power: 'The best laergic reaction to spider bites'
    },
}

// callbaxck return ...
export const findHero = ( id, callback) => {
    
    const hero = heros[ id ];

    if ( hero ) {

        callback( null, hero );
        
    } else {
        
        callback(`There isn't a hero with id ${ id }`);

    }

}