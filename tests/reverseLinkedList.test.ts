import { arrayToLinkedList, linkedListToArray, reverseList } from "../src";

describe("reverseList", () => {
  test("should reverse a list with multiple elements", () => {
    const input = arrayToLinkedList([1, 2, 3, 4, 5]);
    const reversed = reverseList(input);
    expect(linkedListToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  test("should reverse a list with two elements", () => {
    const input = arrayToLinkedList([1, 2]);
    const reversed = reverseList(input);
    expect(linkedListToArray(reversed)).toEqual([2, 1]);
  });

  test("should handle an empty list", () => {
    expect(linkedListToArray(reverseList(null))).toEqual([]);
  });

  test("should handle a single-node list", () => {
    const input = arrayToLinkedList([1]);
    const reversed = reverseList(input);
    expect(linkedListToArray(reversed)).toEqual([1]);
  });

  test("should handle a list with repeated elements", () => {
    const input = arrayToLinkedList([1, 1, 1, 1]);
    const reversed = reverseList(input);
    expect(linkedListToArray(reversed)).toEqual([1, 1, 1, 1]);
  });
});
