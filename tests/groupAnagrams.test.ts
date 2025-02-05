import { groupAnagrams } from "../src/problems/0049groupAnagrams";

describe("groupAnagrams", () => {
  test("should group anagrams correctly", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const output = groupAnagrams(input);
    const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];

    expect(output).toHaveLength(expected.length);
    expected.forEach(group => expect(output).toContainEqual(group));
  });

  test("should handle empty input", () => {
    expect(groupAnagrams([])).toEqual([]);
  });

  test("should handle single-word input", () => {
    expect(groupAnagrams(["abc"])).toEqual([["abc"]]);
  });

  test("should handle multiple occurrences of the same word", () => {
    expect(groupAnagrams(["abc", "bca", "abc"])).toEqual([["abc", "bca", "abc"]]);
  });

  test("should handle words with different lengths", () => {
    expect(groupAnagrams(["abc", "abcd", "a"])).toEqual([["abc"], ["abcd"], ["a"]]);
  });

  test("should be case-sensitive", () => {
    expect(groupAnagrams(["bAt", "tab", "Tab"])).toEqual([["bAt"], ["tab"], ["Tab"]]);
  });

  test("should handle all words being unique", () => {
    expect(groupAnagrams(["dog", "cat", "fish"])).toEqual([["dog"], ["cat"], ["fish"]]);
  });
});
