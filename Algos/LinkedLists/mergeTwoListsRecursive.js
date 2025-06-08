/**
 * Here will be the function that recursively sorts and merges two linked lists
 */

const mergeTwoListsRecursive = (list1, list2) => {
  //we will return whichever one is the remaining

  if (!list1 || !list2) {
    return list1 || list2;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoListsRecursive(list1.next, list2);
  } else {
    list1.next = mergeTwoListsRecursive(list1, list2.next);
  }

  return list1;
};
