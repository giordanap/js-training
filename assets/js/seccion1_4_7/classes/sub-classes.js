class Person {

    static _conteo = 0;
    
    static get conteo() {
        return `${ Person._conteo } instancias`;
    }

    static message() {
        console.log( this.name );
        console.log( 'Hi I am a static method');
    }

    name   = '';
    code   = '';
    phrase = '';
    food   = '';

    constructor( name = 'Nameless', code = 'Codeless', phrase = 'Phraseless') {

        this.name = name;
        this.code = code;
        this.phrase = phrase;

        Person._conteo++;

    }

    set setFavoriteFood( food ) {
        this.food = food.toUpperCase();
    }

    get getFavoriteFood() {
        return `${ this.name }'s favorite food is ${ this.food }`;
    }

    whoAm () {
        console.log(`Hello, my name is ${ this.name } and my code is ${ this.code }`);
    }

    myPhrase() {
        this.whoAm();
        console.log(`My phrase is ${ this.phrase }`);
    }

}

class Hero extends Person {

    clan = 'clanless';

    constructor(  name, code, phrase ) {

        super( name, code, phrase);
        this.clan;
    }

    whoAm() {
        console.log( `I'm ${ this.name }, ${ this.clan }`);
        super.whoAm();
    }

}

const spiderman = new Hero( 'Peter Parker', 'Spider man', `I'm your good friend Spider man` );
console.log( spiderman );
spiderman.whoAm();
















