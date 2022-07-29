
const gap = {
    name: 'Giordan',
    age: 28,
    print () {
        console.log(`Name: ${ name }`)
    }
}

const pats = {
    name: 'Patricia',
    age: 25,
    print () {
        console.log(`Name: ${ pats.name }`)
    }
}

const hunt = {
    name: 'Hunter',
    age: 1,
    print () {
        console.log(`Name: ${ this.name }`)
    }
}

// gap.print();
// pats.print();
// hunt.print();

function Person ( name, age ) {
    console.log('Se ejecutó esta linea');

    this.name = name;
    this.age = age;

    this.print = function() {
        console.log(`Name: ${ this.name } - age: ${ this.age }`);
    }
}

const giordan = new Person('Giordan', 28);
const patricia = new Person('Patricia', 25);
giordan.print();
patricia.print();



















