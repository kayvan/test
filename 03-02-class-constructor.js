// Design a Shopping cart

const Product_Prices = {
    "apple": 3,
    "orange": 2.5,
    "banana": 1.5
}
// using object for shopping cart
/* cart = {
    items: [],
    get totalPrice() {
        let result = 0
        for (item of this.items) {
           const price = Product_Prices[item.name]
           result += item.count * price
        }
        return result
    },
    addToCart(item) {
        // {name: "", count: x}
        this.items.push(item)
    },
    removeFromCart(productName){
        // productName: string
        for (let i = 0; i < this.items.length; i++ ) {
            if (this.items[i].name == productName) {
                this.items.splice(i, 1)
                break
            }
        }
    }
}

cart.addToCart({name: "orange", count: 3})
cart.addToCart({name: "apple", count: 1})
console.log(cart, cart.totalPrice)
cart.removeFromCart("apple")
console.log(cart, cart.totalPrice)
 */
// using class for shopping cart

class CartItem { 
    constructor(name, count){
        this.name = name;
        this.count = count;
    }
}

class cart {
    constructor() {
        this.items = []
    }

    get totalPrice() {
        let result = 0
        for (let item of this.items) {
           const price = Product_Prices[item.name]
           result += item.count * price
        }
        return result
    }

    addToCart(item) {
        // {name: "", count: x}
        this.items.push(item)
    }

    removeFromCart(productName){
        // productName: string
        for (let i = 0; i < this.items.length; i++ ) {
            if (this.items[i].name == productName) {
                this.items.splice(i, 1)
                break
            }
        }
    }
}

aliCart = new cart()
aliCart.addToCart({name: "banana", count: 6}, {name: "orange", count: 3}) // without cartItem class
console.log(aliCart.totalPrice)
abbasCart = new cart()
abbasCart.addToCart(new CartItem("apple", 6)) // using CartItem class
console.log(abbasCart.totalPrice)
mamadCart = new cart()
mamadCart.addToCart({name: "apple", count: 10})
console.log(mamadCart.totalPrice)


