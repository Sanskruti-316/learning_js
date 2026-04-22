//memory alllocation in js happens in two places - stack and heap
//stack create new memory space for each function call and delete it when the function is done
//heap is dynamic memory allocation where objects and arrays are stored
//primitive data types are stored in stack and non primitive data types are stored in heap 
//stack creates copy and heap creates reference
//let myname="sanskruti"
//let myname2=myname
//console.log(myname, myname2);
//myname2="hitesh"
//console.log(myname, myname2);//copy of myname is created in myname2 and when we change the value of myname2, it does not affect myname because they are stored in stack


let person1={
    name:"sanskruti",
    age:30
}
let person2=person1
console.log(person1, person2);
person2.name="hitesh"
console.log(person1, person2);//both person1 and person2 are pointing to the same object in heap, so when we change the value of name in person2, it also changes the value of name in person1 because they are stored in heap and both person1 and person2 are referencing the same object in heap