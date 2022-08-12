
import { findHero, findHeroAsync } from './promises';

const herosIds = ['cap', 'iron', 'spider'];
const herosPromises = herosIds.map( findHero );


export const getHerosArr = async() => await Promise.all( herosIds.map( findHero ) );


export const getHeroAwait = async( id ) => {

    try {

        const hero = await findHeroAsync( id );
    
        return hero;
        
    } catch ( err ) {
    
        console.log( 'CATCH!!!' );
        return {
            name: 'nameless',
            power: 'powerless'
        };
        
    }

}

export const heroCycle = async() => {

    console.time('Heros Cycle');

    for await( const hero of herosPromises ){
        console.log(hero);
    }
    
    console.timeEnd('Heros Cycle');
    
    // const heros = await Promise.all( herosPromises );
    // heros.forEach( hero => console.log(hero) );
}

export const heroIfAwait = async( id ) => {

    if ( ( await findHeroAsync( id ) ).name === 'America Captain' ) {
        console.log('He is the best');
    } else {
        console.log('Naa');
    }

}