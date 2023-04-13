solution = (arr) => {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    console.log(tmp);
    console.log(j);
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }

    arr[j + 1] = tmp;
  }
  return answer;
};
let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

//스택

solution = (arr) => {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (arr[i] < answer[j]) {
        answer.splice(j, 0, arr[i]);
        break;
      }
    }
  }
  return answer;
};
