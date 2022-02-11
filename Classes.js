var obj = 
{
    "name" : "sam"
};

//Prevent Object Mutation
Object.freeze(obj);

obj.name = "S"; //Throws an error

console.log(obj);

//Arror functions
var test = function(a, b) {
    return a + b;
}

//can be simplified to

var test1 = (a, b) => a + b;

console.log(test1("a", "b"));

//Spread Operator Allows to copy the content of the array
var arr1 = [1, 2, 3];
var arr2 = [...arr1]; //Assigning the contents of arr1 to arr2

arr1[0] = 10;

console.log(arr2); 

//Destructuring Assignments
//1. Objects
var obj = {x : 1, y : 2, z : 3};
const {x : a, y : b, z : c} = obj;

console.log(a + b + c);

var obj1 = {x : {y : 1}};
const {x : {y : d}} = obj1;
console.log(d);

//2. Arrays
var arr = [10, 20, 30, 40, 50, 60];
const [e, f] = arr; //takes elements in order

console.log(e + f);

//using the rest operator
const [ , , ...arr3] = arr; //Skips the first 2 elements and copies the rest
console.log(arr3);  

//classes
function getFun()
{
    class fun
    {
        constructor(variable)
        {
            this._variable = variable;
        }
        
        get variable()
        {
            return this._variable;
        }
        
        set variable(vari)
        {
            this._variable = vari;
        }
    }
    
    return fun;
}

var func = getFun();
var funClass = new func("test");
console.log(funClass.variable);
funClass.variable = "test1";
console.log(funClass.variable);
