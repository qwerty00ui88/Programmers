function solution(num_list) {
    const multiply = num_list.reduce((acc, cur) => acc * cur, 1)
    const sumSquared = num_list.reduce((acc,cur) => acc + cur, 0) ** 2;
    return multiply < sumSquared ? 1 : 0
}