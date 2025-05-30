// 1. Write a function to check if a number is even or odd.
function checkevenodd(num){
    if (num % 2 === 0) {
        return `${num} is an even number.`;
    }else {
        return `${num} id an odd number.`;
    }
}

// console.log(checkevenodd(10));

// 2. Create an arrow function to return the square of a number.

const square = (num) => num * num;
// console.log(square(5));

// 3. Create a function that accepts another function as an argument and calls it.

function callfunction (func) {
    return func();
}

function greet(){
    return "Hello, World!";
}

// console.log(callfunction(greet));


// 4. Write a recursive function to calculate factorial of a number.

function factorial (n) {
    if (n === 0 || n === 1){
        return 1;
    }else {
        return n * factorial(n - 1);
        
    }
}
// console.log(factorial(5));

// 5. Make a function using default parameters and rest parameters together.

function sunwithdefaults (a = 0, b = 0, ...rest){
    let sum = a + b;
    for (let num of rest){
        sum += num;
    }
    return sum;
}
 console.log(sunwithdefaults(1, 2, 3, 4, 5)); 


//  6. Create an IIFE that prints your name.
(function() {
    console.log("My name is John Doe.");
})();




// 7. Create a constructor function to make `Car` objects with properties `brand` and `speed`.

function Car(brand, speed) {
    this.brand = brand;
    this.speed = speed;

    this.displayInfo = function() {
        return `Brand: ${this.brand}, Speed: ${this.speed} km/h`;
    };
}

const myCar = new Car("Toyota", 120);
// console.log(myCar.displayInfo());


// 8. Create a pure function to calculate the area of a rectangle.

function calculateArea(length, width) {
    return length * width;
}

// 9. Create an impure function that modifies a global variable.

let globalCount = 0;
function incrementCount() {
    globalCount += 1;
    return globalCount;
}

// 10. Create a function expression that returns the largest of three numbers

const findLargest = function(a, b, c) {
    return Math.max(a, b, c);
};

// 11. Create a nested function that multiplies two numbers and then doubles the result.

function multiplyAndDouble(a, b) {
    function multiply() {
        return a * b;
    }
    return multiply() * 2;
}

// 12. Create a callback function to simulate loading data and printing "Data loaded".

function loadData(callback) {
    setTimeout(() => {
        console.log("Data loaded");
        callback();
    }, 1000);
}

loadData(() => {
    console.log("Processing data...");
});


// 13. Create an arrow function that reverses a string.

const reverseString = (str) => str.split('').reverse().join('');

// 14. Create a function that takes another function as a callback and applies it to an array.
function applyCallback(arr, callback) {
    return arr.map(callback);
}

// 14. Create a function that takes another function as a callback and applies it to an array.

function applyCallback(arr, callback) {
    return arr.map(callback);
}

// 15. Create a function that takes another function as a callback and applies it to an array.

function applyCallback(arr, callback) {
    return arr.map(callback);
}


