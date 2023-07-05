import Person from './Person.js';
import Ninja from './Ninja.js';
import Number from './someFile.js';

console.log(Number);

const sarah = new Person('sarah', 31, 'Architect', 'LA');  //Use the ;new' keyword to create an instance
const ricky = new Person('Ricky', 33, 'Welder', 'San Francisco');

const sm = new Ninja("Shadow Master", 26, "The Shadow", 100)


ricky.sayHello(sm)
sm.sayHello(ricky)


sarah.birthday();
ricky.sayHello(sarah);

console.log(sarah);
console.log(ricky);