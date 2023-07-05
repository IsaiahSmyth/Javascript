import Person from './Person.js'


class Ninja extends Person {
    constructor(name, age, home, skillLevel = 1){
        super(name, age, "Ninja", home)
        console.log("New Ninja created!")

        this.skillLevel = skillLevel

    }
    sayHello(person){
        console.log(`${this.name} : Greetings, ${person.name}, I am a Ninja!`);
    }
}


export default Ninja