// asynchronous programming -- callback and promise


// callback function example

/* function printTemperature() {
    temp = Math.random() * 50
    console.log("The temperature is " + temp + " degrees");
}

setInterval(printTemperature, 3000) // setInterval() is a callback function that calls printTemperature function at every 3 seconds intervals 
 */

// using a callback function in a cart class for discount calculation

const Product_Prices = {
    "apple": 3,
    "orange": 2.5,
    "banana": 1.5
}

class CartItem { 
    constructor(name, count){
        this.name = name;
        this.count = count;
    }
}

class cart {
    constructor(discountCallback) { // here we add discountCallback as a parameter
        this.items = []
        this.totalDiscountPrice = 0;
        this.discountCallback = discountCallback;
    }

    get totalPrice() {
        let result = 0
        for (let item of this.items) {
           const price = Product_Prices[item.name]
           const discountPercent = this.discountCallback(item) // here we call discountCallback for each item
           const discountedPrice = price * (100 - discountPercent) / 100
           result += item.count * discountedPrice
        }
        return result
    }

    addToCart(item) {
        // {name: "", count: x}
        this.items.push(item)
    }

    removeFromCart(productName){ // our discount is not optimized for remove function. we can do it later.
        // productName: string
        for (let i = 0; i < this.items.length; i++ ) {
            if (this.items[i].name == productName) {
                this.items.splice(i, 1)
                break
            }
        }
    }
}

const discountHandler = (cartItem) => { // here we add discountHandler to calculate discount percentage for items
    if (cartItem.count > 4) {
        return 10
    }
    return 0
}

mamadCart = new cart(discountHandler) // we should pass discountHandler as a parameter to 
mamadCart.addToCart(new CartItem("apple", 10))
mamadCart.addToCart(new CartItem("orange", 20))
mamadCart.removeFromCart("apple") // here we remove and add apple to test discount
mamadCart.addToCart(new CartItem("apple", 5))
console.log(Product_Prices)
console.log(mamadCart.totalPrice)


// callback hell: when we have nested callbacks, it makes our code hard to read and understand. more info: http://callbackhell.com 

