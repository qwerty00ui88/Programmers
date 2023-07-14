function solution(n) {
    let memo = [1, 1, 2];
    for(let i = 3; i <= n; i++) memo.push(memo[i - 1] % 1234567 + memo[i - 2] % 1234567)
    return memo[n] % 1234567;
}