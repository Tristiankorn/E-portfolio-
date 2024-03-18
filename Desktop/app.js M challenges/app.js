
  

// Q8.) reverse a string || .reverse property 

// function stringReverse(str) {
// return str.split('').reverse().join('')
// }

// console.log(stringReverse('shmoopoop'))

// 8B.) 

// function stringReverse(str) {
// let reversedString = '';
// for (let i = 0; i < str.length; ++i) {
//     reversedString = str[i] + reversedString;

// }
// return reversedString;
    
// }

// console.log(stringReverse('elloGovena'))

// Turn every element in an array to 0
// function arrZero(arr) {
//     return arr.map(elem => 0)
// }
// console.log(arrZero(['hello', 34, NaN]))

// Medium challanges repeat

// 1A.) Filter out falsey || boolean logic ||

// function filterOutFalsey(elem1, elem2) {
//     return elem1 && !!elem2
// }
// console.log(filterOutFalsey(0, 500 ))

// 1B.) 

// function filterOutFalsey(elem1, elem2) {
//   return (!elem1) ? elem1 : elem2;  
// } 

// console.log(filterOutFalsey(null, 500))

// 2.) Return the length of any given array 

// function arrLength(arr) {
//     return arr.length;
// }
// console.log(arrLength([200, 300, 'dog', null]))

// 3.) return the last element inside the given array

// function arrLength(arr) {
//     return arr[arr.length - 1]
// }
// console.log(arrLength([200, 300, 'dog', null]))

// 4.) find the sum of an array 
// function arrSum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; ++i) {
//         sum = sum + arr[i];
//     }
//     return sum 
// }

// console.log(arrSum([23, 0, -324, 5190, -21, -8743 ]))

// 5.) Add up the single numbers from a given number
// function consecutiveNumberAdder(number) {
//     let sum = 0; 
//     for (let i = 1; i <= number; ++i) {
//         sum = sum + i;
// }
// return sum; 
// }
// console.log(consecutiveNumberAdder(23));

// Q6.) calculate the time 

// function calcTime(seconds) {

//     // 1.) Calculating Minutes - Math.floor rounds down to the nearest whole number to elimante mumbojumbo
//     let timerMinutes = Math.floor(seconds / 60);
//     // Calculating seconds
//     let timerSeconds = seconds % 60;

//     // use If statment to insert 0 if the mm is mm:ss format is less than 10 otherwise dont insert anything 
//     if (timerMinutes < 10) {
//         timerMinutes = '0' + timerMinutes;
//     }

//     // Return formatted time
//    return timerMinutes + ':' + timerSeconds;
// }
// console.log(calcTime(2000))

// Q7.) Return the largest number in an array
// function largestNum(arr) {
//     let max = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max; 
// }
// console.log(largestNum([200, 400, -500]))

            

//  Q8.) Reverse a String

// function reverseString(str) {
// return str.split('').reverse().join('')
// }

// console.log(reverseString('ABC'));

// Q8B.) Reverse a string using for loop (incrementing)

// function reverseString(str) {
//     let reversedString = ':'
//     for (let i = 0; i < str.length; ++i) {
//         reversedString = reversedString + str[i]
//     }
//      return reversedString;   

// }
// console.log(reverseString('ABC'));

// Q9A.) Turn every element in an array into zero (using arr.map)

// function convertToZeros(arr) {
// return arr.map(elem => 0)
// }

//  console.log(convertToZeros([12]))   

// Q9B.) Turn every element in an array into zero (using arr.fill)

// function convertToZeros(arr) {
//      return new Array(arr.length).fill(0);
//     }
    
//      console.log(convertToZeros([12, 2, 4]))   

// Q9C.) Turn every element in an array into zero (using for loop)

// function convertToZeros(arr) {
//     let newArr = []; 
//     for (let i = 0; i < arr.length; ++i) {
//         newArr[i] = 0
//     }
// return newArr;
// }
// console.log(convertToZeros([0, 1, 3, 4, 5, 7]))

// Q10A.) Filter out all the apples 
// function noApples(arr) {
//     return arr.filter(elem => elem !== 'Apples')
// }
// console.log(noApples(['Apples', 'Oranges', 'Blueberries', 'Cantelopes', 'Apples']))

// Q10B.) Filter out all the apples (using a for loop)

// function noApples(arr) {
//     let appleRemover = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] !== 'Apples') {
//             appleRemover.push(arr[i]);
//         }
//     }
//     return appleRemover;
// }

// console.log(noApples(['Apples', 'Orages', 'Nectarines', 'Melons']))

// function appleRemover(arr) {
//     let noApples = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] !== 'Apples')
//         noApples.push(arr[i]);
//     }
//     return noApples;
// }
// console.log(appleRemover(['Apples', 'Orages', 'Nectarines', 'Melons', 'Avocaods', 'Apples']))

// Q11A.) filter out all the falsey values (For loop)

function 

