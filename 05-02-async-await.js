// async/await: async make a function return a promise and await makes it wait until the promise is resolved
import fetch from "node-fetch"

const arr = ["HtxeVODH", "s4gaKc3O", "aFd21b0N", "Zo9LwxII"] // our available user connections in S-UI

/* const P2 = fetch("http://nopro.ffnt.de:6000/suisub/HtxeVODH?format=json") //fetch json with details from our website
.then((response) => response.json())
.then((data) => {
    //console.log(data) // prints all the details in json that we passed to data object
    console.log(data.route.final) // prints final property in route object in data object(json)
    console.log("Rules: ", data.route.rules)
    console.log("Rules index 0: ",data.route.rules[0])
    console.log("object property: ",data.route.rules[0].outbound)
})
.then(() => {
    console.log("test hello") // if we don't use this line in then it will be printed before promise is resolved 
})
.catch((err) => {
    console.log("Error is: ", err)
}) */

// simple async example:
async function helloPromise() {
    return "hello"
}
console.log(helloPromise()) // shows us that our function is a promise
helloPromise().then(console.log) // returns hello inside function
 
// rewriting our promise in functional mode using async/await and our connections array 
async function conFetch(word) { 
    try {  // for handling errors and exceptions we use try and catch
        // we can use await just in async function. every await makes sure that the upper promise is resolved.
        const response = await fetch(
            "http://nopro.ffnt.de:6000/suisub/" + word + "?format=json") // or: `http://nopro.ffnt.de:6000/suisub/${word}?format=json`
        const responseJson = await response.json() 
        const data = await responseJson
        return data.route.final + " " + data.route.rules[2].outbound  // returning 2 different values from json data
    } catch (error) {
        console.log(error)
        throw error
    }
}
arr.forEach(item => conFetch(item).then(console.log))

