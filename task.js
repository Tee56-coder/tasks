// string reversal
// first create a function 
// then that function takes in a string
// convert the string to an array
// reverse the array 
// after reversing the array change it back to a string
// return the string


// function stringReversal (str) {
//     // let arr = str.split('');
//     // let reverse = arr.reverse();
//     // return reverse.join('');

//     return str.split('').reverse().join('');
// }

const strReverse = str => str.split('').reverse().join('');

// console.log(stringReversal('tomi'));
console.log(strReverse('Tomi Haastrup'));

// Palindrome.
// Write a function that is a palindrome
// it takes in a string and gives the exact opposite


let pal = ['mom', 'dad', 'did', 'racecar']
// pal = p => p.split('').reverse().join('')

// function palindrome (str) {
//     const reversedStr = str.split('').reverse().join('');
//     if(reversedStr === str) {
//         return reversedStr;
//     } else {
//         console.log('Not a Palindrome!');
//         return;
//     }
// }

// const palindrome = str => str.split('').reverse().join('') === str ? str : console.log('Not a Palindrome!');

console.log(palindrome('bob'));

// const numReverse = num => num.split('').reverse().join('')


// function numReverse(num) { 
//     const str = num.toString();
//     const reversedStr = str.split('').reverse().join('');
//     const newNum = parseInt(reversedStr) * Math.sign(num);
//     return newNum;
// }


// const numReverse = num => parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
// console.log(numReverse(-657675));


// camel converter assignment
function camelConverter(str) {
    
}



// Write a function isEven that takes a number as input and returns true if the number is even, and false if it is odd.
// Write a function fizzBuzz that prints numbers from 1 to 100. For multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for multiples of both 3 and 5, print "FizzBuzz".
// Write a function removeDuplicates that takes an array and removes duplicate values.
// Write a function isLeapYear that checks if a given year is a leap year.
// Write a function sumOfDigits that takes a number and returns the sum of its digits.
// Write a function isPrime that takes a number as input and returns true if the number is prime, and false otherwise.
// Write a function longestWord that takes a sentence and returns the longest word in the sentence.
// Write a function capitalizeWords that takes a sentence and capitalizes the first letter of each word.
// Write a function addProperty that adds a new property to a given object. The function should take an object, a key, and a value as input and add the key-value pair to the object.


// number 1
function evenCheck(num) {
    if(num % 2 === 0){
        return 'number is even'
    } else{
        return 'it is odd'
    }
}

console.log(evenCheck(5))

// number 2
function fizzBuzz(fz) {
    console.log();
}

// Number 3
// let duplicateArr = [1, 3 ,3, 5, 4, 2,78, 9, 6, 6, 4]
// function duplicateEditor(dup) {
//    for(let i = 0; i = duplicateArr.length; i++){
//         console.log()
//    }
// }

function removeDuplicates(arr) {
  const uniqueSet = new Set(arr);
  return Array.from(uniqueSet);
}
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5]));















// camel 
function toCamelCase(str) {
  const words = str.split(' ');
  return words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}


console.log(toCamelCase("convert this string to camel case"));












// 2. Find the Maximum Number: Write a function that takes an array of numbers as input and returns the largest number.

// 3. Check if a Number is Even: Write a function that takes a number as input and returns true if it's even, false if it's odd.

// 4. Sum of an Array: Write a function that takes an array of numbers as input and returns the sum of all numbers.

// 5. Find the First Duplicate: Write a function that takes an array of numbers as input and returns the first duplicate number.

// 6. Check if a String is a Palindrome: Write a function that takes a string as input and returns true if it's a palindrome, false if it's not.

// 7. Find the Longest Word: Write a function that takes a string as input and returns the longest word.

// 8. Count the Number of Vowels: Write a function that takes a string as input and returns the number of vowels.

// 9. Check if a Number is a Prime Number: Write a function that takes a number as input and returns true if it's a prime number, false if it's not.

// 10. Sort an Array in Ascending Order: Write a function that takes an array of numbers as input and returns the sorted array in ascending order.


// number 2
// const num = [100, 444, 9, 0];
// function findMaxNo(arr) {
//   if(arr.length === 0){
//     return null
//   }
//   let maxNo = arr[0]
//   for(let i = 1; i < arr.length; i++){
//     if (arr[i] > maxNo) {
//       maxNo = arr[i];
//   }
//   }
//   return maxNo;
// }

// console.log(findMaxNo(num))

// number 3
// function evenCheck(num) {
//   if(num % 2 === 0){
//       return 'number is even'
//   } else{
//       return 'it is odd'
//   }
// }

console.log(evenCheck(8))

// // number 4

const num = [6, 9, 0, 8, 32]
function sumArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray(num));

// number 5 
function removeDuplicates(arr) {
  const uniqueSet = new Set(arr);
  return Array.from(uniqueSet);
}
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5]));

// number 6
const palindrome = str => str.split('').reverse().join('') === str ? str : console.log('Not a Palindrome!');


// number 7
// let txt = 'i dey work oh!!';

// function findLongestWord(str) {
//   const words = str.split('');
//   let longestWord = "";
//   for (let word of words){
//     if(word.length < longestWord.length){
//       longestWord = word
//     }
//   }
//   return longestWord;
// }


// const longestWord = findLongestWord(txt);
// console.log("the longest word is " longestWord);



// function findLongestWord(inputString) {
//   const words = inputString.split(' ');
//   let longestWord = "";
//   for (let word of words) {
//       if (word.length > longestWord.length) {
//           longestWord = word;
//       }
//   }
//   return longestWord;
// }
const txt = "Write a function that takes a string as input and returns the longest word";
function findLongestWord(str) {
  const words = str.split(' ');
  let longestWord = "";
  for (let word of words) {
      if (word.length > longestWord.length) {
          longestWord = word;
      }
  }
  return longestWord;
}
const longestWord = findLongestWord(txt);
console.log("The longest word is:", longestWord);



// number 7
const inputString = "Write a function that takes a string as input and returns the number of vowels"
function countVowels(inputString) {
  const vowels = 'aeiouAEIOU';
  let vowelCount = 0;
  for (let char of inputString) {
      if (vowels.includes(char)) {
          vowelCount++;
      }
  }

  return vowelCount;
}

// Example usage
const numberOfVowels = countVowels(inputString);
console.log("The number of vowels is:", numberOfVowels);

