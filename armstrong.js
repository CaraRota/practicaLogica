// Exercise: Check for Armstrong Number

// An Armstrong number (also known as narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

// Write a function called isArmstrong that takes a positive integer n as input and returns true if n is an Armstrong number, and false otherwise.

// For example:

//     153 is an Armstrong number because 1^3+5^3+3^3=1+25+27=153.
//     371 is an Armstrong number because 3^3+7^3+1^3=27+343+1=371.
//     123 is not an Armstrong number because 1^3+2^3+3^3=1+8+27=36, which is not equal to 123.

// Write the isArmstrong function and test it with different values of n to ensure it works correctly.

const n = 153;

const isArmstrong = (n) => {
    if (n < 0) {
        return "Your input must be a positive number";
    }

    let getNum = 0;
    stringedNum = n.toString();

    for (let i = 0; i < stringedNum.length; i++) {
        let number = stringedNum[i] ** stringedNum.length;
        getNum = getNum + number;
    }

    if (getNum === n) {
        return true;
    }
    return false;
};

console.log(isArmstrong(n));
