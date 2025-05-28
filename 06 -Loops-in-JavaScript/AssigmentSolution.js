// 1. Age Category Message - Ask the user for their age. if they are under 18, print "you are a minor". if they are between 18 and 60, print "You are an adult". if they are above 60, print "you are a senior citizen".

let age = parseInt(prompt("Please enter your age:"));
if (age < 19) {
    console,log("you are a minor");
} else if (age >= 19 && age <= 60) {
    console.log("you are an adult");
} else {
    console.log("you are a senior citizen");
}

// 2. Even or odd Sum - Take two numbers from the user using prompt(). if the sum of both numbers is even , print "Even Sum"; otherwise , print "odd Sum".

let num1 = parseInt(prompt("Please enter the first number:"));
let num2 = parseInt(prompt("Please enter the second number:"));
let sum = num1 + num2;
if (sum % 2 === 0) {
    console.log("Even Sum");
}else {
    console.log("Odd Sum");
}

// 3. Character Case Checker - Ask the user for a single character . Check if it's uppercase or lowercase, or neither (not  a letter ).

let char = prompt("Please enter a single character: ");
if (char.length !== 1) {
    console.log("Please enter a single character.");
} else if (char === char.toUpperCase()) {
    console.log("Uppercase");
} else if (char === char.toLowerCase()) {
    console.log("Lowercase");
} else {
    console.log("Neither");
}

// 4. Largest of Three  Numbers - Take three numbers as input and print the largest number among then without using Math.max().
let numb1 = parseInt(prompt("Please enter the first number:"));
let numb2 = parseInt(prompt("Please enter the second number:"));
let numb3 = parseInt(prompt("Please enter the third number:"));

if (numb1 >= numb2 && numb1 >= numb3) {
    console.log("The largest number is: " + numb1);
} else if (numb2 >= numb1 && numb2 >= numb3) {
    console.log("The largest number is: " + numb2);
} else {
    console.log("The largest number is: " + numb3);
}

// 5. Leap Year Checker - Ask the user for a year  and dertermine if it's a leap year or not.
let year = parseInt(prompt("Please enter a year:"));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


// 6. Simple Calculator -  Ask the user for rwo numbers an operator (+, -, *, /) perform the operation and display the result.

let number1 = parseFloat(prompt("Please enter the first number:"));
let number2 = parseFloat(prompt("Please enter the second number:"));
let operator = prompt("Please enter an operator (+, -, *, /):");
let result;
switch (operator) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        result = number1 / number2;
        break;
}
console.log("The result is: " + result);

// 7. Positive, Negative, or Zero - take a number input and check if it is positive,negative, or Zero.

let number = parseFloat(prompt("Please enter a number:"));
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// 8. User Greeting  -  Ask for the user's name and time (24hour format). Greet them accordingly:
  
//    5Am - 12Pm: "Good Morning",[Name]!"
//     12Pm - 5Pm: "Good Afternoon",[Name]!"
//     5Pm - 9Pm: "Good Evening",[Name]!"
//     9Pm - 5Am: "Good Night",[Name]!"

let userName = prompt("Please enter your name:");
let time = parseInt(prompt("Please enter the time in 24-hour format (0-23):"));
if (time >= 5 && time < 12) {
    console.log("Good Morning, " + userName + "!");
} else if (time >= 12 && time < 17) {
    console.log("Good Afternoon, " + userName + "!");
} else if (time >= 17 && time < 21) {
    console.log("Good Evening, " + userName + "!");
} else {
    console.log("Good Night, " + userName + "!");
}


// 9. Traffic Light System - Ask the user for a traffic ligh color (red, yellow, green). Print appropriate messsage:
//    Red: "Stop!"
//     Yellow: "Get Ready!"
//     Green: "Go!"

let trafficLight = prompt("Please enter the traffic light color (red, yellow, green):");
switch (trafficLight) {
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Get Ready!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Invalid color.");
}

// 10. Multiplication Table - Ask the user for a number and print its Multiplication table up to  10.

let tableNumber = parseInt(prompt("Please enter a number for the multiplication table:"));
for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}

// 11.grade Calculator - Ask the user for their marks (0-100). Assign grades based on the range:


//  90-100: "A"
//  80-89: "B"
//  70-79: "C"
//  60-69: "D"
//  0-59: "F"


let marks = parseInt(prompt("Please enter your marks (0-100):"));
let grade;
if (marks >= 90 && marks <= 100) {
    grade = "A";
} else if (marks >= 80 && marks <= 89) {
    grade = "B";
} else if (marks >= 70 && marks <= 79) {
    grade = "C";
} else if (marks >= 60 && marks <= 69) {
    grade = "D";
} else {
    grade = "F";
}
console.log("Your grade is: " + grade);

// 12. Simple Login System - set a predefined username and password. Ask the user to enter their credenttials using prompt(). if correct,print "Login Successful", otherwise, print "Incorrect username or password."

let predefinedUsername = "para20929292";
let predefinedPassword = "@defaultPassword123";
let username = prompt("Please enter your username:");
let password = prompt("Please enter your password:");
if (username === predefinedUsername && password === predefinedPassword) {
    console.log("Login Successful");
} else {
    console.log("Incorrect username or password.");
}

// 13. Swapping Without Third Variable - Take two numbers from the user and swap their values without using a third variable.

let a = parseFloat(prompt("Please enter the first number:"));
let b = parseFloat(prompt("Please enter the second number:"));
a = a + b;
b = a - b;
a = a - b;
console.log("After swapping: a = " + a + ", b = " + b);

//  14. FizzBuzz(Multiple of Both) - Ask the user for a number . if it's a multiple of both 3 and 5, print "FizzBuzz", if only 3, print "Fizz";  if only 5, print "Buzz"; otherwise, print the number itself.

let fizzBuzzNumber = parseInt(prompt("Please enter a number:"));
if (fizzBuzzNumber % 3 === 0 && fizzBuzzNumber % 5 === 0) {
    console.log("FizzBuzz");
} else if (fizzBuzzNumber % 3 === 0) {
    console.log("Fizz");
} else if (fizzBuzzNumber % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(fizzBuzzNumber);
}

// 15. Number Reversal - Take a three-digit number form the user and print its reverse.(Example:123->321).

let threeDigitNumber = prompt("Please enter a three-digit number:");
if (threeDigitNumber.length !== 3 || isNaN(threeDigitNumber)) {
    console.log("Please enter a valid three-digit number.");
} else {
    let reversedNumber = threeDigitNumber.split("").reverse().join("");
    console.log("Reversed number: " + reversedNumber);
}

// 16. Sum of Digits - Take a number form the user and print the sum of its digits.

let digitNumber = prompt("Please enter a number:");
let sumOfDigits = 0;
for (let digit of digitNumber) {
    sumOfDigits += parseInt(digit);
}
console.log("Sum of digits: " + sumOfDigits);

//  17. Palindrome Checker - Ask the user for a word , Check if it reads the same forward and backward. Print "Palindrome" or "Not a Palindrome".

let word = prompt("Please enter a word:");
let reversedWord = word.split("").reverse().join("");
if (word === reversedWord) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}

// 18. Reverse Without String Methods -  Ask the user for a number and reverse it without using.split(),.reverse(), or .join().

let numbers = prompt("Please enter a number:");

let reversedNumber = "";
for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumber += numbers[i];
}
console.log("Reversed number: " + reversedNumber);

// 19. Find Second Largesst - Take three numbers as input and find the second largest number (wihout using sort() or Math.max()).

let firstNum = parseInt(prompt("Please enter the first number:"));
let secondNum = parseInt(prompt("Please enter the second number:"));
let thirdNum = parseInt(prompt("Please enter the third number:"));
let largest, secondLargest;
if (firstNum >= secondNum && firstNum >= thirdNum) {
    largest = firstNum;
    secondLargest = Math.max(secondNum, thirdNum);
} else if (secondNum >= firstNum && secondNum >= thirdNum) {
    largest = secondNum;
    secondLargest = Math.max(firstNum, thirdNum);
} else {
    largest = thirdNum;
    secondLargest = Math.max(firstNum, secondNum);
}
console.log("The second largest number is: " + secondLargest);


//  20. Find First Non-Repeating Character – Ask the user for a word
//      and find the first character that does not repeat. Example: hello
//      → h (since e, l, and o repeat).

let inputWord = prompt("Please enter a word:");
let firstNonRepeatingChar = null;
for (let char of inputWord) {
    if (inputWord.indexOf(char) === inputWord.lastIndexOf(char)) {
        firstNonRepeatingChar = char;
        break;
    }
}
if (firstNonRepeatingChar) {
    console.log("First non-repeating character: " + firstNonRepeatingChar);
} else {
    console.log("All characters repeat.");
}

// 21. Even Digit Counter – Take a number from the user and count
//     how many even digits it has.


let evenDigitCount = 0;
let numberInput = prompt("Please enter a number:");
for (let digit of numberInput) {
    if (digit % 2 === 0) {
        evenDigitCount++;
    }
}
console.log("Number of even digits: " + evenDigitCount);

// 22.  Nested Condition Challenge – Ask the user for their age and
//      salary. Print a message based on conditions:

 

//       If age is below 18, print “Not eligible”


//       If age is 18 or more but salary is less than ₹20,000, print “Low
//       Salary”

  
//       If salary is ₹50,000 or more, print “High Salary”


//       . Otherwise, print “Medium Salary

let userAge = parseInt(prompt("Please enter your age:"));
let userSalary = parseFloat(prompt("Please enter your salary:"));
if (userAge < 18) {
    console.log("Not eligible");
} else if (userAge >= 18 && userSalary < 20000) {
    console.log("Low Salary");
} else if (userSalary >= 50000) {
    console.log("High Salary");
} else {
    console.log("Medium Salary");
}


//  23. Toggle Case – Ask the user for a word and toggle the case of
//     every character. Example: HeLLo → hEllO.

let toggleCaseWord = prompt("Please enter a word:");
let toggledWord = "";
for (let char of toggleCaseWord) {
    if (char === char.toUpperCase()) {
        toggledWord += char.toLowerCase();
    } else {
        toggledWord += char.toUpperCase();
    }
}
console.log("Toggled word: " + toggledWord);

// 24. Find the Missing Number in a Sequence – Take a list of
//     consecutive numbers (except one missing) and find the
//     missing number. Example: 1, 2, 3, 5 → Missing number is 4.

let numbersList = prompt("Please enter a list of consecutive numbers separated by commas (e.g., 1,2,3,5):");
let numbersArray = numbersList.split(",").map(Number);
let missingNumber = null;
for (let i = 1; i <= Math.max(...numbersArray); i++) {
    if (!numbersArray.includes(i)) {
        missingNumber = i;
        break;
    }
}
if (missingNumber) {
    console.log("Missing number: " + missingNumber);
} else {
    console.log("No missing number found.");
}



// 25. Convert Number to Words – Take a single-digit number and
//     print it in words (Example: 1 → One, 2 → Two).

let singleDigitNumber = parseInt(prompt("Please enter a single-digit number (0-9):"));
let numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
if (singleDigitNumber >= 0 && singleDigitNumber <= 9) {
    console.log("Number in words: " + numberWords[singleDigitNumber]);
} else {
    console.log("Please enter a valid single-digit number.");
}


