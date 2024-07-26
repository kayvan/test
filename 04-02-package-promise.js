// package installation

/*  to install a package we use "npm" command in terminal. At first we should run command: npm init
after init it makes a package.json file and a node-modules folder. to install we should run command: npm install package-name
now we want to install node-fetch to read a webpage. so we run command: npm install node-fetch
after a successful installation our package name will be in package.json file and node_modules folder.
 */

// promise: it is a way to handle asynchronous operations and get ride of callback hell. 

 //const fetch = require("node-fetch"); require is not working, so in package.json we should add "type": "module" and use import
import fetch from "node-fetch"
const myProm = fetch("https://google.com")
console.log(myProm)

// 37:50

