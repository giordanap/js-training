




let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let patricia = { name: 'Patricia' };
let giordan  = { ...patricia };
giordan.name = 'Giordan';

console.log({ patricia, giordan });

const nameChange = ({ ...person }) => {
    person.name = 'Tony';
    return person;
}

let peter = { name: 'Peter' };
let tony = nameChange( peter );

console.log( peter, tony );

const fruits = ['apple', 'per', 'pineapple'];

console.time('spread');
const otherFruits = [ ...fruits ];
console.timeEnd('spread');

console.time('slice');
const otherFruits2 = fruits.splice();
console.timeEnd('slice');

otherFruits.push('mangoes');
otherFruits2.push('mangoes');

console.table({ fruits, otherFruits });


















