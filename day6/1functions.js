// function saymyname(){
//   console.log("Sanskruti");
// }

// saymyname();



// function addTwoNumbers(num1, num2){
//     return num1+ num2;
// }
// console.log(addTwoNumbers(3, 5));


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// result = addTwoNumbers(3, 5)
// console.log(result); // this will print undefined because the function is not returning anything, it is just printing the result inside the function, so when we try to print the result outside the function, it will be undefined.


function justloggedIn(name){
    return `Welcome ${name}`

}
justloggedIn("Sanskruti")// this will return "Welcome Sanskruti" but we are not doing anything with the returned value, so it will not be printed anywhere, we need to store the returned value in a variable and then print that variable to see the result.

const message = justloggedIn("Sanskruti")
console.log(message);

function userLoggedIn(name="User"){
    if(!name){
        return "Please provide a name"
    }
    return `Hello ${name}, you are logged in.`;
}       
const userMessage = userLoggedIn("Sanskruti");
console.log(userMessage);