/* Exercise: Validate Email Address

Write a JavaScript function called isValidEmail that takes a string as input and returns true if the string represents a valid email address,
and false otherwise. For simplicity, let's consider an email address valid if it has the following format:

    It contains an "@" symbol.
    The "@" symbol is not the first or last character.
    There is at least one character before and after the "@" symbol.
    It contains a dot (".") symbol after the "@" symbol.
    There is at least one character between the "@" symbol and the dot.
    There is at least one character after the dot.

For example:

    "user@example.com" is a valid email address.
    "user@.com" is not a valid email address.
    "user@example" is not a valid email address.
    "@example.com" is not a valid email address.

Your function should perform basic validation checks according to the criteria mentioned above.

Write the isValidEmail function and test it with different email addresses to ensure it works correctly.
*/
const email = "user@example";

const isValidEmail = (email) => {
    const splitEmail = email.split("@");

    if (splitEmail.length !== 2 || splitEmail[0].length < 1 || splitEmail[1].length < 1) {
        return false;
    }

    const splitDot = splitEmail[1].split(".");

    if (splitDot.length < 2 || splitDot[0].length < 1 || splitDot[1].length < 1) {
        return false;
    }

    return true;
};

console.log(isValidEmail(email));

// const isValidEmail = (email) => {
//     let arrobaValidation = false;
//     let secondPartValidation = false;

//     //Check if email includes @, and if @ is not the first or last character
//     if (email[0] === "@" || email[email.length - 1] === "@") {
//         return false;
//     }

//     //Check if before and after @ there are characters
//     for (let i = 0; i < email.length; i++) {
//         if (email[i] === "@") {
//             if (email[i - 1] && email[i + 1] && email[i + 1] !== ".") {
//                 arrobaValidation = true;
//             }
//         }
//     }

//     const split = email.split("@");
//     const secondPart = split[1];

//     if (secondPart.includes(".")) {
//         let afterDot = secondPart.split(".");
//         if (afterDot[1].length > 0) {
//             secondPartValidation = true;
//         }
//     }

//     if (arrobaValidation && secondPartValidation) {
//         return true;
//     }
//     return false;
// };

// console.log(isValidEmail(email));
