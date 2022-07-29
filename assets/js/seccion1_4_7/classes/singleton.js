

class Singleton {

    static instance;
    name = '';

    constructor( name = '' ) {

        if ( !!Singleton.instance ) return Singleton.instance;

        Singleton.instance = this;
        this.name = name;

    }

}

const instance1 = new Singleton('Iron man');
const instance2 = new Singleton('Spider man');
const instance3 = new Singleton('Balck Panther');

console.log(`Name of the instance1 is: ${ instance1.name }`);
console.log(`Name of the instance2 is: ${ instance2.name }`);
console.log(`Name of the instance3 is: ${ instance3.name }`);











