function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function(){
        console.log(`My name is: ${this.name}`);
    };
    this.showStats = function(){
        console.log(`NINJA STATS\n Name: ${name}\n Strength: ${strength}\n Speed: ${speed}\n Health: ${this.health}\n`);
    };
    this.drinkSake = function (){
        this.health += 10;
    }
    this.punch = function (target){
        if(target instanceof Ninja){
            target.health -= 5;
            console.log(`${target.name} was punched by ${this.name} and lost 5 health.`)
        }
        else{
            console.log('You can only punch other ninjas.')
        }
    }
    this.kick = function (target){
        if(target instanceof Ninja){
            let lostHealth = 15 * strength;
            target.health -= lostHealth;
            console.log(`${target.name} was kicked by ${this.name} and lost ${lostHealth} health.`)
        }
        else{
            console.log('You can only kick other ninjas.')
        }
    }
}

var ninja1 = new Ninja("Hyabusa");

// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();

var blueNinja = new Ninja("Muramasa");
var redNinja = new Ninja("Mas Oyama");

redNinja.punch(blueNinja);
blueNinja.kick(redNinja);

redNinja.showStats();
blueNinja.showStats();
