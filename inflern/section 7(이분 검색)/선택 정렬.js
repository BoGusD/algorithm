//내가 풀어본 방식
solution = (str) => {
  let answer;
  str.sort((a, b) => {
    return a - b;
  });
  answer = str;
  return answer;
};
let a = [13, 5, 11, 7, 23, 15];
console.log(solution(a));

//탐색을 통한 선택 정렬

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    //자바스크립트 최신 버전에서 가능하게 된 데이터 스왑
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
