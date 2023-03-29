solution = (a, b) => {
  let answer = "YES";
  let queue = a.split("");
  for (let x of b) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
    console.log(queue);
  }
  if (queue.length > 0) return "NO";

  return answer;
};
let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
