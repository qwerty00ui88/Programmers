function solution(word) {
    const alphabet = 'AEIOU'
    const result = [];
    const combination = (current, length) => {
        if (length === 0) {
            result.push(current)
            return
        }

        for(let i = 0; i < alphabet.length; i++) {
            combination(current + alphabet[i], length - 1)
        }
    }
     
    for(let i = 1; i <= 5; i++) combination('', i)

    return result.sort().indexOf(word) + 1
}