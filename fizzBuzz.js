/*
Exercise: FizzBuzz

Write a function called fizzBuzz that takes a number n as input and prints out the numbers from 1 to n, following these rules:

    If the number is divisible by 3, print "Fizz" instead of the number.
    If the number is divisible by 5, print "Buzz" instead of the number.
    If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.
    Otherwise, print the number itself.
*/

const n = 15;

const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};

fizzBuzz(n);
