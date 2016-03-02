var person = {
  name : 'Borat',
  country : 'Bangladesh',
  age : 40,
  treehouseStudent : true,
  skills : ['PHD', ' BORING', ' WASTING MONEY']
};


for (prop in person) {
  document.write(prop + ': ', person[prop] ,'<br>');
}
