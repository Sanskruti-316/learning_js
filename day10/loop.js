//for 
for(let i=0; i<10; i++){
    const element = i;
    if(i===5){
        console.log("i is 5");}
    console.log(element);
}


// for(let i=0; i<10; i++){
//     console.log(`outside loop value: ${i}`);
//     for(let j=0; j<10; j++){
//         console.log(`inside loop value: ${i},${j}`);
//     }
// }



// let myArray = ["a", "b", "c", "d", "e"]

// for(let i=0; i<myArray.length; i++){
//     const element = myArray[i];
//     console.log(element);
// }



//break and continue

// for(let i=0; i<=20; i++){
//     console.log(`value of i is ${i}`);
//     if(i===5){
//         console.log("i is 5");
//         break;
//     }
// }

// for(let i=0; i<=20; i++){
//     if(i===5){
//         console.log("5 is skipped");
//         continue;
//     }
//     console.log(`value of i is ${i}`);
// }


//--------while loop---------
let i=0;

while(i<=10){
    console.log(`value of i is ${i}`);
    i++;
}

let score = 11;

do{
    console.log(`score is ${score}`);
    score++;
}while(score<=10)




