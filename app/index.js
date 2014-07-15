
var Room = require('./room.js');
var House = require('./house.js');

var r1 = new Room('living', 10, 12, 'carpet', 'aqua', 20);
var r2 = new Room('dining', 8, 10, 'tile', 'green', 25);
var r3 = new Room('bed', 9, 11, 'wood', 'orange', 17);

console.log(r1,r2,r3);

var h1 = new House('M-4', 'brick', 1993);
var h2 = new House('M-5', 'stone', 1785);
var h3 = new House('M-6', 'straw', 1832);

h1.rooms.push(r1, r2, r3);
console.log(h1,h2,h3);

console.log('The area of room 1 is: ', r1.area());
console.log('The cost of room 1 is: ', r1.cost());
console.log('The cost of room 1 is: ', r2.cost());
console.log('The cost of room 1 is: ', r3.cost());
console.log('The total area of h1 is: ', h1.area());
console.log('The total cost of h1 is: ', h1.cost());

// create a prototype function for House that determines the 
// cost of each house
// loop throughthe house and determine the cost of each room
// add those costs 
// print otu the total cost 
//

