// https://school.programmers.co.kr/learn/courses/30/lessons/181922
solution = (arr, queries) => {
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const [s, e, k] = query;
    for (let j = s; j <= e; j++) {
      if (j % k == 0) {
        arr[j] += 1;
      }
    }
  }
  return arr;
};

//다른 풀이
function solution(arr, queries) {
  return queries.reduce((acc, cur) => {
    const copyArr = [...acc];
    const [to, from, val] = cur;
    return copyArr.map((el, elIdx) => {
      if (elIdx >= to && elIdx <= from) {
        if (elIdx % val === 0) return el + 1;
      }
      return el;
    });
  }, arr);
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
);
