/**
 * This algo will check and see if two indices of an array add up to a target number
 */

/** METHOD 1 */

// const twoSum = (target, arr) => {
//   const map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     let currNum = arr[i];

//     let difference = target - currNum;

//     if (map.has(difference)) {
//       return [map.get(difference), i];
//     }

//     map.set(currNum, i);
//   }

//   return "No match was found";
// };

/** METHOD 2 */

// const twoSum = (nums, target) =>{

//     //lets have a map that stores the values of the index's and prev array elements

//     const numMap = new Map();

//     for(let i = 0; i < nums.length; i++){

//         let difference = target - nums[i];

//         //since we need two numbers for there to be an argument in the first place, we will check to see if the number we are looking for to be the complements the current array value

//         //check and see if the difference exists in the map

//         if(numMap.get(difference) || numMap.get(difference)===0){
//             return [numMap.get(difference), i]
//         }

//         numMap.set(nums[i], i);

//     }
// }

/** METHOD 3 */

// const twoSum = (nums,target) =>{

//     const numMapObj = {};

//     for(let i = 0; i < nums.length; i++){

//         let currNum = nums[i];
//         let difference = target - currNum;

//         if(numMapObj[difference] || numMapObj[difference] === 0){
//             return [numMapObj[difference], i]
//         }

//         numMapObj[currNum] = i;
//     }
// }

/** METHOD 4 */

const twoSum = (nums, target) => {
  const numObj = {};

  for (let [index, num] of Object.entries(nums)) {
    let currNum = nums[index];
    let difference = target - currNum;
    if (typeof numObj[difference] === "number") {
      return [numObj[difference], Number(index)];
    }

    numObj[currNum] = Number(index);
  }
};

// let arr = [2, 7, 3, 4, 5];

// const test = twoSum(9, arr);

// console.log(test, "here is test");
