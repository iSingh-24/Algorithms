/**
 * Prompt: Given two arrays, check to see if either of the arrays have any common elements
 */

//first try brute force

// const twoArrays = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     let firstNum = arr1[i];
//     for (let j = 0; j < arr2.length; j++) {
//       let secondNum = arr2[j];
//       if (firstNum === secondNum) return true;
//     }
//   }

//   return false;
// };

//Second way

// const twoArrays = (arr1, arr2) => {
//   let set1 = new Set(arr1);

//   for (let i = 0; i < arr2.length; i++) {
//     let currNum = arr2[i];

//     if (set1.has(currNum)) return true;
//   }

//   return false;
// };

//third way

const twoArrays = (arr1, arr2) => {
  const arr1Map = new Map();

  for (let [index, num] of Object.entries(arr1)) {
    arr1Map.set(num, index);
  }

  //map.get will return undefined if value isn't present, while map.has will return a boolean value

  for (let num of arr2) {
    if (arr1Map.has(num)) return true;
  }

  return false;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [8, 9, 10, 11];
const arr3 = [5, 8];

console.log(twoArrays(arr1, arr2));
console.log(twoArrays(arr1, arr3));
