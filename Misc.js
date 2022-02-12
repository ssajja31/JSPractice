//Map - performs transformations on arrays (Takes function as input)

var arr = [1, 2, 3].map((n) => n * 2);
console.log(arr);

//Filter - filters out the values in the array

var arr1 = [1, 2, 3].filter(n => n > 1 && n < 3);
console.log(arr1);

//Reduce - reduces the elements in an array into one
var arr2 = [1, 2, 3].reduce((a, n) => a * n);
console.log(arr2);

//Callback - function which is passed inside other function
function callbackEx(name, callback)
{
    return callback(name);
}

var test = callbackEx("Sam", (n) => "Hi " + n);
console.log(test);

//This Keyword
var obj = 
{
    name : "Sam",
    marks : [1, 2],
    details(){
        this.marks.forEach((n) => console.log(this.name + " has got " + n + " marks"));
    }
}

var obj1 = 
{
    name : "Sam",
    marks : [1, 2],
    details(){
        this.marks.forEach(function(n){ console.log(this.name + " has got " + n + " marks"); }.bind(this));
    }
}

obj1.details();

obj.details();