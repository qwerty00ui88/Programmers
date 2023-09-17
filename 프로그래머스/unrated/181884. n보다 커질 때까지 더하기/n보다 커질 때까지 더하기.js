function solution(numbers, n) {
    let sum = numbers[0]
    let i = 1
    while(sum <= n) sum += numbers[i], i++
    return sum
}