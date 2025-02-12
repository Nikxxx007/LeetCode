import { hammingWeight } from "../src";

describe("hammingWeight", () => {
  it("should return the correct number of 1 bits for a given unsigned 32-bit integer", () => {
    // Test case 1: Binary 00000000000000000000000000001011 (11 in decimal)
    expect(hammingWeight(0b00000000000000000000000000001011)).toBe(3);

    // Test case 2: Binary 00000000000000000000000010000000 (128 in decimal)
    expect(hammingWeight(0b00000000000000000000000010000000)).toBe(1);

    // Test case 3: Binary 11111111111111111111111111111101 (4294967293 in decimal)
    expect(hammingWeight(0b11111111111111111111111111111101)).toBe(31);

    // Test case 4: Binary 00000000000000000000000000000000 (0 in decimal)
    expect(hammingWeight(0b00000000000000000000000000000000)).toBe(0);

    // Test case 5: Binary 11111111111111111111111111111111 (4294967295 in decimal)
    expect(hammingWeight(0b11111111111111111111111111111111)).toBe(32);

    // Test case 6: Binary 00000000000000000000000000000001 (1 in decimal)
    expect(hammingWeight(0b00000000000000000000000000000001)).toBe(1);

    // Test case 7: Binary 00000000000000000000000000010101 (21 in decimal)
    expect(hammingWeight(0b00000000000000000000000000010101)).toBe(3);
  });
});
