//https://school.programmers.co.kr/learn/courses/30/lessons/181928

solution = (num_list) => {
  let odd = "",
    even = "";
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 == 0) even += String(num_list[i]);
    else odd += String(num_list[i]);
  }
  return parseInt(odd) + parseInt(even);
};
