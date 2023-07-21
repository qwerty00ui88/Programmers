function solution(elements) {
    const double = elements.concat(elements)
    const result = new Set()
    const addSum = (level, idx, sum) => {
        if(level > elements.length) return
        result.add(sum)
        addSum(level + 1, idx + 1, sum + double[idx + 1])
    }
    for(let i = 0; i < elements.length; i++) addSum(1, i, elements[i])
    return result.size
}