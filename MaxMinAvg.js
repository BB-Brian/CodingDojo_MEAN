// Max, min, and average
// Objectives:

// 1) Iterate over an array
// 2) Construct a string
// 3) Use the return statement
// Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."


let maxMinAvg = [1, -2, 9, 4];

function MaxMinAvg (arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i]
        }
        sum += arr[i];
    }
    valueString = "The minimum is " + min + ", the maximum is " + max + ", and the average is " + sum/arr.length + ".";
    return valueString;
}

MaxMinAvg(maxMinAvg);