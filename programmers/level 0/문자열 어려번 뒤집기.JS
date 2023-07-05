// https://school.programmers.co.kr/learn/courses/30/lessons/181913
solution = (my_string, queries) => {
  for (let i = 0; i < queries.length; i++) {
    const copyArr = [...my_string];
    const query = queries[i];
    const [a, b] = query;
    const slicedText = copyArr.slice(a, b + 1);
    const reversedSlice = slicedText.reverse().join("");
    copyArr.splice(a, b - a + 1, reversedSlice);
    my_string = copyArr.join("");
  }

  return my_string;
};

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
