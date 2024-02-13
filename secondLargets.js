/* Exercise: Find the Second Largest Element in an Array
Write a function called findSecondLargest that takes an array of numbers as input and returns the second largest element in the array.
If the array has fewer than two elements, the function should return null.

For example:
    For the array [5, 3, 9, 1, 7], the function should return 7.
    For the array [2, 2, 1, 1], the function should return 1 because there are duplicate elements.

Write the findSecondLargest function and test it with different arrays to ensure it works correctly.
*/
const array = [5, 3, 9, 1, 7];

const secondLargest = (array) => {
    const newArray = [...new Set(array)];

    if (newArray.length < 2) {
        return null;
    }

    const maxNum = Math.max(...newArray);
    let secondLargest = -Infinity;

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] !== maxNum) {
            if (newArray[i] > secondLargest) {
                secondLargest = newArray[i];
            }
        }
    }

    return secondLargest;
};

console.log(secondLargest(array));
