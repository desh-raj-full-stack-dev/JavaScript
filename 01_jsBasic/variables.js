// 'use strict'
const accountId = 9876543210
let accountEmail = 'test01@gmail.com'
var accountPassword = 'Test01@123456'
accountCity = 'Sunadar Nagar'

// accountId = 123456789
console.log('accountId', accountId);

accountEmail = 'test02@gmail.com'
console.log('accountEmail', accountEmail);

accountPassword = 'Test02@123456'
console.log('accountPassword', accountPassword);

accountCity = 'Mandi' // Don't use this type of variable declaration. to avoid this please use `use strict` on top of the file.


console.log('accountCity', accountCity);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail, accountPassword, accountCity])