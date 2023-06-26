//https://school.programmers.co.kr/learn/courses/30/lessons/181932

solution = (code) => {
  let ret = "";
  let mode = 0;
  for (let idx = 0; idx < code.length; idx++) {
    if (mode == 0) {
      if (code[idx] != 1 && idx % 2 == 0) {
        ret += code[idx];
      } else if (code[idx] == 1) {
        mode = 1;
      }
    } else if (mode == 1) {
      if (code[idx] != 1 && idx % 2 != 0) {
        ret += code[idx];
      } else if (code[idx] == 1) {
        mode = 0;
      }
    }
  }
  if (ret == "") {
    return "EMPTY";
  }
  return ret;
};

// 코드가 더 좋은 예제
solution = (code) => {
  let mode = 0;
  return (
    [...code].reduce((acc, cur, idx) => {
      if (mode) {
        if (cur !== "1" && idx % 2 === 1) return acc + cur;
        if (cur === "1") mode = 0;
      } else {
        if (cur !== "1" && idx % 2 === 0) return acc + cur;
        if (cur === "1") mode = 1;
      }

      return acc;
    }, "") || "EMPTY"
  );
};
