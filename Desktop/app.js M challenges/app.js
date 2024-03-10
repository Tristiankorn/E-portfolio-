

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
  

// function noApples(arr) {
// return arr.filter(elem => elem !== 'Apples')
// }

// console.log(noApples(['Apples', 'melons', 'pineApples', 'Apples', 'Bannanas']))



// 11A filter out all the falsey values

// arr.filter 

// function filterOutFalsey(arr) {
//     return arr.filter(elem => !!elem === true)
// }

// console.log(filterOutFalsey([null, 'hello', 'apples', 23, '']))


// 11B 

// for loop 

// function filterOutFalsey(arr) {
//     let truthyArr = [];
//     for (let i = 0; i < arr.length; ++i) {
//         if (!!arr[i] === true) {
//             truthyArr.push(arr[i])
//         }
//     }
// return truthyArr
            
// }
// console.log(filterOutFalsey([0, 'river', null,  "", 23]))



// Q12A Truthy to true, Falsey to false || !arr.map!

// function convertToBoolean(arr) {
//     return arr.map(elem => !!elem)
// }

// console.log(convertToBoolean(['hi', null, NaN, 21, [2], '']))

// Q1.) given two values, determine truthy or falsey 

// function truthyOrFalsey(elem1, elem2) {
// return !elem1 ? elem1 : elem2
// }
// console.log(truthyOrFalsey(0, 43))

// Q2.) reeturn the length of any given array

// function arrLength(arr) {
//     for (let i = 0; i < arr.length; ++i) {
//      console.loh(arr[i])
//     }
// }
// console.log(arrLength([0, '', 'Trustian', null, 345, NaN]))


// Q2B.) return the length of any given array

// function arrLength(arr) {
//     return arr.length;
// }

// console.log(arrLength([2, 343, 1, 345,]))


// Q3A.) Get the last element in an array 

// function lastElem(arr) {
//     return arr[arr.length - 1]
// }

// console.log(lastElem([21, 34, 56, 'Assbackwards']))

// Q4A.) 
// function arrSum(arr) {
// let sum = 0
// for (let i = 0; i < arr.length ; ++i) {
//      sum = sum + arr[i]
// }
// return sum 
// }
// console.log(arrSum([2, 45, -1256, 795]))

// Q5.) Add up the numbers from a single number 
// function progressiveSum(number) {
//     let sum = 0
// for (let i = 1; i <= number; ++i) [
//  sum = sum + i
// ]
// return sum
// }

// console.log(progressiveSum(600))


// Q6A.) calculate the time 
// function calcTime(seconds) {

// let timerMinutes = Math.floor(seconds / 60)
// let timerSeconds = seconds % 60

// if (timerMinutes.toString().length === 1) {
//     timerMinutes = '0' + timerMinutes
// }
// return timerMinutes + ':' + timerSeconds;
   
    
// }
// console.log(calcTime(5000))


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
// console.log(getMax([-300, -214, 0, 23, 453, 453]))
  

// Q8.) reverse a string || .reverse property 

// function stringReverse(str) {
// return str.split('').reverse().join('')
// }

// console.log(stringReverse('shmoopoop'))

// 8B.) 

function stringReverse(str) {
let reversedString = '';
for (let i = 0; i < str.length; ++i) {
    reversedString = str[i] + reversedString;

}
return reversedString;
    
}

console.log(reverseString('elloGovena'))