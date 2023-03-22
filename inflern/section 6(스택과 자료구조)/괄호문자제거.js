function solution(s) {
  let answer;
  stack = [];
  for (let x of s) {
    if (x == ")") {
      while (stack.pop() !== "(");
    } else {
      stack.push(x);
    }
    console.log(stack);
  }
  answer = stack.join("");
  return answer;
}
let a = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(a));
