'use strict'; 

function Room(name, length, width, floor, color, height){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
  this.floor = floor;
  this.color = color;
  this.height = parseInt(height);
}

Room.prototype.area = function(){
  return this.length * this.width;
};



Room.prototype.cost = function() {

    var rate, total = 0; 

  switch (this.floor) {
    case 'carpet':
     rate =  15;
     break;
    case 'tile':
    rate = 12;
    break;
    case 'wood':
     rate = 10;
}
  total += rate * this.area();
  total += 2 * 0.50 * (this.width * this.height);
  total += 2 * 0.50 * (this.length * this.height);
  return total;
  
};

module.exports = Room;

