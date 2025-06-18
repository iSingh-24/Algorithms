/**
 * Prompt: Given a collection of integers and a target number, does a pair exist where the sum of the pair is equivalent to the target number? The catch
 * in this case is that the collection is not sorted.
 */

const arr = [1, 2, 3, 4, 5, 6];

//with a set and just return true or false in this case
const sumOfTwoUnsorted = (arr, target) => {
  const arrSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    //check to see if the complement for the difference exists
    const currNum = arr[i];
    const difference = target - currNum;

    if (arrSet.has(difference)) return true;

    arrSet.add(currNum);
  }

  return false;
};

console.log(sumOfTwoUnsorted(arr, 9));
