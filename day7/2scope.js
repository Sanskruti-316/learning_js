// function one()
// {
     const username="san"
     function two()
     { const  web="youtube"
       console.log(username);
     }
    // two()
// }
// //one()


// if(true)
// {
//     const username="sanskruti"
//     if(username==="sanskruti")
//     {
//         const web="youtube"
//         console.log(username+web);
//     }
// }




//+++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))//can be called before the function declaration because of hoisting
function addone(num){
    return num+1
}


const addtwo = function(num){// this is called function expression, we cannot call this function before the declaration because it is not hoisted
    return num+2
}
addtwo(5)