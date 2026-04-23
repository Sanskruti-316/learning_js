let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());// Thu Jun 27 2024 17:30:00 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());// Thu Jun 27 2024
// console.log(myDate.toLocaleString());// 6/27/2024, 5:30:00 PM
// console.log(myDate.toLocaleDateString());// 6/27/2024
//  console.log(typeof myDate);// object



 //let myCreatedDate = new Date(2023, 0, 23) //0 means January, 23 means 23rd day of the month
 //let myCreatedDate = new Date(2023, 0, 23, 5, 3) //5,3 means 5:03 am    
let myCreatedDate = new Date("01-14-2023")
 console.log(myCreatedDate.toLocaleDateString());


 let myTimeStamp = Date.now()// console.log(myTimeStamp) // 1719871800000
 console.log(myTimeStamp) // 1719871800000
 console.log(myCreatedDate.getTime());// this will give us the timestamp of the created date in milliseconds since January 1, 1970
console.log(Math.floor(Date.now()/1000));//thi s will give us the current time in seconds since January 1, 1970 (Unix timestamp)

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());// this will give us the day of the week (0-6) where 0 is Sunday and 6 is Saturday
