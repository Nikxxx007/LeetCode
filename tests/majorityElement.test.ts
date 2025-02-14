import {majorityElement} from "../src";

describe('majorityElement', () => {
  it('should return the majority element in an array with a clear majority', () => {
    // Test case 1: [3, 2, 3]
    expect(majorityElement([3, 2, 3])).toBe(3);

    // Test case 2: [2, 2, 1, 1, 1, 2, 2]
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);

    // Test case 3: [1, 1, 2, 2, 2, 2, 2]
    expect(majorityElement([1, 1, 2, 2, 2, 2, 2])).toBe(2);
  });

  it('should return the majority element in an array with a single element', () => {
    // Test case 4: [5]
    expect(majorityElement([5])).toBe(5);
  });

  it('should return the majority element in an array with all elements the same', () => {
    // Test case 5: [4, 4, 4, 4]
    expect(majorityElement([4, 4, 4, 4])).toBe(4);
  });

  it('should return the majority element in a large array', () => {
    // Test case 6: Large array with majority element 7
    const largeArray = new Array(1000).fill(7).concat(new Array(500).fill(3));
    expect(majorityElement(largeArray)).toBe(7);
  });

  it('should handle negative numbers as majority elements', () => {
    // Test case 7: [-1, -1, -1, 2, 2, -1, -1]
    expect(majorityElement([-1, -1, -1, 2, 2, -1, -1])).toBe(-1);
  });

  it('should handle arrays with two elements', () => {
    // Test case 8: [1, 1]
    expect(majorityElement([1, 1])).toBe(1);
  });
});
