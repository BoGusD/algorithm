//https://school.programmers.co.kr/learn/courses/30/lessons/181942

solution = (str1, str2) => {
  return [...str1].map((a, i) => a + str2[i]).join("");
};
