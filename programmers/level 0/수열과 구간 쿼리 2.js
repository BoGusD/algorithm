// https://school.programmers.co.kr/learn/courses/30/lessons/181923
solution = (arr, queries) => {
  let answer = [];
  for (let [s, e, k] of queries) {
    let temp = arr
      .filter((v, i) => i >= s && i <= e && v > k)
      .sort((a, b) => a - b)[0];
    answer.push(temp ? temp : -1);
  }
  return answer;
};

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);
