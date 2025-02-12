export const hammingWeight = (n: number): number => {
  const binary = (n >>> 0).toString(2);
  let result = 0;

  binary.split("").forEach((value) => {
    if (value === "1") result++;
  });

  return result;
};
