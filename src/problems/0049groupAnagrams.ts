export const groupAnagrams = function(strs: string[]): string[][] {
  const dict = new Map();
  const result = []

  for (let i = 0; i < strs.length; i++) {
    const formattedString = strs[i]?.split('')?.sort()?.join('')
    const stringArray = dict.get(formattedString)

    if (stringArray >= 0) result[stringArray]?.push(strs[i])
    else {
      result.push([strs[i]])
      dict.set(formattedString, result.length - 1)
    }
  }
  return result
};