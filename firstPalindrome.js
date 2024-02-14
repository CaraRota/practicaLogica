/* 2108. Find First Palindromic String in the Array

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.

Example 1:

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

Example 2:

Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".

Example 3:

Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
*/

const words = ["abc", "car", "ada", "racecar", "cool"];

const firstPalindrome = (words) => {
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        const reversedWord = [];
        for (let k = currentWord.length - 1; k >= 0; k--) {
            reversedWord.push(currentWord[k]);
        }
        if (currentWord === reversedWord.join("")) {
            return currentWord;
        }
    }
    return "";
};

console.log(firstPalindrome(words));
