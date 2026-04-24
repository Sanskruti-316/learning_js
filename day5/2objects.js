// const user = new Object()
const user = {}

user.id = "123abc"
user.name = "Sammy"
user.isLoggedIn = false

// console.log(user);

const regUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regUser.fullname.userfullname.firstname);

const set1 = {1: "a", 2: "b"}
const set2 = {3: "a", 4: "b"}
const set3 = {5: "a", 6: "b"}

// const allObj = { set1, set2 }
// const allObj = Object.assign({}, set1, set2, set3)

const allObj = {...set1, ...set2}
// console.log(allObj);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]