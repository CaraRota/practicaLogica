// Exercise: Generate Fibonacci Sequence

// Write a function called fibonacci that generates the Fibonacci sequence up to a given number n.
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting with 0 and 1. For example:

//     Fibonacci sequence up to 5 would be [0, 1, 1, 2, 3, 5].
//     Fibonacci sequence up to 8 would be [0, 1, 1, 2, 3, 5, 8].

// Write the fibonacci function and test it with different values of n to ensure it works correctly.

const n = -1;

const fibonacci = (n) => {
    const fibo = [0, 1];
    if (n < 0) {
        return "No fibo for negatives";
    }
    if (n === 0 || n === 1) {
        return fibo;
    }

    for (let i = 2; i <= n; i++) {
        x = fibo[i - 2] + fibo[i - 1];
        if (x <= n) {
            fibo.push(x);
        }
    }
    return fibo;
};

console.log(fibonacci(n));
