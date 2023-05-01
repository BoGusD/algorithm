// map 함수로 찾기 시간 복잡도 O(N)
solution = (n, arr) => {
  let answer;
  arr.sort((a, b) => a - b);
  arr.map((value, idx) => {
    if (value === n) {
      answer = idx + 1;
    }
  });
  return answer;
};
let n = 32;
let a = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(n, a));

// 이분 검색으로 찾기 log2O(n)
solution = (target, arr) => {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
};
let target = 32;
let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(target, arr));
