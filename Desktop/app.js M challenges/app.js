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


// function calcTime(seconds) {
// let timerMinutes = Math.floor(seconds % 60);
// let timerSeconds = seconds % 60 

// if (timerMinutes.toString().length === 1) {
//     timerMinutes = '0' + timerMinutes

// }

// return timerMinutes + ':' + timerSeconds

// }

// console.log(calcTime(500));



function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }
    return timerMinutes + ':' + timerSeconds;
}
console.log(calcTime(5000))
