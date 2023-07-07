function solution(n,a,b) {
    let [s, l] = a < b ? [a, b] : [b, a]
    let count = 1
    while((l % 2) || (l - s > 1)) {
        s = Math.ceil(s / 2)
        l = Math.ceil(l / 2)
        count++
    }
    return count
}