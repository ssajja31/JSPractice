//Arrays
var arr = ["str", 1];

var arr1 = [["str", 1, 1.2], ["s", 2]]; //Nested Array

arr1[0] = "str1";
console.log(arr1[0]);
console.log(arr1[0][0]);

//push - Adds element at the end of array

arr.push(3);
console.log(arr);

//pop - removes the last element

console.log(arr.pop());

//Shift - removed the first elemt

console.log(arr.shift());

console.log(arr);

//unshift - adds element to the start of the array

arr.unshift("a");
console.log(arr);
console.log(JSON.stringify(arr));

//Functions

var c = "k";
function resusableCode(a, b)
{
    var c = "yu";  
    return a + b + c;
}

console.log(resusableCode(c, "sam"));

var sum = 0;
function fun()
{
    sum += 3;
}

fun();
console.log(sum);
console.log(fun()); //undefined

console.log(typeof c);


