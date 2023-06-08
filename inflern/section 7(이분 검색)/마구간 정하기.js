count = (stable, dist) => {
  let cnt = 1,
    ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  console.log("dist", dist);
  return cnt;
};

solution = (c, stable) => {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
      console.log("lt:", lt);
    } else rt = mid - 1;
  }
  return answer;
};

let n = 5;
let c = 3;
let arr = [1, 2, 8, 4, 9];
console.log(solution(c, arr)); // 출력: 3
