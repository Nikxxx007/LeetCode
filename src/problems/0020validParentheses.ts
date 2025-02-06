interface Brackets {
  [key: string]: string;
}

export const isValid = function(s: string): boolean {
  const result = [];
  const brackets: Brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const inputString = s.split('')

  for (const bracket of inputString) {
    const startBracket = brackets[bracket];

    if (!startBracket) {
      result.push(bracket);
      continue ;
    }

    if (startBracket === result[result.length - 1]) {
      result.pop();
      continue ;
    }
    return false
  }

  return !result.length
};