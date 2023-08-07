function solution(k, dungeons) {
    let answer = 0
    const check = Array(dungeons.length).fill(false)
    
    function dfs(currentHp, depth) {
        answer = Math.max(answer, depth)
        for(let i = 0; i < dungeons.length; i++) {
            const [minHp, useHp] = dungeons[i]
            if(!check[i] && currentHp >= minHp) {
                check[i] = true
                dfs(currentHp - useHp, depth + 1)
                check[i] = false
            }
        }
    }
    dfs(k, 0)
    return answer
}