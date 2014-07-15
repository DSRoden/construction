/* jshint -W069 */
/* global prompt:true */
'use strict';

var prompt = require('sync-prompt').prompt;

// creating a objeect manually five different ways
// add them to a dogs array
// print the array

var dogs = [];

var d1 = {};
d1.name= 'fido';
d1.age = 3;

var d2 = {name:'spot', age:5};

var d3 = {};
d3['name'] = 'lassy';
d3['age'] = 9;

var n = 'rex';
var a = 11;
var d4 = {name:n, age:a};

var name = 'name';
var age = 'age';
var d5 = {};
d5[name] = n;
d5[age] = a;

dogs.push(d1,d2,d3,d4,d5);

console.log('Dogs: ', dogs);

console.log(d1 instanceof Object);
console.log(d1 instanceof Dog);


//creating objects using a constructor 

/*function Dog(name, age){
  this.name = name;
  this.age = age;
  
}

var d6 = new Dog('fluffy', 2);

console.log(d6);
console.log(d6 instanceof Object);
console.log(d6 instanceof Dog);
*/

//create a loop 
//do you want to create a dog
//name 
//age 
//continue or quit 
//then print out the dogs that were created


function Dog(name,age){
  this.name = name;
  this.age = age;
}


var option = prompt('Add a dog? Y/N/Q');

while (option !== 'q') {
  var addName = prompt('Dog name: ');
  var addAge = prompt('Dog age: ');

  var newDog = new Dog(addName, addAge);
  dogs.push(newDog);

 option = prompt('Add a dog? Y/N/Q');
}

console.log(dogs);

