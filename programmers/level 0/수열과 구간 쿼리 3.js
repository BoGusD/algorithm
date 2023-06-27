// https://school.programmers.co.kr/learn/courses/30/lessons/181924

solution = (arr, queries) => {
  let answer = [...arr];
  for (let [to, from] of queries) {
    [answer[to], answer[from]] = [answer[from], answer[to]];
  }
  return answer;
};

//다른 풀이
solution = (arr, queries) => {
  return queries.reduce(
    (acc, cur) => {
      const copyAcc = [...acc];
      const [to, from] = cur;
      const box = acc[to];
      copyAcc[to] = copyAcc[from];
      copyAcc[from] = box;
      return copyAcc;
    },
    [...arr]
  );
};

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
);
