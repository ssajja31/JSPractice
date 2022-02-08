console.log("Hello from JavaScript");

//in line Comment
/* Multi Line 
Comment */

// Variable Declarations 
var name1 = "JavaScript"; // Can be used anywhere in the program
let name2 = "Code"; //Can be used only within the scope
const pi = 3.14; //Cannot be changed 

//Variable declarations and assignments
var a;
var b = 10;
console.log(a); //Prints undefined
a = 9;
console.log(++a); // prints 10

console.log(11/0);   // prints null

//Strings

var str = "\"double quoted string\" ";
var s1 = '"double quoted" ';
var s2 = `'single quoted'`;  //backquote

console.log(str + s1 + s2);

console.log(name1.length);

str[0] = "A"; //throws an error as strings are immutable
