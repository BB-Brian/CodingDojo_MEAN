// Fizz Buzz
// Objectives:
// 1) Use of the modulus operator
// 2) Familiarity with loops
// 3) Familiarity with conditionals

// Create a function called fizzbuzz that accepts a parameter n. Have the function log all the numbers from 1 to n in order with the following exceptions:
// - If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// - If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// - If the number is divisible by 5 but not by 3, log "Buzz" instead of the number
// Write your code and run it with several examples to ensure it is working as expected. Use the modulus operator!

// Example - fizzbuzz(15) would log the following (each element on its own line):
// 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz

// BONUS 1: Validate the user input. If the function is not passed a positive number, either throw an error or return null.
// Example - fizzbuzz("fifteen") would throw the following error:
// Parameter must be a positive number

// BONUS 2: Rather than have the function log each element, return a nicely formatted string with all the elements. Include commas where appropriate to make it easier to read.
// Example - fizzbuzz(15) would return the following string:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, and FizzBuzz.


n = 15;

function fizzBuzz(n) {
    fizzBuzzString = "";
    for(let i = 1; i <= n; i++){
        console.log(fizzBuzzString);
        if(i % 3 === 0) {
            fizzBuzzString += "Fizz, ";
        }
        if(i % 5 === 0) {
            fizzBuzzString += "Buzz, ";
        }
        if(i % 3 && i % 5 === 0) {
            fizzBuzzString += "FizzBuzz";
        }
        else {
            fizzBuzzString += i + ", ";
        }
        if(i == n){
          fizzBuzzString += "."
        }
    }
    return fizzBuzzString;
}

fizzBuzz(n);