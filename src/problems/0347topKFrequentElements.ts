/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export const topKFrequent = (nums: number[], k:number):number[] => {
  const values = new Map();
  const result: number[] = []

  nums.forEach((num) => {
    const frequency = values.get(num);

    if (frequency) values.set(num, frequency + 1)
    else values.set(num, 1)
  })

  const sortedArray = Array.from(values).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]; // Sort by keys if values are the same
    }
    return b[1] - a[1]; // Sort by values in descending order
  });

  const mapAsc = new Map(sortedArray);

  mapAsc.forEach((_, index) => result.push(index))

  return result.slice(0, k)
};