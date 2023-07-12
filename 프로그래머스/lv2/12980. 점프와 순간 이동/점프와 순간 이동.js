function solution(n) {
    let count = 1
    while(n / 2 > 1) {
        if(!Number.isInteger(n / 2)) count++
        n = Math.floor(n / 2)
    }
    return count
}