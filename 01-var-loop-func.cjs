import { groupEnd } from "console";

console.log("hellllooo!!!")
// Variables
const name = "Akbar"
age = 33.5
let isMale = true
age = 13
// Fellow controllers + loop
console.log("Name: " + name, "Age: " + age)
if (age > 18) {
    console.log("you can proceed.")
} else {
    console.log("boro khoone bache!!!")
}
isMale = false
if (isMale) {
    console.log("pesare!!")
} else {
    console.log("dokhtare!!")
}

// functions
function getName(firstname, lastname) {
    return firstname + " " + lastname
}
const greeting = (fname, lname) => { //anonymous func
    return "welcome " + getName(fname, lname)
}
console.log(greeting("Mamad", "Jafari"))
// Euler1: sum of every number below 1000 that multiples 3 or 5
function euler1(num) {
    let sum = 0
    for (var i = 0; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
            //console.log("Sum: " + sum)
        }
    }
    return sum
}
console.log("Sum is " + euler1(10000))
