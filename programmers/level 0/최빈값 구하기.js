// https://school.programmers.co.kr/learn/courses/30/lessons/120812
function solution(array) {
  // 주어진 배열에서 각 값의 빈도를 저장하기 위한 객체 생성
  const frequency = {};

  // 배열의 각 요소를 순회하면서 빈도를 계산
  for (let i = 0; i < array.length; i++) {
    if (frequency[array[i]]) {
      frequency[array[i]]++;
    } else {
      frequency[array[i]] = 1;
    }
  }

  let maxFrequency = 0; // 최빈값의 빈도를 저장하는 변수
  let mode = -1; // 최빈값을 저장하는 변수

  // 빈도 객체를 순회하면서 최빈값을 찾음
  for (const key in frequency) {
    if (frequency[key] > maxFrequency) {
      maxFrequency = frequency[key];
      mode = parseInt(key);
    } else if (frequency[key] === maxFrequency) {
      // 최빈값이 여러 개인 경우 -1 반환
      mode = -1;
    }
  }

  return mode;
}

// 다른 풀이

function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
