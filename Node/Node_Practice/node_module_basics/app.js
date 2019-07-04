// requiring (or 'importing') a module (another file) - where an object is retured from the module we are requiring

var my_module = require('./my_module');
my_module.greet();
my_module.add(5,6);


// Alternate: requiring (or 'importing') a module (another file) - where function is retured from the module we are requiring

// var my_module = require('./my_module') ();      // notice the extra invoation parentheses!
// console.log(my_module);
// my_module.greet();
// my_module.add(5,6);