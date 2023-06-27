// https://school.programmers.co.kr/learn/courses/30/lessons/181925
solution = (numLog) => {
  let answer = "";

  for (let i = 0; i < numLog.length - 1; i++) {
    let a = numLog[i];
    let b = numLog[i + 1];
    if (a + 1 == b) answer += "w";
    else if (a - 1 == b) answer += "s";
    else if (a + 10 == b) {
      answer += "d";
    } else answer += "a";
  }
  return answer;
};

//다른 풀이
solution = (numLog) => {
  return numLog.reduce((acc, cur, curIdx, originArr) => {
    if (!curIdx) return "";
    const prev = originArr[curIdx - 1];
    switch (prev - cur) {
      case -1:
        return acc + "w";
      case 1:
        return acc + "s";
      case -10:
        return acc + "d";
      case 10:
        return acc + "a";
    }
  }, "");
};
