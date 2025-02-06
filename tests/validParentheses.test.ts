import {isValid} from "../src";

describe("isValid Parentheses", () => {
  test("should return true for simple valid cases", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("[]")).toBe(true);
    expect(isValid("{}")).toBe(true);
  });

  test("should return true for multiple valid pairs", () => {
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("{[]}")).toBe(true);
    expect(isValid("({[]})")).toBe(true);
  });

  test("should return false for incorrect pairings", () => {
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)]")).toBe(false);
    expect(isValid("{[}]")).toBe(false);
  });

  test("should return false for unmatched opening brackets", () => {
    expect(isValid("(")).toBe(false);
    expect(isValid("{")).toBe(false);
    expect(isValid("[")).toBe(false);
  });

  test("should return false for unmatched closing brackets", () => {
    expect(isValid(")")).toBe(false);
    expect(isValid("}")).toBe(false);
    expect(isValid("]")).toBe(false);
  });

  test("should return false for mixed valid and invalid cases", () => {
    expect(isValid("([]{}")).toBe(false);
    expect(isValid("({[}])")).toBe(false);
    expect(isValid("({})]")).toBe(false);
  });

  test("should return true for an empty string", () => {
    expect(isValid("")).toBe(true);
  });

  test("should return false for a long invalid sequence", () => {
    expect(isValid("(((((({{{{{{[[[[[[[[[[[[]]]]]]]]]]]]]]}}}}}}))))))")).toBe(false);
  });
});
