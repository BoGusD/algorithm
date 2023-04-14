solution = (n, arr) => {
  let answer = Array.from({ length: n }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < n; i++)
      if (x === answer[i]) {
        pos = i;
      }
    if (pos === -1) {
      for (let i = n - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
    console.log("pos", pos);
  });

  return answer;
};

let a = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, a));

solution = (size, arr) => {
  let answer = [];
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      //unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });

  return answer;
};

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
