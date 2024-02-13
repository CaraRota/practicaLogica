/*
Exercise: Sum of Multiples

Write a JavaScript function called sumOfMultiples that takes two parameters: limit and multiples. 
The function should calculate the sum of all multiples of the numbers specified in the multiples array up to the limit.

For example:

    If limit is 10 and multiples is [3, 5], the function should calculate the sum of all multiples of 3 and 5 up to 10, 
    which are 3, 5, 6, and 9, and return their sum, which is 23.
    If limit is 12 and multiples is [2, 4, 6], the function should calculate the sum of all multiples of 2, 4, and 6 up to 12 and return their sum.

Your function should be able to handle various input values for limit and multiples.

Write the sumOfMultiples function and test it with different parameters to ensure it works correctly.
*/

const limit = 10;
const multiples = [3, 5];

const sumOfMultiples = (limit, multiples) => {
    let sum = 0;

    for (k = 0; k < limit; k++) {
        for (let i = 0; i < multiples.length; i++) {
            if (k % multiples[i] === 0) {
                sum = sum + k;
                break;
            }
        }
    }
    return sum;
};

console.log(sumOfMultiples(limit, multiples));
