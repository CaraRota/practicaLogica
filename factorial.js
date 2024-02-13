// Exercise: Calculate the Factorial of a Number

// Write a function called factorial that takes a positive integer n as input and returns the factorial of n.
//The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

// For example:

//     The factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
//     The factorial of 0 is defined to be 1.

// Write the factorial function and test it with different values of n to ensure it works correctly.}

const n = 3;

const factorial = (n) => {
    let factorial = 1;

    if (n < 0) {
        return "Factorial is not defined for negative integer";
    }

    if (n > 1) {
        for (i = 1; i <= n; i++) {
            factorial = i * factorial;
        }
    }

    return factorial;
};

console.log(factorial(n));
