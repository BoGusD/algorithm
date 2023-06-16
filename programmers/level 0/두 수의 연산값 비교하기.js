//https://school.programmers.co.kr/learn/courses/30/lessons/181938

solution = (a, b) => {
  let str = parseInt(String(a) + String(b));
  return str >= 2 * a * b ? str : 2 * a * b;
};

console.log(solution(91, 2));
