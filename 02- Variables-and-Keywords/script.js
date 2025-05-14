// 🔢 1. var
// 📌 var is a function-scoped or globally-scoped variable declaration keyword.
// It is used to declare variables that can be reassigned.
var name = "para";
var age = 30;


// 🧱 2. let
// 📌 let is a block-scoped variable declaration keyword.
// It is used to declare variables that can be reassigned within the block scope.
let city = "New York";
let country = "USA";


// 🔒 3. const
// 📌 const is a block-scoped variable declaration keyword.
// It is used to declare variables that cannot be reassigned.
const pi = 3.14;
const gravity = 9.8;
const maxUsers = 100;
const minUsers = 1;


// 📝 Variable Declaration, Initialization,
// and Updating

// 📥 1. Declaration
// 📌 Variables are declared using var, let, or const keywords.
var name;
let age;


// 🎯 2. Initialization
// 📌 Variables are initialized with a value.
name = "mohit";
age = 25;


// 🔁 3. Updating
// 📌 Variables can be updated with a new value.
name = "rohan";
age = 30;



// 💡 example = "This is an example of variable declaration, initialization, and updating.";

let score;    // 🧾 Variable declaration
score = 100; // ⚙️ Variable initialization
score = 200; // 🔁 Variable updating
console.log(score)


// 📜 JavaScript Statements and
// Semicolons

// ✅ Statements
// Statements are individual instructions in JavaScript, like variable
// declarations or function calls

let x = 10; // 🧾 Variable declaration
let y = 20; // 🧾 Variable declaration
let sum = x + y; // ➕ Variable declaration and initialization
console.log(sum); // 📢 Function call


// ❗ Semicolons
// Semicolons are used to terminate statements in JavaScript.
// They are optional in most cases, but it's a good practice to use them
// to avoid potential issues with automatic semicolon insertion (ASI).

// ✅ Example of using semicolons
let a = 5; // 🧾 Variable declaration
let b = 10; // 🧾 Variable declaration
let result = a + b; // ➕ Variable declaration and initialization



// 💬 Addings comments in javascript
// 🟢 Single-line comment
// This is a single-line comment
let f = 5; // ✍️ This is a single-line comment
// 🟠 Multi-line comment
/*
📌 This is a multi-line comment
🧵 It can span multiple lines
*/
let z = 10; /* 📝 This is a multi-line comment
✂️ It can also be used to comment out code */
// 🔵 Block comment
/*
🧱 This is a block comment
📏 It can span multiple lines
*/


// 😊 Expressions in JavaScript and Their
// Difference from Statements

// 🧮 1. Expressions
// 📌 An expression is a piece of code that evaluates to a value.

let total = 5 + 10; // ➕ This is an expression

// 🧾 2. Statements
// 📌 A statement is a complete instruction that performs an action.

console.log(total); // 📢 This is a statement


// ✅✅ JavaScript Operators

// ➕ 1. Arithmetic Operators
let num1 = 10;
let num2 = 5;
console.log(num1 + num2); // ➕ Addition
console.log(num1 - num2); // ➖ Subtraction
console.log(num1 * num2); // ✖️ Multiplication
console.log(num1 / num2); // ➗ Division
console.log(num1 % num2); // 🧮 Modulus
console.log(num1 ** num2); // ⚡ Exponentiation
console.log(num1++); // 🔼 Increment
console.log(num1--); // 🔽 Decrement

// 🔧 2. Assignment Operators
let e = 10;
let g = 5;
e += g; // ➕ e = e + g
console.log(e); // 🖨️ 15
e -= g; // ➖ e = e - g
console.log(e); // 🖨️ 10
e *= g; // ✖️ e = e * g
console.log(e); // 🖨️ 50
e /= g; // ➗ e = e / g
console.log(e); // 🖨️ 10
e %= g; // 🧮 e = e % g
console.log(e); // 🖨️ 0
e **= g; // ⚡ e = e ** g
console.log(e); // 🖨️ 0

// ⚖️ 3. Comparison Operators
let a1 = 10;
let b1 = 5;
console.log(a1 == b1); // 🤝 Equal to
console.log(a1 != b1); // 🚫 Not equal to
console.log(a1 === b1); // 🔍 Strict equal to
console.log(a1 !== b1); // 🚫 Strict not equal to
console.log(a1 > b1); // 🔼 Greater than
console.log(a1 < b1); // 🔽 Less than
console.log(a1 >= b1); // ⬆️ Greater than or equal to
console.log(a1 <= b1); // ⬇️ Less than or equal to

// 🔄 4. Logical Operators
let x1 = true;
let y1 = false;
console.log(x1 && y1); // 🟩 Logical AND
console.log(x1 || y1); // 🟨 Logical OR
console.log(!x1); // 🔁 Logical NOT

// 🧠 5. Bitwise Operators
let a2 = 5; // 0101
let b2 = 3; // 0011
console.log(a2 & b2); // 🧩 Bitwise AND
console.log(a2 | b2); // 🧩 Bitwise OR
console.log(a2 ^ b2); // 🧩 Bitwise XOR
console.log(~a2); // 🧩 Bitwise NOT
console.log(a2 << 1); // ⬅️ Left shift
console.log(a2 >> 1); // ➡️ Right shift
