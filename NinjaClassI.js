function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function() {
        console.log(`My name is: ${this.name}`);
    };
    this.showStats = function() {
        console.log(`NINJA STATS\n Name: ${name}\n Strength: ${strength}\n Speed: ${speed}\n Health: ${this.health}\n`);
    };
    this.drinkSake = function () {
        this.health += 10;
    }
}


var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


//     Assignment: Ninja Class
// Create a new object constructor called Ninja with the following attributes:
//
// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.
//
// Ninja should have the following methods:
//
// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 Health to the Ninja
