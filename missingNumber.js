// Exercise: Find the Missing Number

// You are given an array of integers from 1 to n with one missing number.
// The array is unsorted, and it may contain duplicates. Write a function called findMissingNumber
// that takes an array of integers as input and returns the missing number.

// For example:

//     findMissingNumber([1, 3, 4, 5]) should return 2 because 2 is the missing number.
//     findMissingNumber([1, 2, 3, 5, 5]) should return 4 because 4 is the missing number.

// Write the findMissingNumber function and test it with different arrays to ensure it works correctly.

const array = [1, 6, 2, 7, 3, 5, 4, 5];

array.sort((a, b) => a - b);

const missingNumber = (array) => {
    const newSet = [...new Set(array)];
    let missingNum = null;
    for (let i = 0; i < newSet.length; i++) {
        let gap = newSet[i] - newSet[i - 1];
        if (gap > 1) {
            missingNum = newSet[i] - 1;
            return missingNum;
        }
    }

    if (!missingNum) {
        return "There's no missing number in this array!";
    }
};

console.log(missingNumber(array));
