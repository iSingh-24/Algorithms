const mergeTwoLists = (list1, list2) => {
  let dummyHead = new ListNode(0); //we need a point of reference to be a placeholder
  //since we're going to iterate over the dummyHead, we need there to be another reference so we can keep track of where the linked list starts
  let tempHead = dummyHead;

  while (list1 && list2) {
    //as long as both lists have a value we will hit this while statement

    if (list1.val < list2.val) {
      tempHead.next = list1;
      list1 = list1.next;
      tempHead = tempHead.next;
    } else {
      tempHead.next = list2;
      list2 = list2.next;
      tempHead = tempHead.next;
    }

    /**
     * if we choose to, we can move the tempHead = tempHead.next statement from both if and else and have it outside of that code block since regardless of if
     * the block is hit, the tempHead = tempHead.next will get executed
     */
  }

  /** This is necessary because we need to make sure that we add the last remaining value to the end of the list we're iterating and adding to */

  tempHead.next = list1 || list2;

  //dummyHead is the original reference we have and the next reference would be to the rest of the linked list we added after sorting through both of the lists

  return dummyHead.next;
};
