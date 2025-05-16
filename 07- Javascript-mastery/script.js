// 1. Working with Strings in Javascript

// Javascript provides various methods to manipulate and work strings. Since strings are immutable, any mofification results in a new strings.

//1. Slice()
// Extracts a section of a string and returns a new string without modifying the original.

let str = "Hello World";
console.log(str.slice(0, 5));


//2. Template Strings
// . Uses backticks(`)to allow embedding expression within a string.

let username = "Paralengend";
console.log(`hello, ${username}`)

//3. split()
//  . Splits a string into an array based on a separator.

let words = "hello this is me".split(" ");
console.log(words)


//4. replace()
// . Replaces a specified substring with another.

let text = "helooooo";

console.log(text.replace("o", "a"))

//5. includes()
// . checks if a substring exists within a string

console.log("reactbits".includes("react"));





//////////////2. Conditional Operator in Javascript

// . Conditional Statements

// 1. if statement
// . Executes code if a condition is ture.

let x = 10;
if (x > 5) {
  console.log("x is greater than 5");
}

// 2. if-else statements
// . Runs differnt code blocks based on a conditon

let num = 4;
if (num > 5) {
  console.log("num is greater than 5");
} else {
  console.log("num is less than or equal to 5");
}

// 3. else-if ladder
// .used for multiple conditons
let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

//4. Ternary Operator
// . Shorter way to write an if-else statement

let age = 18;
let status = age >= 18 ? "adult" : "minor";
console.log(status);

//5. switch statement
// . Alternative to multiple if-else conditions

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
    case "Tuesday":
    console.log("Today is Tuesday");
    break;
    case "Wednesday":
    console.log("Today is Wednesday");
    break;
    case "Thursday":
    console.log("Today is Thursday");
    break;
    case "Friday":
    console.log("Today is Friday");
    break;
    case "Saturday":
    console.log("Today is Saturday");
    break;
    case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

//////////////////Loops in Javascript

//1. for loop
// . Repeats a block of code a specific number of times.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//2. while loop
// . Executes a block while a conditons is true.

let y = 0;
while (y < 5) {
  console.log(y);
  y++;
}

//3. do...while loop
// . Executes the block at least once before checking the conditions

let z = 0;
do {
  console.log(z);
  z++;
} while (z < 5);

//4. forEach loop (for arrays)
// . iterates over each element in an array.

[1,2,3].forEach(num => console.log(num));

//5. for...in loop (for objects)
// . iterates over the properties of an object.

let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
  console.log(key, obj[key]);
}


//6. for...of loop (for iterables)
// . iterates over iterable objects like arrays and strings

let arr = [1,2,3];
for (let num of arr) {
  console.log(num);
}



//Functions in Javascript
// Functions Types
//1. Regular Functions

function greet(username){
    return `Hello, ${username}!`;
}

console.log(greet("Paralengend"));

//2. Arrow Function

// . Shorter syntax for defining functions.

const add = (a, b) => a + b;
console.log(add(5, 3));

//3. Callback Functions
// . Functions passed as arguments to other functions.

// example:
function processUserInput(callback) {
    const name = "Paralengend";
    callback(name);
}

function sayHello(user) {
    console.log(`Hello, ${user}!`);
}

processUserInput(sayHello);

//4. Immediately invoked function Expression (IIFE)
// . A function that runs immediately after being defined.

(function(){
    console.log("IIFE");
})

//5. Higher-Order Function
//. A function that takes another function as an agrument 

function operate(fn, a, b) {
    return fn(a, b);
}

console.log(operate((a, b) => a + b, 5, 3));

//////// Scoping & Closures in Javascript

//Scoping Rules
//1. Global Scope
// . Variables declared outside any function are accessible anywhere.

let globalVar = "global";
function show(){
    console.log(globalVar);
}

//2. Function Scope
// . Variables declared inside a function are not accessible outside.

function ex(){
    let localVar = 20;
}
console.log(localVar);

//3. Closures
// . A function that remembers variables form its outer function 

function outer() {
    return function inner (y){
        return x + y;
    
    };
}

const addfive = outer(5);
console.log(addfive(3));


