// package installation

/*  to install a package we use "npm" command in terminal. At first we should run command: npm init
after init it makes a package.json file and a node-modules folder. to install we should run command: npm install package-name
now we want to install node-fetch to read a webpage. so we run command: npm install node-fetch
after a successful installation our package name will be in package.json file and node_modules folder.
 */

// promise: it is a way to handle asynchronous operations and get ride of callback hell. 
// The order of doing promises is not same as what we write in code. It depends on answers they get.

// writing some promise codes with available functions in node modules like fetch in node-fetch
 //const fetch = require("node-fetch"); require is not working, so in package.json we should add "type": "module" and use import
import fetch from "node-fetch" // import fetch func from node-fetch module
const myProm = fetch("https://google.com") // fetch/read google and assign to myProm
console.log(myProm) // returns Promise {<pending>} - it means it is not completed yet and it may/will be completed in future

const P1 = fetch("http://nopro.ffnt.de:6000/suisub/HtxeVODH") //fetch base64 encoded string from our website
.then((response) => response.text()) // then works when first promise is done and is not any more in pending state. it passes the output of first promise to response object
.then((data) => console.log(atob(data))) // here we pass the output of response object to data object and use atob method to decode the base64 string and print it

const P2 = fetch("http://nopro.ffnt.de:6000/suisub/s4gaKc3O?format=json") //fetch json with details from our website
.then((response) => response.json())
.then((data) => {
    console.log(data) // prints all the details in json that we passed to data object
    console.log(data.route.final) // prints final property in route object in data object(json)
    console.log(data.route.rules)
})

const P3 = fetch("http://nro.ffnt.de:6000/suisub/HtxeVODH?format=json") // we produce an error in our website address to test catch function to sho errors
.then((response) => response.json())
.then((data) => {
    console.log(data) 
})
.catch((err) => {
    console.log("Error is: ", err) 
    // prints error -- this one can be processed earlier than other promises cuz it doesn't have i/o and receives by address checking an error
})

// The order of doing our codes and promises is not same as what we write in code. It depends on answers they get.
console.log("hello ---", P2) // returns hello --- Promise { <pending> } -- our line 41 is done butP2 in line 22 still in pending state

// writing a promise from scratch
const wait = (success, waitTime = 1500) => new Promise((resolve, reject) => { 
// we create wait function as a promise which has a boolean. 
// resolve and reject are callback functions and returns nothing(void). Promise will internally do what should be done in resolve and reject
/* we use arrow function to write the wait function and so our promise will ber returned and we don't need to use return keyword
we can write it with return keyword like this :
function wait(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            if (success) {
                resolve("Status:s successful")
            } else {
                reject("Status: failed")
            }
        }, waitTime)
    })
}
 */
    setTimeout(() => {   // we set timeout to default waitTime = 1.5 seconds to test our promise - user can change waitTime
        if (success) {
            resolve("Status:s successful")
        } else {
            reject("Status: failed")
        }
    }, waitTime)
})

wait(true, 1000)
.then(() => console.log("hello 111")) // this line will be executed after 1 seconds cuz we have true
.then(() => wait(false, 2500))
.then(() => console.log("hello 222")) // this line will not be executed after 2.5 seconds cuz of false but instead returns error in catch
.catch((er) => console.log("Error is: ", er))

// promise has some other functions like .all() and .allsettled() for more than one promise when we have multiple/nested promises to do. 
