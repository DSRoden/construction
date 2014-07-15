'use strict'; 

function House(name, material, year){
  this.name = name;
  this.material = material;
  this.year = parseInt(year);
  this.rooms = [];
}

module.exports = House;

House.prototype.area = function () {
  var total = 0;
  for (var i = 0; i < this.rooms.length; i++){
    total += this.rooms[i].area();
  }
  return total;
};

House.prototype.cost = function() {
  var totalCost = 0;
  for (var j = 0; j < this.rooms.length; j++){
    totalCost += this.rooms[j].cost();
  }
  return totalCost;
};
