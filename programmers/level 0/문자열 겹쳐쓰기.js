// https://school.programmers.co.kr/learn/courses/30/lessons/181943

// splice(시작 인덱스, 대체할 인덱스 길이, 인입할 대상)

function solution(my_string, overwrite_string, s) {
  const myStr = [...my_string];
  myStr.splice(s, overwrite_string.length, overwrite_string);
  return myStr.join("");
}
