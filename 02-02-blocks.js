// blocks = a section of code enclosed in curly braces {} 

const name = "mamad"
male = true
if (male) {
    console.log(name + " is male.")
}

// Variables and constances in blocks 
// var is global and accessible in and out of scope. ** normaly we don't use it **
// const and let are accessible in scope 
age = 33 
const color = "green"
if (age > 33) {
    let color = "black"
    console.log(color)
} else {
    let color = "white"
    console.log(color)
}

console.log(color.toUpperCase()) // has nothing to do with if scope and prints GREEN 