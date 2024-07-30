// functional programming features on collections

// sum of elements in an array using imperative programming
const arr = [1, 2, 3, 4, 5]
let sum = 0
for (let item of arr) {
    sum += item
}
console.log("SI: ", sum) // returns 15

// or we can use reduce function -- more info about reduce function: https://www.w3schools.com/js/js_array_iteration.asp#mark_reduce
const sumFunc = arr.reduce((prev, curr) => prev + curr, 0)
const mulFunc = arr.reduce((prev, curr) => prev * curr)
console.log("SF: ", sumFunc) // returns 15
console.log("MF: ", mulFunc) // returns 120

// map function --
const doubleFunc = arr.map(item => item * 2) // double the elements in an array using map function
console.log("D: ", doubleFunc) // returns [2, 4, 6, 8, 10]

// filter function -- 
const evenFunc = arr.filter(item => item % 2 === 0) // even elements in an array using filter function
console.log("E: ", evenFunc) // returns [2, 4]

// forEach function
arr.forEach(item => 
    console.log(item)) // returns 1, 2, 3, 4, 5 separately in 5 lines

// using some functions after each other
arr
    .map(item => item * item) // power 2
    .filter(item => item > 5) // greater than 5
    .forEach(item => console.log(item)) // returns all filtered elements

