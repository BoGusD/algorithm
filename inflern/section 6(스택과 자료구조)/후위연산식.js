solution = (str) => {
  let answer = 0;
  let stack = [];
  for (let x of str) {
    if (!isNaN(x)) {
      stack.push(Number(x));
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
      console.log("lt", lt);
      console.log("rt", rt);
    }

    console.log(stack);
  }

  answer = stack[0];

  return answer;
};
let a = "352+*9-";
console.log(solution(a));
