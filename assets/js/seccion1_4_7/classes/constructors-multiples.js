

class Person {

    static byObject({ name, lastName, country }) {
        return new Person( name, lastName, country );
    }

    constructor( name, lastName, country ) {

        this.name     = name;
        this.lastName = lastName;
        this.country  = country;

    }

    getInfo() {
        console.log(`info: ${ this.name }, ${ this.lastName }, ${ this.country }`);
    }

}

const name1     = 'Giordan',
      lastName1 = 'Arredondo',
      country1  = 'Peru';

const pats = {
    name: 'Patricia',
    lastName: 'Poma',
    country: 'Peru'
}

const person1 = new Person( name1, lastName1, country1 );
const person2 = Person.byObject( pats );

person1.getInfo();
person2.getInfo();




