solution = (n) => {
  // https://school.programmers.co.kr/learn/courses/30/lessons/181935
  let answer = 0;
  if (n % 2 != 0) {
    for (let i = 0; i <= n; i++) {
      if (i % 2 != 0) {
        answer += i;
      }
    }
  } else {
    for (let i = 1; i <= n; i++) {
      if (i != 0 && i % 2 == 0) {
        answer += i * i;
      }
    }
  }
  return answer;
};
