const user={
    username: "sanskruti",
    price:200
    ,
      welcomemessage: function(){
    console.log(`welcome ${this.username} `);
      }

}
//user.welcomemessage() // this will print welcome sanskruti, because this.username will refer to the username property of the user object, which is sanskruti
console.log(this) // this will refer to the global object, which is window in the browser, and global in node.js



// function chail(){
//     console.log(this) // this will refer to the global object, which is window in the browser, and global in node.js
// }
// chail()

const chai= ()=>{
    let username="sanskruti"
    console.log(this) // this will refer to the global object, which is window in the browser, and global in node.js, because arrow functions do not have their own this, they inherit this from the parent scope, which is the global scope in this case.
}

const addtwo = (num1,num2)=>{
    return num1+num2
}
//console.log(addtwo(5,10)) // this will print 15, because the addtwo function is an arrow function, and it will return the sum of num1 and num2.


const addthree = (num1,num2,num3)=>(num1+num2+num3) // this is an implicit return, we are not using the return keyword, but the function will still return the sum of num1, num2 and num3.
//console.log(addthree(5,10,15)) // this will print 30, because the addthree function is an arrow function, and it will return the sum of num1, num2 and num3.

const add = (num1 ,num2)=> ({username: "sanskruti"})

console.log(add(3,4))



