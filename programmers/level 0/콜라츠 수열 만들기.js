// https://school.programmers.co.kr/learn/courses/30/lessons/181919
solution = (n) => {
  let answer = [n];
  while (n != 1) {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    answer.push(n);
  }
  return answer;
};

console.log(solution(10));
