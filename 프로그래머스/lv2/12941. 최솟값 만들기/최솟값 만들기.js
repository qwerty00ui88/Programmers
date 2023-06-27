function solution(A,B){    
    A.sort((a, b) => a- b)
    B.sort((a, b) => a- b)
    const lastIdx = A.length - 1
    return A.reduce((acc,_,idx) => acc + A[idx] * B[lastIdx - idx], 0)
}