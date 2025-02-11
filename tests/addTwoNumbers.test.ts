import { addTwoNumbers, arrayToLinkedList, linkedListToArray } from "../src";

describe("addTwoNumbers", () => {
  it("should add two numbers represented by linked lists", () => {
    // Test case 1: 342 + 465 = 807
    const l1 = arrayToLinkedList([2, 4, 3]); // Represents 342
    const l2 = arrayToLinkedList([5, 6, 4]); // Represents 465
    const result1 = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result1)).toEqual([7, 0, 8]); // Represents 807

    // Test case 2: 0 + 0 = 0
    const l3 = arrayToLinkedList([0]); // Represents 0
    const l4 = arrayToLinkedList([0]); // Represents 0
    const result2 = addTwoNumbers(l3, l4);
    expect(linkedListToArray(result2)).toEqual([0]); // Represents 0

    // Test case 3: 999 + 1 = 1000
    const l5 = arrayToLinkedList([9, 9, 9]); // Represents 999
    const l6 = arrayToLinkedList([1]); // Represents 1
    const result3 = addTwoNumbers(l5, l6);
    expect(linkedListToArray(result3)).toEqual([0, 0, 0, 1]); // Represents 1000

    // Test case 4: 123 + 456 = 579
    const l7 = arrayToLinkedList([3, 2, 1]); // Represents 123
    const l8 = arrayToLinkedList([6, 5, 4]); // Represents 456
    const result4 = addTwoNumbers(l7, l8);
    expect(linkedListToArray(result4)).toEqual([9, 7, 5]); // Represents 579

    // Test case 5: Unequal lengths with carry
    const l9 = arrayToLinkedList([9, 9]); // Represents 99
    const l10 = arrayToLinkedList([1]); // Represents 1
    const result5 = addTwoNumbers(l9, l10);
    expect(linkedListToArray(result5)).toEqual([0, 0, 1]); // Represents 100
  });
});
