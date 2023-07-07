// https://school.programmers.co.kr/learn/courses/30/lessons/181910

solution = (my_string, n) => {
  return my_string.slice(my_string.length - n, my_string.length);
};

console.log(solution("ProgrammerS123", 11));
