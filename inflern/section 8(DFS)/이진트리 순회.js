solution = (v) => {
  let answer = "";
  DFS = (v) => {
    if (v > 7) {
      return;
    } else {
      //  전위 순회
      //   answer+=(v+' ');
      //   DFS(v * 2);
      //   DFS(v * 2 + 1);
      //  중위 순회
      DFS(v * 2);
      answer += v + " ";
      console.log("answer", answer);
      DFS(v * 2 + 1);
      //  후위 순회
      //   DFS(v * 2);
      //   DFS(v * 2 + 1);
      //   answer+=(v+' ');
    }
  };
  DFS(v);
  return answer;
};
console.log(solution(1));
