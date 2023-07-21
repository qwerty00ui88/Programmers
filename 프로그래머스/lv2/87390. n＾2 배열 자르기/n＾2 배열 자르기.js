function solution(n, left, right) {
    const start = [Math.floor(left / n), left % n]
    const end = [Math.floor((right + 1) / n), (right + 1) % n]
    const result = []
    while(start[0] < end[0] || start[1] < end[1]) {
        result.push(Math.max(...start) + 1)
        if(start[1] < n - 1) start[1]++
        else start[0]++, start[1] = 0
    }
    return result
}