function solution(A,B){    
    A.sort((a, b) => a- b)
    B.sort((a, b) => a- b)
    const lastIdx = A.length - 1
    const sum = A.reduce((acc,_,idx) => [acc[0] + A[idx] * B[lastIdx - idx], acc[1] + A[lastIdx - idx] * B[idx]], [0, 0])
    return Math.min(...sum)
}