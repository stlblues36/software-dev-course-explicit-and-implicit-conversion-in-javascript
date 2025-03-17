/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


// Explicitly converting string to number before performing arithmetic
let result = Number("5") - 2;
console.log("The result is: " + result);

// Using explicit Boolean conversion for a string
let isValid = Boolean("false");  // This will be true because non-empty strings are truthy
if (isValid) {
    console.log("This is valid!");
}

// Explicitly converting the string to a number for arithmetic operations
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

