const name="sanskruti"
const repocount=33
//console.log(`my name is ${name} and my repo count is ${repocount}`);//template literals

const gameName="sanskruti+narayan+ agasgekar"
// console.log(gameName[0]);
 console.log(gameName.__proto__);//__proto__ is a way to access that prototype object.

  console.log(gameName.length);
 console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https://abcd.com/efgh%20agsgekar"

console.log(url.replace('%20', '**'))
console.log(url.includes('sundar'))//includes is used to check if a string contains a substring or not, it returns true or false

console.log(gameName.split('+'))//split is used to split a string into an array of substrings based on a specified separator, in this case, the separator is '+';