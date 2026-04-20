const accid=144553
let accountEmail = "abcd@gmail.com"
var pass="123"
account="jaipur"//works
//accid=1445 not allowed because accid is a constant variable
console.log(accid)
console.log(accountEmail)
console.log(pass)
console.log(account)


accountEmail="aaa"
pass="456"
account="delhi"
console.log(accountEmail)
console.log(pass)
console.log(account) 

/* var is function scoped and can be redeclared and updated
let is block scoped and can be updated but not redeclared
prefer not to use var because of its function scope and redeclaration issues
*/