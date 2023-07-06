

class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName(){
        console.log(`${this.name}`)
    }
    showStats(){
        console.log(`${this.name}, ${this.health},${this.speed},${this.strength}`)
    }
    drinkShake(){
        this.health += 10
    }
    
}


const ninja1 = new Ninja("Hyabusa", 90, 3, 3);
ninja1.sayName();
ninja1.showStats();