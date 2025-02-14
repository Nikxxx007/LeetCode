export const majorityElement = (nums: number[]): number => {
  let maxValue = [0, 0];
  const dict: Record<number, number> = {}

  nums.map((value) => {
    if (dict[value]) dict[value]++
    else dict[value] = 1;

    if (dict[value] > maxValue[1]) {
      maxValue[0] = value
      maxValue[1] = dict[value]
    }
  })

  return maxValue[0];
};