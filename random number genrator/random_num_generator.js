// random number generator using math functions

//let randomNum = Math.floor(Math.random() * 100); 

// multiply by 100 to get a number between 0 and 99 
// Math.floor() rounds down to the nearest integer

const generator = document.getElementById("generator");
const min = document.getElementById("min");
const max = document.getElementById("max");
const number = document.getElementById("num");
const minSmall = document.getElementById("minSmall");
const maxSmall = document.getElementById("maxSmall");

generator.onclick = function() {
    let minValue = Number(min.value); 
    let maxValue = Number(max.value);

    // if(minValue == ""){
    //     minSmall.innerHTML = "please enter a minimum value";
    // }
    // if(maxValue == ""){
    //     maxSmall.innerHTML = "please enter a maximum value";
    // }

    let randomNum = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    number.innerHTML = randomNum;
};