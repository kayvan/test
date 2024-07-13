// callback function example

function printTemperature() {
    temp = Math.random() * 50
    console.log("The temperature is " + temp + " degrees");
}

setInterval(printTemperature, 3000) // setInterval() is a callback function that calls printTemperature function at every 3 seconds intervals 

