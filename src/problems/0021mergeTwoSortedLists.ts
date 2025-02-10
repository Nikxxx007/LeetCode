import { ListNode } from "./0206reverseLinkedList";

export const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  let resultList: ListNode | null = new ListNode(0);
  let current: ListNode | null = resultList;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;
  return resultList.next;
};
