const accountId = 123456;
let accountEmail = 'avinash123@gmail.com';
var accountPassword = 'hello@123';
let accountState;
accountCity = 'Mumbai'

// accountId = 234;
 
// console.log(accountId)   // not allowed

accountEmail = 'avinashpanchal@gmail.com';
accountPassword = '1234567890';
accountCity = 'Pune'

// console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var because issue with block scope
*/