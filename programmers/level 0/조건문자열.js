//https://school.programmers.co.kr/learn/courses/30/lessons/181934

solution = (ineq, eq, n, m) => {
  if (eq === "=" && n === m) return 1;
  if (ineq === "<" && n < m) return 1;
  if (ineq === ">" && n > m) return 1;
  return 0;
};
