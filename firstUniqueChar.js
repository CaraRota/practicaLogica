/*
387. First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0

Example 2:

Input: s = "loveleetcode"
Output: 2

Example 3:

Input: s = "aabb"
Output: -1
*/

const firstUniqueChar = (s) => {
    let validIndex = -1;

    for (let i = 0; i < s.length; i++) {
        let isUnique = true;
        for (let k = 0; k < s.length; k++) {
            if (s[i] === s[k] && i !== k) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            validIndex = i;
            break;
        }
    }

    return validIndex;
};

console.log("START OF TEST CASES");
console.log("Should return 2. It returns:", firstUniqueChar("loveleetcode"));
console.log("Should return 0. It returns:", firstUniqueChar("leetcode"));
console.log("Should return -1. It returns:", firstUniqueChar("aabb"));
console.log("END OF TEST CASES");
