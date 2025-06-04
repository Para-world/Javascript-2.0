

## ✅ What is an Array?

An **array** is a special variable that can hold **multiple values** in a **single variable**.

```js
let fruits = ["Apple", "Banana", "Mango"];
```

---

## ✅ Why Use Arrays?

**Real-world example:**

Imagine you're making an app for a grocery shop. Instead of creating:

```js
let item1 = "Milk";
let item2 = "Bread";
let item3 = "Eggs";
```

You can use:

```js
let items = ["Milk", "Bread", "Eggs"];
```

---

## ✅ How to Create an Array

```js
let students = ["Deepak", "Ravi", "Aman"];
let marks = [85, 90, 78];
let mixed = ["Laptop", 55000, true];
```

---

## ✅ Accessing Elements

```js
let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // Red
console.log(colors[2]); // Blue
```

---

## ✅ Array Length

```js
let names = ["Riya", "Priya", "Anjali"];
console.log(names.length); // 3
```

---

## ✅ Changing Elements

```js
let cities = ["Delhi", "Mumbai", "Kolkata"];
cities[1] = "Pune";
console.log(cities); // ["Delhi", "Pune", "Kolkata"]
```

---

## ✅ Adding Elements

### `push()` – Add to end

```js
let numbers = [1, 2, 3];
numbers.push(4); // [1, 2, 3, 4]
```

### `unshift()` – Add to beginning

```js
numbers.unshift(0); // [0, 1, 2, 3, 4]
```

---

## ✅ Removing Elements

### `pop()` – Remove from end

```js
numbers.pop(); // removes 4
```

### `shift()` – Remove from beginning

```js
numbers.shift(); // removes 0
```

---

## ✅ Looping Through Arrays

### `for` loop

```js
let users = ["Deepak", "Amit", "Rohit"];
for(let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
```

### `for...of` loop

```js
for(let user of users) {
  console.log(user);
}
```

### `forEach()`

```js
users.forEach(function(user){
  console.log(user);
});
```

---

## ✅ Common Methods You Must Know

### `includes()`

```js
let tech = ["HTML", "CSS", "JS"];
console.log(tech.includes("CSS")); // true
```

### `indexOf()`

```js
console.log(tech.indexOf("JS")); // 2
```

### `join()`

```js
console.log(tech.join(", ")); // "HTML, CSS, JS"
```

### `slice()`

```js
let sliced = tech.slice(1, 3); // ["CSS", "JS"]
```

### `splice()`

```js
let brands = ["Nike", "Adidas", "Puma"];
brands.splice(1, 1); // removes "Adidas"
console.log(brands); // ["Nike", "Puma"]
```

---

## ✅ Array of Objects

```js
let employees = [
  { name: "Deepak", age: 25, salary: 30000 },
  { name: "Ravi", age: 22, salary: 25000 },
  { name: "Anjali", age: 24, salary: 28000 }
];

employees.forEach(emp => console.log(emp.name));
```

---

## ✅ Sorting Arrays

```js
let scores = [70, 90, 80];
scores.sort(); // Incorrect numeric sort
scores.sort((a, b) => a - b); // Correct numeric sort
```

---

## 📦 Real-world Examples

### 📦 Grocery Billing App

```js
let items = ["Milk", "Rice", "Bread"];
let prices = [25, 40, 30];
let total = 0;
for(let price of prices){
  total += price;
}
console.log("Total Bill: ₹" + total);
```

### 📚 Coaching Center - Top 3 Students

```js
let toppers = ["Deepak", "Ravi", "Riya"];
console.log("Top Students:");
toppers.forEach((student, index) => {
  console.log(`${index + 1}. ${student}`);
});
```

### 🏥 Clinic Queue System

```js
let queue = ["Patient1", "Patient2"];
queue.push("Patient3"); // new patient
let current = queue.shift(); // next patient
console.log("Now checking:", current);
```

---

## 🧠 Practice Questions

1. Create an array of 5 favorite places you want to visit. Add 2 more using `push()` and `unshift()`.
2. Create an array of 4 mobile brands. Remove the 2nd brand using `splice()`.
3. Loop through an array of numbers and find the total sum.
4. Check if "Javascript" exists in an array of programming languages.
5. Create an array of student objects with name and marks. Print names of those scoring above 80.
6. Create a cart system where users can add, remove, and display cart items.
7. Sort an array of prices in ascending order.
8. Create an array of exam scores. Find the highest score.

---
