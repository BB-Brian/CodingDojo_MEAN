//////////////////////////// HUNDRED ACRE WOOD ////////////////////////////

var tigger = {character: "Tigger"};
var winnie = {character: "Winnie the Pooh"};
var piglet = {character: "Piglet"};
var bees = {character: "Bees"};
var owl = {character: "Owl"};
var christopher = {character: "Christopher"};
var rabbit = {character: "Rabbit"};
var gopher = {character: "Gopher"};
var kango = {character: "Kango"};
var eeyore = {character: "Eeyore"};
var heffalumps = {character: "Heffalumps"};

tigger.north = winnie;

winnie.north = christopher;
winnie.south = tigger;
winnie.east = bees;
winnie.west = piglet;

piglet.north = owl;
piglet.east = winnie;

bees.north = rabbit;
bees.west = winnie;

owl.south = piglet;
owl.east = christopher;

christopher.north = kango;
christopher.south = winnie;
christopher.east = rabbit;
christopher.west = owl;

rabbit.south = bees;
rabbit.east = gopher;
rabbit.west = christopher;

gopher.west = rabbit;

kango.north = eeyore;
kango.south = christopher;

eeyore.south = kango;
eeyore.east = heffalumps;

heffalumps.west = eeyore;

//////////////////////////// TRAVELING ////////////////////////////

var player = {
    location: tigger
}

function move(str){
    readline();
    message = "You are now at " + player.location + "'s house.";
    if(input == "north"){
        player.location = winnie;
        console.log(message);
    }
}

move();