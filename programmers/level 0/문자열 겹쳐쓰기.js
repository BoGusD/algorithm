// https://school.programmers.co.kr/learn/courses/30/lessons/181943

function solution(my_string, overwrite_string, s) {
  const answer = [...my_string];
  for (let i = s; i <= my_string.length; i++) {
    answer[i] = overwrite_string[i - s];
  }

  return answer;
}
solution("He11oWor1d", "lloWorl", 2);
