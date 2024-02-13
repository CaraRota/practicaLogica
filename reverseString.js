/*Exercise: Reverse a String

Write a function called reverseString that takes a string as input and returns the string reversed. For example:

    "hello" should be reversed to "olleh".
    "JavaScript" should be reversed to "tpircSavaJ".
    "" (an empty string) should return "".

Write the reverseString function and test it with different strings to ensure it works correctly.
*/

const string = "tpircSavaJ";

const reverseString = (string) => {
    const reversedArray = [];

    for (let i = string.length - 1; i >= 0; i--) {
        reversedArray.push(string[i]);
    }

    return reversedArray.join("");
};

console.log(reverseString(string));
