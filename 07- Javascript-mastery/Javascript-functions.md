

## 🔹 What is a Function in JavaScript?

A **function** is a block of code designed to perform a particular task. It helps make your code reusable, organized, and modular.

### ✅ Syntax:
```javascript
function functionName(parameters) {
  // code to be executed
}
```

---

## 🔸 1. Function Declaration (Named Function)

```javascript
function greet() {
  console.log("Hello, Deepak!");
}
greet(); // Output: Hello, Deepak!
```

---

## 🔸 2. Function Expression

```javascript
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3)); // Output: 8
```

---

## 🔸 3. Anonymous Function

```javascript
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);
```

---

## 🔸 4. Arrow Function (ES6+)

```javascript
const multiply = (a, b) => a * b;
console.log(multiply(4, 2)); // Output: 8
```

---

## 🔸 5. IIFE (Immediately Invoked Function Expression)

```javascript
(function() {
  console.log("IIFE function executed!");
})(); // Output: IIFE function executed!
```

---

## 🔸 6. Constructor Function

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Deepak", 25);
console.log(person1.name); // Output: Deepak
```

---

## 🔸 7. Callback Function

```javascript
function processData(data, callback) {
  console.log("Processing: " + data);
  callback();
}

function done() {
  console.log("Done!");
}

processData("JavaScript", done);
```

---

## 🔸 8. Recursive Function

```javascript
function countDown(n) {
  if (n <= 0) return;
  console.log(n);
  countDown(n - 1);
}
countDown(5);
```

---

## 🔸 9. Function with Default Parameters

```javascript
function sayHi(name = "Guest") {
  console.log("Hi, " + name);
}
sayHi(); // Output: Hi, Guest
```

---

## 🔸 10. Rest Parameters

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

---

## 🔸 11. Function Inside Function (Nested Functions)

```javascript
function outer() {
  console.log("Outer function");

  function inner() {
    console.log("Inner function");
  }

  inner();
}
outer();
```

---

## 🔸 12. Pure Function

A pure function always returns the same output for the same input and has no side effects.

```javascript
function pureAdd(a, b) {
  return a + b;
}
console.log(pureAdd(2, 3)); // Output: 5
```

---

## 🔸 13. Impure Function

An impure function has side effects or depends on external values.

```javascript
let count = 0;
function impureIncrement() {
  count++;
  return count;
}
console.log(impureIncrement()); // Output depends on external variable `count`
```

---

## 🧠 Practice Questions

1. Write a function to check if a number is even or odd.
2. Create an arrow function to return the square of a number.
3. Create a function that accepts another function as an argument and calls it.
4. Write a recursive function to calculate factorial of a number.
5. Make a function using default parameters and rest parameters together.
6. Create an IIFE that prints your name.
7. Create a constructor function to make `Car` objects with properties `brand` and `speed`.
8. Create a pure function to calculate the area of a rectangle.
9. Create an impure function that modifies a global variable.
10. Create a function expression that returns the largest of three numbers.
11. Create a nested function that multiplies two numbers and then doubles the result.
12. Create a callback function to simulate loading data and printing "Data loaded".
13. Create an arrow function that reverses a string.
14. Create a function that takes another function as a callback and applies it to an array.
15. Write a recursive function to reverse a number.

---

