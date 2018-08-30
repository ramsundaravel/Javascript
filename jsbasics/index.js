console.log('Hello World1');
let name = 'Ram';
console.log(name);

let person = {
    name : "Ram",
    age : 30
}

console.log(person);
console.log(person.name);

// array
let selectedcolor = ['red','blue'];
console.log(selectedcolor);
console.log(selectedcolor.length);


//function
function greet(var1){
    console.log("hello " + var1)
}
greet('Ram')

// arrary
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof(fruits))


var numbers1 = [45, 4, 9, 16, 25];

// call method example
let person1 = {
    fname : "Ram",
    lname : "Sundaravel",
    getname : function(){
        console.log(this.fname + " "+ this.lname)
    }
}

let person2 = {
    fname : "Varsha",
    lname : "Ram"
}

person1.getname()
person1.getname.call(person2) // call method used to 
// send other object and this function will refer to passing object