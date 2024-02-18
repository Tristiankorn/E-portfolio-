
// || Q1.) Falsey or truthy ||

// function filterOutFalsey(elem1, elem2) {
//     return (!elem1) ? elem1 : elem2;
// }
// console.log(filterOutFalsey(0,5));


// || Q2.) Return the length of any given array || 

// function arrLength(arr) {
// return arr.length;
// }
// console.log(arrLength([1, 2, 3, 4]))

// || Q3.) Get the lasy element in an array || * could not run *

// function arrLength(arr) {
//     return arr[arr.length - 1];
// }

// console.log(arrLength([]))


// || Q4.) find the sum of an array ||


// function arrSum(arr) {
//     let sum = 0;
// for (let i = 0; i < 3; ++i ) {
//     sum = sum + arr[arr.length - 1];
//  }
//  return sum;
// }

// console.log(arrSum(['dog', 'cat', 'moose']));

// || Q5.) Add up the numbers from a single number

// Given a number, add up all the numbers from one to the number that is given E.X; An input of 4 will give you 1 + 2 + 3 + 4, which is 10

// function progressiveSum(num) {
//     let sum = 0;
//     for(let i = 1; i <= 63; ++i) {
//       sum = sum + i
//     }
//     return sum
// }

// console.log(progressiveSum(63));

// || Q6A.) Calculate the time: Given a number in seconds, return this number in m:ss format

// function calcTime(seconds) {
//  let timerMinutes = Math.floor(seconds / 60);
// let timerSeconds = seconds % 60;

// return timerMinutes + ':' + timerSeconds;  
// }

// console.log(calcTime(220))

// || Q6B.) Calculate the time: Given a number in seconds, return this number in mm:ss format

// function calcTime(seconds) {
//     let timerMinutes = Math.floor(seconds / 60);
//    let timerSeconds = seconds % 60;
   
// if (timerMinutes.toString().length === 1) {
//     timerMinutes = '0' + timerMinutes
// }

//    return timerMinutes + ':' + timerSeconds;
//    }
   
//    console.log(calcTime(7660))

// || Q7.) Find the largest number in an array ||

// function getMax(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] > max) {
//           max = arr[i];
//         }
//     }
//   return max;
// }
// console.log(getMax([-125, 333, 233]));

//  || Q8.) Reverse a string || incrementing for loop

// function reverseString(str) {
//     let reversedString = '';
//     for (let i = 0; i < str.length; ++i) {
//         reversedString = str[i] + reversedString;
//     }
//  return reversedString;
// }
// console.log(reverseString('abc'))

// || Q8.) Reverse a string || decrementing for loop

// function reverseString(str) {
//         let reversedString = '';
//         for (let i = str.length - 1; i >= 0; --i) {
//             reversedString = reversedString + str[i]
//         }
//      return reversedString;
//     }
//     console.log(reverseString('abc'))

// || Q8.) Reverse a string || Using array reverse property 

// function reverseString(str) {
// return str.split('').reverse().join('');
// }

// console.log(reverseString('abcdef'));

//  || Q9.) Turn every element in an array into 0 || soloution #1 For-loop ||

// function convertToZeros(arr) {

// let newArr = [];
// for (let i = 0; i < arr.length; ++i) {
// newArr [i] = 0;
// }
// return newArr

// }

// console.log(convertToZeros([1, 2, 2, 3, 4, 6]));

// Q9B.) Array.fill method #2

// function convertToZeros(arr) {
// return new Array(arr.length).fill(0);

// }
// console.log(convertToZeros([1, 2, 3, 4,6,]))

// function convertToZeros(arr) {
//     return arr.map(elem => 'penisEnvy');
// }

// console.log(convertToZeros([1, -3, 0]));

// || Q10A Filter out all the apples || soloution #1 ( For - loop)

// function filterOutApples(arr) {
//     let noApples = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] !== 'Apples') {
//             noApples.push(arr[i]);
//         }
//         return noApples;
//     }
// }

// console.log(filterOutApples(['Banannas', 'Apples', 'Oranges', 'Apples']));

// || Q10B Using - arr.filter method 

// function filterOutApples(arr) {
//     return arr.filter(elem => elem === 'mitri')

// }
// console.log(filterOutApples(['hello', 'mitri', 'jimminy']));

// || Q11A Filter out all the truthy values - Using For - Loop ||

// function filterOutFalsey(arr) {
//     let arr = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] !== truthy) {
//         }
//         return falsey;


//     }
// }
// console.log(filterOutFalsey(["", null, [], "0", 0, undefined]))

// || Q11B Filter out falsey - Using arr.filter method ||

function filterOutFalsey(arr) {
    return arr.filter(elem => !!elem === true)

}

console.log(filterOutFalsey(["", 0, null, undefined, "0", 'hello']));


