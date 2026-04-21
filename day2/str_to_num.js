val=3
console.log(-val);

let str1="hello"
let str2=" world"
let str3=str1+str2
console.log(str3);

console.log(1+2);
console.log("1"+"2");
console.log("1"+2);
console.log(1+"2");
 console.log("1" + 2 + 2);//once it encounters a string, it treats the rest of the values as strings and concatenates them
 console.log(1 + 2 + "2");//it first adds 1 and 2 and then concatenates the result with "2"


 console.log(+true);//1 converting boolean to number
 console.log(+false);//0 converting boolean to number
 console.log(+"");//0 converting empty string to number
 console.log(+"abc");//NaN converting non empty string to number results in NaN


 let num1, num2, num3

num1 = num2 = num3 = 2 + 5
console.log(num1, num2, num3);
let gameCounter = 100
 //gameCounter++ also works but it will return the value before incrementing, whereas ++gameCounter returns the value after incrementing
console.log(++gameCounter);


let gameCounter1= 100
console.log(gameCounter1++);//it will return the value before incrementing, whereas ++gameCounter returns the value after incrementing