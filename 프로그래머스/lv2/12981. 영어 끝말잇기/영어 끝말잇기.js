function solution(n, words) {
    const obj = {}
    obj[words[0]] = 1
    for(let i = 1; i < words.length; i++) {
        const isUnique = !obj[words[i]]
        const isSame = (words[i - 1].slice(-1) == words[i][0])
        if(!isUnique || !isSame) return [i % n + 1, Math.floor(i / n + 1)]
        else obj[words[i]] = 1
    }
    return [0, 0]
}
