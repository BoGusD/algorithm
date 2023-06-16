// https://school.programmers.co.kr/learn/courses/30/lessons/181939

solution = (a, b) => {
  const str1 = String(a) + String(b);
  const str2 = String(b) + String(a);

  return str1 >= str2 ? Number(str1) : Number(str2);
};

console.log(solution(9, 91));
