count = (arr, dist) => {
  let cnt = 1;
  let endPoint = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - endPoint >= dist) {
      cnt++;
      endPoint = arr[i];
    }
  }
  return cnt;
};

solution = (c, arr) => {
  let answer = 0;
  let sortedArr = arr.sort((a, b) => a - b);
  let left = 1;
  let right = sortedArr[sortedArr.length - 1] - sortedArr[0];
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (count(sortedArr, mid) >= c) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
};

let n = 5;
let c = 3;
let arr = [1, 2, 8, 4, 9];
console.log(solution(c, arr)); // 출력: 7
