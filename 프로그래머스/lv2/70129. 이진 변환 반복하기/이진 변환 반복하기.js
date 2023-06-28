function solution(s) {
    let binaryCnt = 0
    let zeroCnt = 0
    while(s !== '1') {
        const {length, count} = removeZero(s)
        s = convertToBinary(length)
        binaryCnt++
        zeroCnt += count
    }
    return [binaryCnt, zeroCnt]
}

function removeZero (str) {    
    const replacedL = str.replace(/0/g, '').length
    return {length: replacedL, count: str.length - replacedL} 
}

function convertToBinary (l) {
    return l.toString(2)    
}
