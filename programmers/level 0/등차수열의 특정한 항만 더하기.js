// https://school.programmers.co.kr/learn/courses/30/lessons/181931

solution = (a, d, included) => {
  let answer = 0;
  for (let i = 0; i < included.length; i++) {
    if (included[i] == true) {
      answer += a + d * i;
    }
  }
  return answer;
};

//리펙토링
const calculateSum = (a, d, included) => {
  let answer = 0;
  included.forEach((isIncluded, i) => {
    if (isIncluded) {
      answer += a + d * i;
    }
  });
  return answer;
};
