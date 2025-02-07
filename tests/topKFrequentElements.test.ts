import {topKFrequent} from "../src";

describe("topKFrequent", () => {
  test("should return the k most frequent elements in order of frequency", () => {
    expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([1,2]);
    expect(topKFrequent([4,4,4,4,5,5,6,6,6,7], 3)).toEqual([4,6,5]);
  });

  test("should handle a single element list", () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  test("should return all elements if k equals array length", () => {
    expect(topKFrequent([1,2,3,4], 4)).toEqual([1,2,3,4]);
  });

  test("should handle elements with equal frequency", () => {
    const result = topKFrequent([1,2,3,4,5,6,7,8,9,10], 5);
    expect(result.length).toBe(5);
    result.forEach(num => expect([1,2,3,4,5,6,7,8,9,10]).toContain(num));
  });

  test("should handle large input arrays", () => {
    const nums = new Array(10000).fill(1).concat(new Array(5000).fill(2));
    expect(topKFrequent(nums, 1)).toEqual([1]);
    expect(topKFrequent(nums, 2)).toEqual([1,2]);
  });

  test("should handle negative numbers", () => {
    expect(topKFrequent([-1,-1,-2,-2,-2,-3], 2)).toEqual([-2,-1]);
  });
});
