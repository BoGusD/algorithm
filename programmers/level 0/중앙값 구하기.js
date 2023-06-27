// https://school.programmers.co.kr/learn/courses/30/lessons/120811

solution = (array) => {
  let answer = array.sort((a, b) => a - b);
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] == answer[parseInt(answer.length / 2)]) {
      return answer[i];
    }
  }
};
