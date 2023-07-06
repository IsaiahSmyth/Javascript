const Ninja = require('./ninja.js')
const Sensei = require('./sensei.js')





const ninja1 = new Ninja("Hyabusa", 90, 3, 3);


ninja1.sayName();
ninja1.showStats();




const superSensei = new Sensei ('Master Splinter', 210, 10, 10, 10);

superSensei.drinkShake();
superSensei.drinkShake();
superSensei.drinkShake();
superSensei.drinkShake();
superSensei.drinkShake();
superSensei.showStats();