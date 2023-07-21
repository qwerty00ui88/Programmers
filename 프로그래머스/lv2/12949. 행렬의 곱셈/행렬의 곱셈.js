function solution(arr1, arr2) {
    const result = new Array(arr1.length).fill(0).map(() => new Array(arr2[0].length).fill(0))
    for(let a = 0; a < arr1.length; a++) {
        for(let b = 0; b < arr2[0].length; b++) {
            for(let c = 0; c < arr1[0].length; c++) {
                result[a][b] += arr1[a][c] * arr2[c][b]
            }
        }
    }
    return result
}
