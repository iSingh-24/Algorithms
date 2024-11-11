/**
 * This algo will check and see if two indices of an array add up to a target number
 */

const twoSum = (target, arr) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];

    let difference = target - currNum;

    if (map.has(difference)) {
      return [map.get(difference), i];
    }

    map.set(currNum, i);
  }

  return "No match was found";
};

let arr = [2, 7, 3, 4, 5];

const test = twoSum(9, arr);

console.log(test, "here is test");
