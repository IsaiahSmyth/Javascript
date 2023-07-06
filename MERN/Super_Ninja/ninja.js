const Sensei = require('./sensei.js')

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
        console.log(`${this.wisdom}`)
    }
    
}





module.exports = Ninja