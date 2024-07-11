// Basic collections : Array - Set - Object(complete in 02-01)  50:00
/* 2 diffs between set1 and array: 
1- array maintains the order of elements based on insertion order
2- array allows duplicate values, set1 does not(ignores it)
*/
let numbers = [1, 2, 4, 3, -6, 8, 2, 1, 5] // array with duplicate elements
const colors = new Set(["red", "black", "green", "white"]) // set1 is used for uniq elements
basket = {      // object
    name: "miveh",
    sib: 2,
    moz: 1,
    porteghal: 5
}
const mix = [1, "aaa", true] // array and set1 accept string and boolean and ... at the same time

// calling 
console.log(numbers)
console.log(colors)
console.log(mix)
console.log(numbers[4]) // returns -6 -- ** first element has index 0 ** 
console.log(colors[0]) // in set1 there is no index so it returns undefined so we have to use set1 methods like "has"
console.log(colors.has("black")) // returns true
console.log(colors.has("blue")) // returns false

// Removing Duplicates from an Array Using Set 
uniqarr = [...new Set(numbers)] // "..." before new gives us an array result and not a set result
console.log("uniq: " + uniqarr) // returns uniq: 1,2,4,3,-6,8,5
console.log(uniqarr) // returns [ 1, 2, 4, 3, -6, 8, 5 ]
uniqset = new Set(numbers) // makes a set from an array and removes duplicates
console.log(uniqset) // returns Set(7) { 1, 2, 4, 3, -6, 8, 5 }

// Array methods: push pop shift unshift map length concat filter
const arr = [0, 1]
arr.push(25, 6, 4) // adding element to the end
console.log(arr)

console.log(arr.length) // shows how many elements we have -- here after adding: "5"

arr.pop() // removing the last element
console.log(arr)

arr.shift() // removing the first element
console.log(arr)

arr.unshift(66, "naghi") // adding element to the beginning
console.log(arr)

let elepop = arr.pop() // assigning the removed element to a variable
console.log(elepop) 
console.log(arr)

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const mergedArray = arr1.concat(arr2) // is used to merge two or more arrays. It does not change the existing arrays but returns a new array
console.log(mergedArray) // returns [1, 2, 3, 4, 5, 6]

const number2 = [1, 2, 3, 4, 5, 6]
const evenNumbers = number2.filter(number => number % 2 === 0) // creates a new array with all elements that pass the test implemented by the provided function
console.log(evenNumbers) // returns [2, 4, 6]

const number3 = [1, 2, 3, 4, 5]
const squaredNumbers = number3.map(number => number * number) // creates a new array with the results of calling a provided function on every element in the calling array
console.log(squaredNumbers) // [1, 4, 9, 16, 25]

// Combining Methods
const number4 = [1, 2, 3, 4, 5, 6]
const SquaresOfEvenNumbers = number4
    .filter(number => number % 2 === 0)
    .map(number => number * number)

console.log(SquaresOfEvenNumbers) // returns [ 4, 16, 36 ]

// Set methods: add delete has clear size

const set1 = new Set([1, 2, 0, 3])
set1.add(4) // adding element to the end
console.log(set1) // Set { 1, 2, 0, 3, 4 }

set1.delete(0) // deleting the element 0
console.log(set1) // Set { 1, 2, 3, 4 }

console.log(set1.size) // shows how many elements we have -- same as length in array

console.log(set1.has(0)) // checks thew availability of elements and returns true or false -- here false cuz we deleted 0

set1.clear() // clear all element from set
console.log(set1)

const setA = new Set([1, 2, 3])
const setB = new Set([3, 4, 5])

const union = new Set([...setA, ...setB]) // Combines the elements of two sets -- removes the duplicates
console.log(union) // Set { 1, 2, 3, 4, 5 }

const intersection = new Set([...setA].filter(x => setB.has(x))) // Gets the common elements between two sets
console.log(intersection) // Set { 3 }

const difference = new Set([...setA].filter(x => !setB.has(x))) // Gets the elements that are in the first set but not in the second set
console.log(difference) // Set { 1, 2 }
