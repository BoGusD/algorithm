// https://school.programmers.co.kr/learn/courses/30/lessons/181911
solution = (my_strings, parts) => {
  let answer = "";
  for (let i = 0; i < parts.length; i++) {
    const query = parts[i];
    const [s, e] = query;
    const slicedStr = my_strings[i].slice(s, e + 1);
    answer += slicedStr;
  }
  return answer;
};

console.log(
  solution(
    ["progressive", "hamburger", "hammer", "ahocorasick"],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);
