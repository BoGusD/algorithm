// 재귀함수: 자기 자신을 호출하는 함수
// return: 함수 종료의 의미도 있음

solution = (n) => {
  DFS = (L) => {
    if (L == 0) return;
    else {
      //1 2 3 인 이유 DFS 함수에 의하여 매개변수가 실행되고 난 후에 복귀 주소에 의해 1, 2, 3 순서대로  console.log(L)이 실행됨. 스택은 선입후반출
      DFS(L - 1);
      console.log(L);

      // 3 2 1
      //   console.log(L);
      //   DFS(L - 1);
    }
  };
  DFS(n);
};

solution(3);
