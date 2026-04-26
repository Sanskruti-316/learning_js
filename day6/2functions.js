function calculateCartPrice(...num1)//rest operator - this will take all the arguments passed to the function and store them in an array called num1
{
    return num1
}

console.log(calculateCartPrice(100,200,300)); // this will return [100, 200, 300] - an array of all arguments passed


function cal2(val1,val2,...num1)//rest operator - this will take all the arguments passed to the function and store them in an array called num1, but the first two arguments will be stored in val1 and val2 respectively
{
    return num1
}

console.log(cal2(100,200,300,400,500)); // this will return [300, 400, 500] - an array of all arguments passed after the first two arguments



// const user={
//     name:"Sanskruti",
//     price:200
// }
// function handleObject(obj)
// {
//     console.log(`username ${obj.name} and price is ${obj.price}`);
// }

// //console.log(handleObject(user));

// function handleObjectDestructuring({name, price})// this is called destructuring, we are destructuring the object and getting the values of name and price directly without using obj.name and obj.price
// {
//     console.log(`username ${name} and price is ${price}`);
// }

// console.log(handleObjectDestructuring(user));

// handleObjectDestructuring({name:"Hitesh", price:999})// we can also pass an object directly to the function without storing it in a variable, this is called inline object creation


const myNewArray = [1, 2, 3, 4, 5]

function retsecval(getarr)
{
    return getarr[2]
}
console.log(retsecval(myNewArray)); // this will return 3, which is the value at index 2 of the array
console.log(retsecval([10, 20, 30, 40, 50])); // this will return 30, which is the value at index 2 of the array