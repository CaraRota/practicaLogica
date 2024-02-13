// Exercise: Check for Prime Number

// Write a function called isPrime that takes a positive integer n as input and returns true if n is a prime number, and false otherwise.
// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// For example:

//     2 is a prime number.
//     3 is a prime number.
//     4 is not a prime number because it has divisors other than 1 and itself (2 and 4).
//     7 is a prime number.

// Write the isPrime function and test it with different values of n to ensure it works correctly.

const n = 5;

const isPrime = (n) => {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(isPrime(n));
