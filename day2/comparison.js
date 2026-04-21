 console.log(2 > 1);
 console.log(2 >= 1);
 console.log(2 < 1);
 console.log(2 == 1);
 console.log(2 != 1);

 console.log("2" > 1);//string is converted to number and then compared but not good practice to compare different data types
 console.log("02" > 1);


console.log(null > 0); //null is converted to 0 and then compared
console.log(null == 0);//null is not converted to 0 and compared as it is, so it returns false
console.log(null >= 0);//null is converted to 0 and then compared

console.log(undefined > 0);//undefined is converted to NaN and then compared, so it returns false
console.log(undefined == 0);//undefined is not converted to 0 and compared as it is, so it returns false
console.log(undefined >= 0);//undefined is converted to NaN and then compared, so it returns false


//strict check ===
console.log(2 === 2);
console.log(2 === "2");//false because of different data types
console.log(0 === false);//false because of different data types
console.log(1 === true);//false because of different data types