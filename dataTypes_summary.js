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

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


//*************************************************************************** */
/*
  Two types of memory stack and heap memory

  Two types of dataTypes => Premitive and non-premitive

  in case of premitive dataTypes the 
*/


let arr = ['akash', 'avinash', 'aditya', 'mahesh', 'vivek'];


let arr1 = arr;

arr1[0] = '+++++++';

console.log(arr, 'arr_print');
  