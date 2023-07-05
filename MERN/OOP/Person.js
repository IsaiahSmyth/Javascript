class Person {
    constructor(name, age, job, home) {  //Constructors
        this.name  = name;    //'this' is a lot like self!
        this.age = age;
        this.job = job;
        this.home = home;
    }

    birthday() {  //Methods!
        this.age++;
        console.log(`Happy Birthday, ${this.name}!`);
    }

    sayHello(person){
        console.log(`${this.name} : Hello, ${this.name}!`);
    }

}







module.exports = Person;