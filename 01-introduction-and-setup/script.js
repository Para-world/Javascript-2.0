// 🌐 JavaScript Console Logging Examples

// 1️⃣ General Logging - Displays standard messages
console.log("Hello World!");

// 2️⃣ Info Logging - Displays informational messages
console.info("This is an informational message.");

// 3️⃣ Warning Logging - Highlights potential issues
console.warn("This is a warning message.");

// 4️⃣ Error Logging - Indicates serious problems
console.error("This is an error message.");

// 5️⃣ Debug Logging - For debugging during development
console.debug("This is a debug message.");

// 6️⃣ Table Logging - Displays data in a tabular format
console.table([
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
]);

// 7️⃣ Group Logging - Groups related logs together
console.group("👤 User Information");
console.log("Name: John");
console.log("Age: 30");
console.groupEnd();

// 8️⃣ Time Logging - Measures code execution time
console.time("⏱ My Timer");
// (Insert code block to measure)
console.timeEnd("⏱ My Timer");

// 9️⃣ Prompt - Takes user input
const userInput = prompt("Please enter your name:");
console.log("User input:", userInput);

// 🔟 Alert - Displays a popup alert to the user
alert("🚨 This is an alert message!");

// 1️⃣1️⃣ Confirm - Asks for confirmation
const userConfirmed = confirm("Are you sure you want to proceed?");
console.log("User confirmed:", userConfirmed);
