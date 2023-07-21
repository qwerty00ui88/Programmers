function solution(elements) {
    const double = elements.concat(elements)
    const result = []
    const pushNum = (level, idx, sum) => {
        if(level > elements.length) return
        result.push(sum)
        pushNum(level + 1, idx + 1, sum + double[idx + 1])
    }
    for(let i = 0; i < elements.length; i++) pushNum(1, i, elements[i])
    return Array.from(new Set(result)).length
}