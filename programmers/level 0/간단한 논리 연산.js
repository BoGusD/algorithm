// https://school.programmers.co.kr/learn/courses/30/lessons/181917
solution = (x1, x2, x3, x4) => {
  return (x1 || x2) && (x3 || x4);
};

console.log(solution(false, true, true, true));
