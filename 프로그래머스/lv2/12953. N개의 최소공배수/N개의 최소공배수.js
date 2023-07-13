function solution(arr) {
    let gcd = (a, b) => (a % b) ? gcd(b, a % b) : b
    return arr.reduce((acc, cur) => acc * cur / gcd(acc, cur), 1)
}

    