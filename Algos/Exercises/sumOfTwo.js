/**
 * Prompt: Given a collection of sorted integers and a target number, find a pair where their sum is equivalent to the target. Solve in an ideal time and space
 * complexity.
 *
 * If a pair exists console.log the pairs and return true, else return false
 */

let arr = [1, 2, 3, 4, 5];

//Brute Force Method, quadratic time complexity n²

// const sumOfTwo = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     let firstNum = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       let secondNum = arr[j];

//       if (firstNum + secondNum === target) {
//         console.log(
//           `The first number is ${firstNum} and the second number is ${secondNum}`
//         );
//         return true;
//       }
//     }
//   }

//   return false;
// };

//Two pointers

const sumOfTwo = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let sum = arr[start] + arr[end];

    if (sum === target) {
      console.log(
        `There is a pair, the values are ${arr[start]} and ${arr[end]}`
      );

      return true;
    }

    if (sum < target) {
      start++;
    } else {
      end--;
    }
  }

  return false;
};

console.log(sumOfTwo(arr, 9));
