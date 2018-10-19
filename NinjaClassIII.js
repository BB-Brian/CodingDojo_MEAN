class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    sayName() {
        console.log(`My name is ${this.name}.`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`${this.name} gained 10 health from drinking Sake.`)
    }    
}

const Ninja1 = new Ninja("Michelangelo");
Ninja1.sayName();
Ninja1.showStats();
Ninja1.drinkSake();
Ninja1.showStats();


class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }

    speakWisdom() {

    }
}