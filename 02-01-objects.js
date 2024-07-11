// objects

const person = {
    name: "Jafar",
    email: "ja@j.com",
    isEmployed: true,
    greet: function(){
        console.log("Hello, my name is " + this.name)
    }
}
console.log(person) // access/print all properties
person.greet() // Calls the greet method: "Hello, my name is ...."

person.email = "j.a@jafar.org" // modify property
person["hobbies"] = ["football", "reading", "travelling"] // add new property
delete person.greet // delete property

email = person.email // assign a property to a variable
console.log(email)

if (person.isEmployed) {
    console.log(person.name)
    console.log(person["email"])
}
// new object + method if else
secondPerson = {
    name: "Asghar",
    email: "as@a.com",
    isEmployed: false,
    print: function() {
        console.log("Name: " + this.name)
        console.log("Email: " + this.email)
        if (this.isEmployed) {
            console.log("Status: Employed")
        } else {
            console.log("Status: Unemployed")
        }
    }
}
secondPerson.print()
