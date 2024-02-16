const nums = [2, 2, 1, 1, 1, 2, 2];

var majorityElement = function (nums) {
    let totalSum = 0;
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        let counter = 0;
        for (let k = i; k < nums.length; k++) {
            if (nums[i] === nums[k]) {
                counter++;
            }
        }
        if (counter > totalSum) {
            totalSum = counter;
            ans = nums[i];
        }
    }
    return ans;
};

console.log(majorityElement(nums));
