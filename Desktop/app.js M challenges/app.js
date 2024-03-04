// Q1. Falsey or truthy?
// - given two values, return the first one if it is falsey, otherwise return the second value
// function filterOutFalsey(num1, num2) {
// if (num1 === false) {
//     return num1
// }
// return num2
// }
// console.log(filterOutFalsey(0, 500))

// function filterOutFalsey(elem1, elem2) {
//     return (!elem1) ? elem1 : elem2
// }

// console.log(filterOutFalsey(200, 300))

// Q2. Return the length of any given array || arr.length method
// function arrLength(arr) {
//    return arr.length
// }

// console.log(arrLength([]))

// Q3. Get the last element of an array
// function lastElem(arr) {
// return arr[arr.length - 1]
// }

// console.log(lastElem([23, 34, null, "Tristian"]))

// Q4. Find the sum of an array
// function getMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; ++i) {
//     max = max + arr[i];
// }
// return max;
// }
// console.log(getMax([234, 411, 137]))

// Q5.) Add up the numbers from a single given number
// function progressiveSum(elem) {
//     let sum = 0;
//     for (let i = 1; i <= elem; ++i) {
//         sum = sum + i;
//     }
// return sum;

// }

// console.log(progressiveSum(4))

// Q6. Calculate the time
// function calcTime(seconds) {
//     let timerMinutes = Math.floor(seconds / 60);
//     let timerSeconds = seconds % 60

//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes

//     }
//     return timerMinutes + ':' + timerSeconds

// }
// console.log(calcTime(50))

// Q7. FInd the largest number

// function getMax(arr) {
// let max = arr[0];
// for (let i = 1; i < arr.length; ++i) {
//    if (arr[i] > max) {
//     max = arr[i]
//    }
// }
// return max;
// }

// console.log(getMax([-300, 0, 23, 435]));

// Q8. Reverse a string  || .reverse ||

// function reverseString(str) {
// return str.split('').reverse().join('')
// }

// console.log(reverseString('Trsitianhasbigpeepee'))

// Q8. Reverse String || incrementing loop ||

// function reverseString(str) {
//     let reversedString = '';
//     for (let i = 0; i < str.length; ++i)
//     reversedString = str[i] + reversedString;
// return reversedString;
// }

// console.log(reverseString('tristianhasbigpeepee'))

//  Q9A. Turn every element in an aray into 0 || soloution 1 - For loop ||
// function convertToZero(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; ++i) {
//         newArr[i] = 0;
//     }
//     return newArr;
// }
// console.log(convertToZero([9, 3, 33, 88]))

//  Q9B. Turn every element in an aray into 0 || soloution 2 - arr.fill ||
// function convertToZeros(arr) {
//     return new Array(arr.length).fill(0);
// }
// console.log(convertToZeros([1, 2, 4, 5]))

// Q9C. Turn every element in an aray into 0 || soloution 3 - arr.map ||
// function convertToZeros(arr) {
//     return arr.map(elem => 'goblin slayers')
// }

// console.log(convertToZeros([24, 34, 34, 43]))

// function convertToZeros(arr) {
// let newArr = []
// for (let i = 0; i < arr.length; ++i) {
//     newArr[i] = 0
// }
// return newArr;

// }
// console.log(convertToZeros([12, 0, 12, 34,]))

// function convertToZeros(arr) {
// return new Array(arr.length).fill(0)
// }

// console.log(convertToZeros([12, 0, 12,]))

// function convertToZeros(arr) {
// return arr.map(elem => 'doggy wang')
// }

// console.log(convertToZeros([12, 0, 12, 34,]))

// Q10A. remove a targeted element in an array
// function removeApples(arr) {
//     let appleRemover = []
// for (let i = 0; i < arr.length; ++i)
//  if (arr[i] !== 'Apples') {
//     appleRemover.push(arr[i])
// }
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
function calcTime(seconds) {
   let timerMinutes = Math.floor(seconds / 60);
   let timerSeconds = seconds % 60;

   if (timerMinutes.toString().length === 1) {
    timerMinutes = '0' + timerMinutes
   }

   return + timerMinutes + ':' + timerSeconds

}
console.log(calcTime(3400))