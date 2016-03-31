
// THE LITERAL OBJECT
//var dice = {
//  sides: 6,
//  roll: function () {
//    return  Math.floor(Math.random() * this.sides) + 1;
//     }
//};


function Dice(sides){
    this.sides = sides
}

Dice.prototype.roll = function () {
    return Math.floor(Math.random() * this.sides) + 1;
};


var dice = new Dice(6);
var dice10 = new Dice(10);

console.log(dice.roll === dice10.roll);