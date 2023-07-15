function solution(k, tangerine) {
    const obj = tangerine.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})
    const sorted = Object.values(obj).sort((a, b) => b - a)
    let result = 0
    let sum = 0
    for(let i = 0; i < sorted.length; i++) {
        sum += sorted[i]
        result++
        if(sum >= k) return result
    }
}