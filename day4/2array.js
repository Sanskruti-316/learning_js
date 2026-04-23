// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const Arr = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)//6 at end
// myArr.push(7)//7 at end
// myArr.pop()// remove last element
// myArr.unshift(9)// add element at beginning
// myArr.shift()// remove first element

// console.log(myArr.includes(9));//will return true if 9 is present in the array, otherwise false
// console.log(myArr.indexOf(3));// will return the index of the first occurrence of 3 in the array, if not found it will return -1

// console.log(myArr.reverse());// will reverse the order of the elements in the array
// console.log(myArr.sort());// will sort the elements in the array in ascending order (for numbers) or alphabetical order (for strings)

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)// this will return a new array containing the elements from index 1 to index 2 (3 is not included) without modifying the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)// this will remove 3 elements starting from index 1 and return the removed elements as a new array
console.log("C ", myArr);
console.log(myn2);

