const arr = [4, 4, 3, 1, 1, 3, 3, 2];

var findLeastFrequentElement = function (arr) {
    let totalSum = Infinity;
    let ans;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let k = i; k < arr.length; k++) {
            if (arr[i] === arr[k]) {
                count++;
            }
        }
        if (count < totalSum) {
            totalSum = count;
            ans = arr[i];
        }
    }
    return ans;
};

console.log(findLeastFrequentElement(arr));
