//내가 풀어본 방식
function solution(s) {
  let answer = "NO";
  let a = 0;
  let b = 0;
  for (let x of s) {
    if (x == "(") {
      a++;
    }
    if (x == ")") {
      b++;
    }
    if (x == s.length - 1 && a == b && a !== 0) {
      answer = "YES";
    }
  }
  return answer;
}
console.log(solution("(((()(()))(()))"));

//답안
function solution(s) {
  let answer = "YES";
  stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
