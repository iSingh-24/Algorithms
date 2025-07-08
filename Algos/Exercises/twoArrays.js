/**
 * Prompt: Given two arrays, check to see if either of the arrays have any common elements
 */

//first try brute force

const twoArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    let firstNum = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      let secondNum = arr2[j];
      if (firstNum === secondNum) return true;
    }
  }

  return false;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [8, 9, 10, 11];
const arr3 = [5, 8];

console.log(twoArrays(arr1, arr2));
console.log(twoArrays(arr1, arr3));
