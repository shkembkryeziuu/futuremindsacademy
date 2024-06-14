// Function to print "Hello World" ten times
function printHelloWorldTenTimes() {
    for (let i = 0; i < 10; i++) {
        console.log("Hello World");
    }
}

// Function to print a given string
function printString(s) {
    console.log(s);
}

// Function to convert kilometers to miles
function kilometersToMiles(km) {
    const miles = km * 0.621371;
    return miles;
}

// Function to calculate the area of a circle
function circleArea(radius) {
    const pi = Math.PI;
    return pi * Math.pow(radius, 2);
}

// Function to format a welcome message
function welcomeMessage(name, surname) {
    return `Welcome, ${name} ${surname}`;
}

// Function to determine if a user is a working citizen
function isWorkingCitizen(age) {
    return age >= 18 && age < 65;
}

// Function to determine if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Examples of how to call these functions

// 1. Print "Hello World" ten times
printHelloWorldTenTimes();

// 2. Print a given string
printString("This is a test string.");

// 3. Convert kilometers to miles and print the result
let km = 10;
let miles = kilometersToMiles(km);
console.log(`${km} kilometers is equal to ${miles} miles.`);

// 4. Calculate the area of a circle and print the result
let radius = 5;
let area = circleArea(radius);
console.log(`The area of a circle with radius ${radius} is ${area}.`);

// 5. Generate a welcome message and print it
let name = "John";
let surname = "Doe";
let message = welcomeMessage(name, surname);
console.log(message);

// 6. Check if a user is a working citizen and print the result
let age = 30;
let isWorking = isWorkingCitizen(age);
console.log(`Is the person a working citizen? ${isWorking}`);

// 7. Check if a number is even and print the result
let number = 4;
let even = isEven(number);
console.log(`Is the number ${number} even? ${even}`);
