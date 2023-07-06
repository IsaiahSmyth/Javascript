const Ninja = require('./ninja.js')







class Sensei{
    constructor(name, health, speed, strength, wisdom){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
        this.wisdom = wisdom
    }
    speakWisdom(){
        
    }
    showStats(){
        console.log(`${this.name}, ${this.health},${this.speed},${this.strength},${this.wisdom}`);
    }
    drinkShake(){
        this.health += 10
    }
}

module.exports = Sensei