function solution(n, k) {
    const splited = n.toString(k).split('0').filter(n => n).map(n => Number(n))
    return splited.filter(n => isPrime(n)).length
}

function isPrime(n) {
    if(n === 1) return false
    if(n === 2) return true
    if(!(n % 2)) return false
    for(let i = 3; i <= Math.sqrt(n); i+=2) if(!(n % i)) return false
    return true
}