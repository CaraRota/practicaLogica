/*
Given an array of integers, find the two numbers such that they add up to a specific target number.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You need to write a function, let's call it twoSum, that takes three parameters:

    An array of integers nums
    The target sum

The function should return an array containing the indices of the two numbers such that they add up to the target sum.

For example:

Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1] (Because nums[0] + nums[1] = 2 + 7 = 9)

*/

const nums = [2, 0, 1, 4, 11, 4];
const target = 56;

const twoSum = (nums, target) => {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let mid = (left + right) / 2;

    while (left <= right) {
        if (mid < target) {
            left + 1;
        } else {
            right - 1;
        }
    }

    return `There are no elements in the array that meets the target of ${target}`;
};

console.log(twoSum(nums, target));
