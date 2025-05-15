// Primitive Data Types in JavaScript
// Primitive data types are immutable and stored directly in
// memory.


//1. Number (integer, float)
let num1 = 5; // integer
let num2 = 5.5; // float

//2. String (text enclosed in quotes)
let str1 = "Hello, World!"; // double quotes
let str2 = 'Hello, World!'; // single quotes
let str3 = `Hello, World!`; // backticks (template literals)
//3. Boolean (represents true or false)
let isTrue = true;
let isFalse = false;

//4. Null (represents an empty or non-existent value)
let emptyValue = null;

//5. Undefined (Declared but not assigned a value)
let notAssigned;

//6. Symbol (Unique and immutable value)
let uniqueSymbol = Symbol("unique");

//7. BigInt (Handles large numbers beyond Number.MAX_SAFE_INTEGER)
let bigIntValue = BigInt(1234567890123456789012345678901234567890);




//Reference Data Types in JavaScript
// Referece data types are sotred in memory by referene and cab ne modified. 
//1. Object (collection of key-value pairs)
let person = {
  name: "John",
  age: 30,
  isStudent: false,
};

//2. Array (ordered list of values)
let fruits = ["apple", "banana", "cherry"];



//Javascript data types 
//javascript  had 8 data types categorized into primitive and reference types.


//Primitive Data Types 
//.Number -> let num = 10;
//.String -> let str = "Hello";
//.Boolean -> let isTrue = true;
//.Null -> let data = null;
//.Undefined -> let data;
//.Symbol -> let sym = Symbol("unique");

// Reference Data Types
//. Array -> let arr = [1, 2, 3];
//. Object -> let obj = { name: "John", age: 30 };



//Examples

//Primitive Data Types
let num = 10;
let str = "Hello";
let ishere = true;
let data = null;
let not;
let sym = Symbol("unique");
let bigInt = BigInt(1234567890123456789012345678901234567890);

// Reference Data Types
let arr = [1, 2, 3];
let obj = { name: "John", age: 30 };


//Some impportant Values in javascript

//undefined (variable declared but not assigned a value)
// null (intentional absence of value)
// Nan ("Not a Number", represents an invalid number)
// Infinity (represents an infinite value)

//Example:

let value; // undefined
console.log(value); // undefined

let price = null; // null (no price assigned yet)
console.log(price); // null

let result = "hello world" / 2; // NaN (not a number)
console.log(result); // NaN

let infiniteNumber = 10 / 0; // Infinity
console.log(infiniteNumber); // Infinity



