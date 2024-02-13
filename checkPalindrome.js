// Exercise: Check for Palindrome

// Write a function called isPalindrome that takes a string as input and returns true if the string is a palindrome, and false otherwise.
// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

// For example:

//     "radar" is a palindrome.
//     "A man, a plan, a canal, Panama!" is a palindrome.
//     "hello" is not a palindrome.

// Write the isPalindrome function and test it with different strings to ensure it works correctly.

const string = "A man, a plan, a canal, Panama!";

const isPalindrome = (string) => {
    const sanitizedString = string.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const reversedString = [];

    for (let i = sanitizedString.length - 1; i >= 0; i--) {
        reversedString.push(sanitizedString[i]);
    }

    if (reversedString.join("") == sanitizedString) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(string));
