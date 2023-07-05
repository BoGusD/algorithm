// https://school.programmers.co.kr/learn/courses/30/lessons/181914
solution = (number) => {
  let answer = 0;
  for (let i = 0; i < number.length; i++) {
    answer += Number(number[i]);
  }
  return answer % 9;
};
