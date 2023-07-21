function solution(s) {
    const sDouble = (s + s).split('')
    let count = 0
    for(let i = 0; i < s.length; i++) if(isValid(sDouble.slice(i, i + s.length))) count++
    return count
}

function isValid(arr) {
    const open = ['(', '{', '[']
    const close = {'(' :')', '{': '}', '[': ']'}
    const stack = []
    for(let i = 0; i < arr.length; i++) {
        if(open.includes(arr[i])) stack.push(arr[i])    
        else if(close[stack.slice(-1)[0]] === arr[i]) stack.pop()
        else return false
    }
    return !stack.length
}


