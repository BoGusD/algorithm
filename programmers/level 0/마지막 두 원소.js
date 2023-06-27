// https://school.programmers.co.kr/learn/courses/30/lessons/181927
solution = (num_list) => {
  let a = num_list.length - 1;
  let b = num_list.length - 2;
  num_list[b] < num_list[a]
    ? num_list.push(num_list[a] - num_list[b])
    : num_list.push(num_list[a] * 2);
  return num_list;
};

console.log(solution([2, 1, 6]));
