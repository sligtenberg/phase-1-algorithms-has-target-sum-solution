// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) return true;
//     }
//   }
//   return false;
// }

// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const compliment = target - array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === compliment) return true;
//     }
//   }
//   return false;
// }

function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = new Set(); // create an epmty set called seenNumbers
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) return true; // .has returns true if the number is in the set
    seenNumbers.add(number);
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here

  0(n) 
*/

/* 
  Add your pseudocode here

  Nested loop solution:
  Loop through each number in the array.
  For each number, loop through the array again, this time adding the numbers together.
  Compare the sum to the target number. If equal, return true. If the loop finishes, return false.
*/

/*
  Add written explanation of your solution here

  My description of the problem:
  
  The function hasSumTarget takes two arguments: a target number, and an array of numbers.
  hasSumTarget function returns true if any two numbers in the array add up to the target.
  Otherwise hasSumTarget returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 8));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1], 8));
}

module.exports = hasTargetSum;
