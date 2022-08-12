

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

export const findHero = ( id ) => {
    
    const hero = heros[ id ];

    return new Promise( ( resolve, reject ) => {

        if ( hero ) {

            setTimeout(() => resolve( hero ), 1000);
            
        } else {
            reject(`There isn't a hero with id ${ id }`);
        }

    });

}


export const findHeroAsync = async ( id ) => {
    
    const hero = heros[ id ];

    if ( hero ) {
        return hero;
    } else {
        throw `There isn't a hero with id ${ id }`;
    }

}


const slowPromise = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Slow Promise'), 2000);
});

const mediumPromise = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Medium Promise'), 1500);
});

const fastPromise = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Fazt Promise'), 1000);
});

export {
    slowPromise,
    mediumPromise,
    fastPromise,
}
