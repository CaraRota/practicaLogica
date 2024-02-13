/*
Exercise: Count Occurrences of a Character

Write a JavaScript function called countOccurrences that takes two parameters: a string str and a character char.
The function should count the number of occurrences of the character char in the string str and return the count.

For example:

    If the input string is "hello" and the character is "l", the function should return 2, because there are two occurrences of the character "l" in the string "hello".
    If the input string is "programming" and the character is "m", the function should return 2, because there are 
    two occurrences of the character "m" in the string "programming".
    If the input string is "openai" and the character is "z", the function should return 0, because there are no occurrences of the character "z" in the string "openai".

Write the countOccurrences function and test it with different strings and characters to ensure it works correctly.
*/

const string = "programming";
const character = "g";

const countOccurrences = (string, character) => {
    let counter = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            counter++;
        }
    }

    return counter;
};

console.log(countOccurrences(string, character));
