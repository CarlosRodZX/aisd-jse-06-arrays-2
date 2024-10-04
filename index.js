// Array of numbers
const numbers = [5, 12, 8, 130, 44];

// 1. Filter numbers greater than 10
const filteredNumbers = numbers.filter((num) => num > 10);
console.log("Filtered Numbers (Greater than 10):", filteredNumbers);
// Output: [12, 130, 44]

// 2. Sort numbers in ascending order
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log("Sorted Numbers (Ascending Order):", sortedNumbers);
// Output: [5, 8, 12, 44, 130]

// 3. Check if all numbers are greater than 3
const allGreaterThanThree = numbers.every((num) => num > 3);
console.log("Are all numbers greater than 3?", allGreaterThanThree);
// Output: true

// Array of words
const words = ["banana", "strawberry", "kiwi", "grape", "apple"];

// 4. Filter words longer than 5 characters
const longWords = words.filter((word) => word.length > 5);
console.log("Words Longer Than 5 Characters:", longWords);
// Output: ['banana', 'strawberry']

// 5. Sort words alphabetically
const sortedWords = words.sort();
console.log("Alphabetically Sorted Words:", sortedWords);
// Output: ['apple', 'banana', 'grape', 'kiwi', 'strawberry']

// 6. Check if all words contain the letter 'e'
const allContainE = words.every((word) => word.includes("e"));
console.log('Do all words contain the letter "e"?', allContainE);
// Output: true

// 7. Check if all words are shorter than 10 characters
const allShorterThan10 = words.every((word) => word.length < 10);
console.log("Are all words shorter than 10 characters?", allShorterThan10);
// Output: false
