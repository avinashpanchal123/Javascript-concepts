"use strict"; // treat all JS code as newer version

/*
    Number 
    bigint
    String
    boolean
    null
    undefined
    symbol

    object 

*/

// console.log(typeof undefined);
// console.log(typeof null)


let num = "33a";

let toNum = Number(num);


console.log(toNum)
console.log(typeof NaN)

console.log(1 + "2")
console.log("1" + 1 + 2);
console.log(1 + 1 + "2");

// this happens due to ecmascript guidelines


let firsName = 'avinash';
let lastName = ' Panchal';

// console.log(firsName + lastName );

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2")


// console.log(+true);
// console.log(+"")


let counter = 100;
console.log(++counter)
console.log(counter++)

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// ** comparision operator converts null to a number but equality operator does not
// ** comparision and equality operators work differently

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined >= 0);

// strict check

/*
premitive dataType  ( passed by value)
 type 7 => String, Number , Boolean , null, undefined, Symbol
 

Non-premitive dataType =>
    
*/





