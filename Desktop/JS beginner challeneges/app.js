// || Q1.) OUTPUT 2 NUMBERS USING FUNCTION ||
// function addition(num1, num2) {
// return num1 + num2
// }
// console.log(addition(12, 45))


// || Q2.) CONVERT HOURS INTO SECONDS ||
// function hoursIntoSeconds(hour) {
//   return hour * 60 * 60;
// }
// console.log(hoursIntoSeconds(10));


// || Q3.) CALCULATE THE PERIMETER OF A RECTAGLE ||
// function calcPerimeter(lenght, width) {
// return 2 * length + 2 * width 
// }
// console.log(calcPerimeter(2, 123));


// || Q4.) CALCULATE THE AREA OF A TRIANGLE ||
// function calculateTriangleArea(base, height) {
// return (1 / 2) * base * height;
// }
// console.log(calculateTriangleArea(10, 34))


// || Q5.) EXTEND A STRING |*|*|*|*|*|
// function appendFrontend(string) {
// return string + 'sausageDaddyFrank'
// }
// console.log(appendFrontend('Apple'));


// || Q6.) GREATER THAN 100 || LONG WAY COMPLETED ||
// function sumGreaterThan100(num1, num2) {
//      if (num1 + num2 > 100) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(sumGreaterThan100(50, 60))


// || Q6.) GREATER THAN 100 || BEST PRACTICE 
// function sumGreaterThan100(num1, num2) {
//  return num1 + num2 > 100 

// }
// console.log(sumGreaterThan100(39, 60))


// || Q7.) LESS THAN OR EQUAL TO ZERO?
// function lessThanOrEqualToZero(num) {
// return num <= 0 
// }

// console.log(lessThanOrEqualToZero(-2))


// || Q8.) OPPOSITE BOOLEAN || !### - opposite
// function oppositeBoolean(boolean) {
// return !boolean
// }
// console.log(oppositeBoolean(true))


// || Q9.) IS NOT THE NUMBER 0 ||
// function isNotZero(dung) {
// return dung !== 0;
// }

// console.log(isNotZero(0)) 


// || Q10.) CALCULATE THE REMAINDER ||

// function calculateTheRemainder(num1, num2) {
// return num1 % num2;
// }

// console.log(calculateTheRemainder(10,7))


// || Q11.) IS THE NUMBER ODD? ||

// function isOdd(num) {
// return num % 2 === 0; 
// }

// console.log(isOdd(5))


// || Q12.) IF A NUMBER IS EVEN, RETURN 1 OTHERWISE RETURN -1 ||
// function booleanInteger(num) {
// return num % 2 === 0 ? 1 : -1;
// }
// console.log(booleanInteger(5))


//  || Q13.) CHECK IF A USER IS LOGGED IN AND SUBSCRIBED ||

// function isLoggedInAndSubscribed(loggedin, subscribed) {
//  return loggedin !== 'LOGGED_IN' && subscribed !== 'SUBSCRIBED'
 
// }
// console.log(isLoggedInAndSubscribed('LOGGED_IN','SUBSCRIBED'))

// || Q14.) Check if a user us logged in OR subsribed
function isLoggedInAndSubscribed(loggedin, subscribed) {
return (loggedin === 'LOGGED_IN' || subsribed === 'SUBSRCIBED')
 
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
