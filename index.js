// You need to write a program that prints the numbers from 1 to 100 such that:

//     If the number is a multiple of 3, you need to print "Fizz" instead of that number.
//     If the number is a multiple of 5, you need to print "Buzz" instead of that number.
//     If the number is a multiple of both 3 and 5, you need to print "FizzBuzz" instead of that number.

function fizzBuzz() {
  for (i=1; i<101; i++)  {
    if (i%5 === 0 && i%3 === 0) {
        console.log("FizzBuzz")
     }else if (i%3 === 0) {
        console.log("Fizz"); 
     }else if (i%5 === 0) {
        console.log("Buzz");
     }else console.log(i);
  }
}
fizzBuzz();

// Write a function named stars that takes a number n and returns a string consisting of n stars.
// For example, calling stars(3) should cause the function to return a string of three stars, "***".
const assert = require("assert");
function stars(n) {
    if(typeof(n) !== "number"){
      return "invalid number of stars";
    }
    let stars = "";
    for(i=0; i < n; i++){
      stars +="*";
    }
  return stars;
}
console.log(stars(10));
console.log(stars(8));
console.log(stars(6));
// assert(stars() === "invalid number of stars");
// assert(stars("abc") === "invalid number of stars");
// assert(stars(-1) === "");
// assert(stars(0) === "");
// assert(stars(5) === "*****");
// assert(stars(4) === "****");






