// https://school.programmers.co.kr/learn/courses/30/lessons/181948

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// \슬래시는 무조건 \\\ 이스케이프 문자로 감싸줘야 특수문자로 출력가능
rl.on("close", function () {
  console.log("!@#$%^&*(\\'\"<>?:;");
});
