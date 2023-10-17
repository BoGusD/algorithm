// https://school.programmers.co.kr/learn/courses/30/lessons/12973

// 효율성 구림
solution = (s) => {
  const strArr = s.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == strArr[i + 1]) {
      strArr.splice(i, 2);
      i = -1;
    }
  }
  return strArr.length === 0 ? 1 : 0;
};

console.log(solution("baabaa"));

// 효율성 0

solution = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop(s[i]);
    }
  }
  return stack.length ? 0 : 1;
};
