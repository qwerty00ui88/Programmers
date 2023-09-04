function solution(topping) {
  let answer = 0;

  const allTopping = new Map();
  const bro = new Set();

  // Map 자료구조에 각 토핑의 개수가 몇개인지 넣어준다.
  // {1 => 4, 2 => 2, 3 => 1, 4 => 1}
  topping.forEach((n) => {
    allTopping.set(n, (allTopping.get(n) || 0) + 1);
  });

  for (let n of topping) {
    // 토핑을 하나씩 확인하면서 (케익을 1부터 자르는 것)
    // allTopping의 목록을 하나씩 빼준다.
    allTopping.set(n, allTopping.get(n) - 1);

    // bro에는 토핑의 갯수가 중요하지 않고,
    // 토핑의 종류가 중요하므로 들어온 토핑의 종류 n과 true를 넣어준다.
    bro.add(n, true);

    // allTopping의 토핑이 0이되면 그 토핑 항목을 지워준다.
    if (!allTopping.get(n)) allTopping.delete(n);

    // allTopping의 크기와 bro의 크기가 같으면
    // 형과 동생이 같은 종류의 토핑을 들고있는 것이기에
    // answer을 1 증가시켜준다.
    if (allTopping.size === bro.size) answer++;

    // 동생의 가진 토핑 종류가 많아지면 더 이상 케익을
    // 잘라도 동생의 토핑 개수만 증가하는 것이기 때문에
    // break문을 걸어 반복문을 종료시킨다.
    if (allTopping.size < bro.size) break;
  }

  return answer;
}