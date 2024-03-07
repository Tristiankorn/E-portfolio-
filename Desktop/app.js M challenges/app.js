
// return appleRemover
// }
// console.log(removeApples(['Banannas', 'Apples', 'Melons', 'Berries', 'Apples']));

// 10B. remove a targeted element from an arr || using arr.filter

// function noApples(arr) {
// return arr.filter(elem => elem !== 'Apples');

// }

// console.log(noApples(['Banannas', 'Apples', 'Melons', 'Berries', 'Apples']))





//  kade and Tristian prctice (medium diffiuclty)



// function noApples(arr) {
// return arr.filter(elem => elem !== 'Apples')
// }

// console.log(noApples(['Watermelons', 'Apples', 'Peaches', 'Plums', 'Apples', 'Drleonard']))


// 11A.
// function filterOutFalsey(arr){
//     return arr.filter(elem => !!elem === true)
// }

// console.log(filterOutFalsey([null, 0, "", 'Greetings', undefined, 234]))

// 11A.
// function filterOutFalsey(arr) {
// let truthyArr = []
//   for (let i = 0; i < arr.length; ++i) {
//     if (!!arr[i] === true) {
//         truthyArr.push(arr[i])
//     }
// }
// return truthyArr

// }

// console.log(filterOutFalsey([null, 0, "", 'Greetings', undefined, 234]))


// 12A Truthy to true, Falsey to false || arr.map method

// function convertToBoolean(arr) {
// return arr.map(elem => !!elem)
// }

// console.log(convertToBoolean([500, 'hello', [], 0, null, NaN, ""]))


// Q1.) falsey or truthy - given two values, return thr first one if it is falsey, otherwise return the second one

// function filterOutFalsey(elem1, elem2) {
//    if (elem1 === false) {
//     return elem1
//    }
//    return elem2 
// }

// console.log(filterOutFalsey(true, 'dog'))

// Pt2.)

// function filterOutFalsey(elem1, elem2) {
//     return (!elem1) ? elem1  : elem2
// }

// console.log(filterOutFalsey(true, 'dog'))



// Q2.) return the length of any given array
// function arrLength(arr) {
// return arr.length;


// }

// console.log(arrLength([1, 3, 4, 5, 6, ]))

// Q3A.) return thre last element of an array
// function lastElement(arr) {
// return arr[arr.length - 1]
// }

// console.log(lastElement([23, 24, 'hello']))


// Q4.) Find the sum of an array
// function arrSum(arr) {
// let sum = 0;
// for (let i = 0; i < arr.length; ++i) {
// sum = sum + arr[i];
// }
// return sum;
// }
// console.log(arrSum([2, 2, 2]))


// Q5.) Add up the numbers from a single number 

// function progressiveSum(number) {
// let sum = 0
// for (let i = 0; i <= number; ++i) {
//  sum = sum + i 
// }
// return sum
// }

// console.log(progressiveSum(200))


// Q6) calculate the time in seconds 
// function calcTime(seconds) {
//    let timerMinutes = Math.floor(seconds / 60);
//    let timerSeconds = seconds % 60;

//    if (timerMinutes.toString().length === 1) {
//     timerMinutes = '0' + timerMinutes
//    }

//    return + timerMinutes + ':' + timerSeconds

// }
// console.log(calcTime(3400))

// function calcTime(seconds) {
//     let timerMinutes = Math.floor(seconds / 60);
//     let timerSeconds = seconds % 60

//     if (timerMinutes.toString().length - 1) {
//         timerMinutes = '0' + timerMinutes
//     }

//     return + timerMinutes + ':' + timerSeconds;
// }
// console.log(calcTime(500))

// Q7. Find the largest number in an array 
// function getMax(arr) {
// let max = arr[0]
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// return max;
// }
// console.log(getMax([200, -200, 0, 120, 34]))



// 8A) reverse a string

// function reverseStr(str) {
// let reversedString = '';
// for (let i = 0; i < str.length; ++i) {
// reversedString = str[i] + reversedString
//    }
//    return reversedString;
// }

// console.log(reverseStr('hello'))

// 8B

// function reverseStr(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseStr('biggityboppidyshmoop'))
        
// 9A Turn every element in an array into zeros\

// function convertToZeros(arr) {
// let newArr = []
// for (let i = 0; i < arr.length; ++i) {
// newArr[i] = 0
// }
// return newArr

// }
// console.log(convertToZeros([1, 0, 500]))

// 9B array elements into zeros
// function convertToZeros(arr) {
//     return new Array(arr.length).fill(0)
// }
// console.log(convertToZeros([921, 0, 123, null]))

// 9C elements in array -> 0 using .map
// function convertToZeros(arr) {
//     return arr.map(elem => 0)
// }

// console.log(convertToZeros([null, undefined, "", 300, -2]))

// 10A filter out all the apples 


// function noApples(arr) {
//     let removeApples = [];
//     for (let i = 0; i < arr.length; ++i) {
//       if (arr[i] !== 'Apples') {
//         removeApples.push(arr[i]);
//       }
//     }
//     return removeApples;
//   }
//   console.log(noApples(['Apples', 'Melons', 'PineApples', 'Oranges', 'Bananas']));
  


function noApples(arr) {
return arr.filter(elem => elem !== 'Apples')
}

console.log(noApples(['Apples', 'melons', 'pineApples', 'Apples', 'Bannanas']))


