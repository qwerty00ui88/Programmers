function solution(n) {
    let countOne = n.toString(2).split("1").length
    let result = n + 1
    while (result.toString(2).split("1").length !== countOne) result++
    return result
}