// https://school.programmers.co.kr/learn/courses/30/lessons/12973

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
