//https://school.programmers.co.kr/learn/courses/30/lessons/181929

solution = (num_list) => {
  const point = num_list.reduce((a, b) => a + b) ** 2;
  const answer = num_list.reduce((a, b) => a * b);
  return point > answer ? 1 : 0;
};

// 다른 풀이
solution = (num_list) => {
  let sum1 = 1,
    sum2 = 0;
  for (let i of num_list) {
    sum1 *= i;
    sum2 += i;
  }
  return sum1 > sum2 ** 2 ? 0 : 1;
};
