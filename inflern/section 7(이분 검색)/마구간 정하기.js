count = (arr, dist) => {
  let cnt = 1;
  endPoint = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= dist) {
      cnt++;
      ep = arr[i];
    }
  }
  return cnt;
};
solution = (c, arr) => {
  let answer = arr.sort((a, b) => a - b);
  let lt = 1;
  let rt = arr[arr.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(arr, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
};

let a = [1, 2, 8, 4, 9];
console.log(solution(3, a));
