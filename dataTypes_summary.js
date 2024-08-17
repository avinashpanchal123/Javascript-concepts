// #Primitive DataType (call by value)

// 7types : String , Number, Boolean, Null, undefined, Symbol, Bigint

// Non-Primitive DataType (call by reference)
// Object, Array, functions 

let id = Symbol('123');
let anotherId = Symbol('123');

console.log(id == anotherId);
console.log(anotherId);

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
