/*
Exercise: Count the Number of Words in a Sentence

Write a function called countWords that takes a string representing a sentence as input and returns the number of words in the sentence.

For simplicity, you can consider words to be separated by spaces.

For example:

    countWords("Hello world") should return 2.
    countWords("This is a test sentence") should return 5.
    countWords(" Spaces between words ") should return 3.

Your task is to implement the countWords function. You can choose any programming language you are comfortable with.
Guidelines:

    Write clean and readable code.
    Test your function with different sentences to ensure it works correctly.
    Consider edge cases, such as an empty string or sentences with multiple spaces between words.

This exercise helps evaluate string manipulation skills and understanding of basic programming concepts.
*/

const words = "This is a test sentence";

const countWords = (words) => {
    getWords = words.split(" ");
    return getWords.length;
};

console.log(countWords(words));
