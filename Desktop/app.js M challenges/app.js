
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
