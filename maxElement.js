// Exercise: Find the Maximum Element in an Array

// Write a function called findMax that takes an array of numbers as input and returns the maximum element in the array.

// For example:

//     [5, 3, 9, 1, 7] should return 9.
//     [-1, -5, -3, -9, -7] should return -1.
//     [2] should return 2.

// Write the findMax function and test it with different arrays to ensure it works correctly.

const array = [5, 3, 9, 1, 7];

//Simplest solution:
// const maxNumber = Math.max(...array);
// console.log("this is the max number", maxNumber);

const findMax = (array) => {
    let maxNum = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
        }
    }
    return maxNum;
};

console.log(findMax(array));
