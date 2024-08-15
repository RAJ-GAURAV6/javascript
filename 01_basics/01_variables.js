const accountId = 144553
let accountEmail ="raj@google.com"
var accountPassword = "12345"
accountCity = "patna"
let accountState;

//accountId = 2 //not allowed
accountEmail = "gaurav@google.com"
accountPassword = "6790"
accountCity = "delhi"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountCity,accountId,accountState])
