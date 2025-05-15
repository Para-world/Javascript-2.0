// Basic Operators in JavaScript

// 1. Arithmetic Operators(+ - * / %)

let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus (Remainder)

a++; // Increment
console.log(a); // 11
b--; // Decrement
console.log(b); // 4

//2. Assignment Operators(= += -= *= /= %=)
let x = 10;
let y = 5;
x += y; // x = x + y  
console.log(x); // 15

x -= y; // x = x - y
console.log(x); // 10

x *= y; // x = x * y
console.log(x); // 50

x /= y; // x = x / y
console.log(x); // 10

x %= y; // x = x % y
console.log(x); // 0

//3. Comparison Operators(== === != !== > < >= <=)

console.log(5 == '5'); // true (loose equality, type conversion happens)
console.log(5 === '5'); // false (strict equality, no type conversion)

console.log(5 != '5'); // false (loose inequality, type conversion happens)
console.log(5 !== '5'); // true (strict inequality, no type conversion)

console.log(5 > 3); // true
console.log(5 < 3); // false

console.log(5 >= 5); // true
console.log(5 <= 3); // false


//4. Logical Operators(&& || !)

console.log(ture && false); // false (Both conditions must be true)
console.log(true || false); // true (At least one condition must be true)
console.log(!true); // false (Negation)
console.log(!false); // true (Negation)


//Variables Hoisting in javascript
// Hoisiting moves variable and function declarations to the top of their scope before execution.


//✅Using var (Hoisted but Undefined)

console.log(z); // undefined
var z = 10;

//❌Using let and const (Hoisted but Not Initialized)

console.log(f) // ReferenceError: Cannot access 'f' before initialization
let f = 20; // Hoisted but not initialized


//Key Takeaways:
// var is hoisted and initialized to undefined.
// let and const are hoisted but remain in the Temporal Dead Zone (TDZ) until their declaration is encountered.



