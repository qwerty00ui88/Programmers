function solution(n) {
    let count = 1
    let start = 1
    while(start <= Math.floor(n / 2)) {
        let current = start
        let sum = 0
        while(sum < n) {
            sum += current
            current++
            if(sum === n) count++
        }
        start++
    }
    return count
}