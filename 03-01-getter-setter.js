// Getter and Setter on objects

// using get to make a solid property and don't allow changes on property
solidobj = {
    get name1() {
        return "Hasan"
    },
    printname: function() {
        console.log("Name: " + this.name1)
    }
}

solidobj.name = "Ali" // name is still hasan und will not change to ali
solidobj.printname() // returns Hasan

// using get and set to make a property and allow changes on property under some circumstances
modobj = {
    _name1: "Mamad",
    get name1() {
        return this._name1;
    },
    set name1(inputname) {
        if (inputname.length >= 3) {
            this._name1 = inputname;
        } else {
            throw "Name should have 3 (or more) character"
        }
    },
    printname() { // ***we can write methods without keyword function like this printname :))
        console.log("Name: " + this.name1)
    }
}

modobj.name1 = "Ali" // name will change to ali cuz it has 3 chars
modobj.printname() // returns Ali
modobj.printname(modobj.name1="s") // returns Throw error

