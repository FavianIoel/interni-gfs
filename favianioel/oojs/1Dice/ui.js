function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number; 
}

var button = document.getElementById("button");

printNumber(2);

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};