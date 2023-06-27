//https://school.programmers.co.kr/learn/courses/30/lessons/181926

solution = (n, control) => {
  for (let i = 0; i < control.length; i++) {
    if (control[i] == "w") n++;
    else if (control[i] == "s") n--;
    else if (control[i] == "d") {
      n += 10;
    } else n -= 10;
  }
  return n;
};

//다른 풀이
solution = (n, control) => {
  return [...control].reduce((acc, cur) => {
    switch (cur) {
      case "w":
        return acc + 1;
      case "s":
        return acc - 1;
      case "d":
        return acc + 10;
      case "a":
        return acc - 10;
      default:
        return acc;
    }
  }, n);
};
