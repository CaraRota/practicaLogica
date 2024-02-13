// Exercise: Count Vowels in a String

// Write a function called countVowels that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
//The function should be case-insensitive, meaning it should count both uppercase and lowercase vowels.

// For example:

//     "Hello" should return 2 because it contains two vowels (e, o).
//     "Programming" should return 3 because it contains three vowels (o, a, i).
//     "OpenAI" should return 3 because it contains three vowels (o, e, A).

// Write the countVowels function and test it with different strings to ensure it works correctly.

const string = "eL viEjO loco le patina el coco";

const countVowels = (string) => {
    str = string.toLowerCase();
    const getSet = [...new Set(str)];
    let counter = 0;

    console.log(getSet);

    for (let i = 0; i < getSet.length; i++) {
        if (
            getSet[i] === "a" ||
            getSet[i] === "e" ||
            getSet[i] === "i" ||
            getSet[i] === "o" ||
            getSet[i] === "u"
        ) {
            counter++;
        }
    }
    return counter;
};

console.log(countVowels(string));
