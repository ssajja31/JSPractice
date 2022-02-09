//Equality and Strict Equality Operator
//== Does Type conversion and compare
//===Checks the type of the variable along with the value

console.log(7==7);   //returns true
console.log(7==='7');  //returns false
console.log(7=='7'); //returns true   != and !== are similar

// If else statements
var a = 10;
var b = 5;

if(a > b)
{
    console.log("a > b");
}
else if (a == b)
{
    console.log("a == b");
}
else{
    console.log("a < b");
}

// Switch 
var a = "code"
switch(a)
{
    case "js":
        console.log("1");
        break;
    case "code":
        console.log("2");
        break;
    default:
        break;
}

//objects

var obj = {
    "name" : "abc",
    "nick name" : "a",
    "surname" : "c",
    16 : "b"
};

var myvar = 16;

console.log(obj.name + obj['nick name'] + obj[16] + obj["surname"]);

//Adding a property to object

obj.lastname = "d";
console.log(obj.hasOwnProperty("lastname"));

//Deleting a property from object
delete obj.lastname;
console.log(obj.hasOwnProperty("lastname"));

//While Loop
var i = 0;
var arr = [];
while (i < 5)
{
    arr.push(i++);
}

//For Loop
for(var j = 0; j < arr.length; j++)
{
    console.log(arr[j]);
}

console.log(Math.random()); //returns a random decimal between 0 and 1
console.log(Math.floor(Math.random() * 10)); // returns a random whole number between 0 and 10

//convert string to int
console.log(parseInt("56.01")); // returns NAN if the string cannot be parsed into an int