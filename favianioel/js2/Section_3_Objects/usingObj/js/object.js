var person = {
  name : 'Borat',
  country : 'Bangladesh',
  age : 40,
  treehouseStudent : true,
  skills : ['PHD', 'BORING', 'WASTING MONEY']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hi. My name is ' + person.name + '</p>';
message += '<p>I live in  ' + person.country + '</p>';
person.name = 'BMW Sport';
message += '<p>But, I wish my name was ' + person.name + '</p>';
person.age += 1;
message += '<p>My age is now ' + person.age + '</p>';
message += '<p>I have ' + person.skills.length + ' skills: ' ;
message += person.skills.join(', ') + '</p>';
print(message);
















