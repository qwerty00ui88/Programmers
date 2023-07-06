function solution(brown, yellow) {
    const sum = (c) => ((brown + yellow) / c) + c === brown / 2 + 2
    for(let i = 1; i <= Math.sqrt(brown + yellow); i++) if(sum(i)) return [(brown + yellow) / i, i]
}