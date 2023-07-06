// https://school.programmers.co.kr/learn/courses/30/lessons/181912
solution = (intStrs, k, s, l) => {
  let answer = [];
  for (let i = 0; i < intStrs.length; i++) {
    const slicedStr = intStrs[i].slice(s, s + l);
    if (slicedStr > k) answer.push(Number(slicedStr));
  }
  return answer;
};
