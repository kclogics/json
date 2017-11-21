//Javascript Document

console.log("from js/main.js");

var start = '{"name":"krishna Chavali" , "position":"Full Stack Web Dev" }';



var myObject = JSON.parse(start);

console.log(myObject);
/*console.log(myObject.name);
console.log(myObject.position);*/

document.getElementById("name").innerHTML = myObject.name;
document.getElementById("position").innerHTML = myObject.position;


var myString = JSON.stringify(myObject);
console.log(myString);


var myObject = JSON.parse(myString);
console.log(myObject)
