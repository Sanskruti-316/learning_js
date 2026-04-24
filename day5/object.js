// singleton -constructor function
//object.crea

const mysym=Symbol("key 1")
//object literals
const Jsuser={
    name: "sanskruti",
    age: 23,
[mysym]:"mykey1",
    location: "pune",
    loggedin: true,
    lastlogin: ["2023-01-01", "2023-02-01", "2023-03-01"],
    email: "sanskruti@example.com" 
}

// console.log(Jsuser);
// console.log(Jsuser.name);
// console.log(Jsuser["age"]);
console.log(Jsuser[mysym]);
Jsuser.age=24
Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

Object.freeze(Jsuser)// this will make the object immutable, we cannot change any property of the object after freezing it
Jsuser.age=25
console.log(Jsuser.age);// this will still print 24 because the object is frozen and we cannot change any property of the object after freezing it

Jsuser.greeting();
Jsuser.greetingTwo();

