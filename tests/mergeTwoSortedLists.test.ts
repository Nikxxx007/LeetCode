import { arrayToLinkedList, linkedListToArray, mergeTwoLists } from "../src";

describe("mergeTwoLists", () => {
  test("should merge two non-empty sorted lists", () => {
    const list1 = arrayToLinkedList([1, 2, 4]);
    const list2 = arrayToLinkedList([1, 3, 4]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test("should handle an empty first list", () => {
    const list1 = arrayToLinkedList([]);
    const list2 = arrayToLinkedList([1, 2, 3]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([1, 2, 3]);
  });

  test("should handle an empty second list", () => {
    const list1 = arrayToLinkedList([1, 2, 3]);
    const list2 = arrayToLinkedList([]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([1, 2, 3]);
  });

  test("should handle both lists being empty", () => {
    const list1 = arrayToLinkedList([]);
    const list2 = arrayToLinkedList([]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([]);
  });

  test("should handle lists with one element each", () => {
    const list1 = arrayToLinkedList([2]);
    const list2 = arrayToLinkedList([1]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([1, 2]);
  });

  test("should handle lists with duplicate elements", () => {
    const list1 = arrayToLinkedList([1, 1, 1]);
    const list2 = arrayToLinkedList([1, 1, 1]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([1, 1, 1, 1, 1, 1]);
  });

  test("should handle one list being longer than the other", () => {
    const list1 = arrayToLinkedList([1, 3, 5, 7, 9]);
    const list2 = arrayToLinkedList([2, 4]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([1, 2, 3, 4, 5, 7, 9]);
  });
});
