/*jshint multistr:true */

var text = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam sequi blanditiis animi esse explicabo rem, fuga nisi Favian laudantium, eligendi vol Favian uptates quae illo, assumenda temporibus expedita cupiditate  Favian voluptatibus autem aliquam sed! ";

var myName = "Favian";
var hits = [];

for(var i = 0; i < text.length; i++){
    if(text[i] === "F"){
        for(var j = i; j < myName.length +i; j++){
            hits.push(text[j]);
        };
    };
};

if(hits === false){
    console.log( "Your name wasn't found!");
}else{
    document.write(hits);
    console.log(hits);
};



