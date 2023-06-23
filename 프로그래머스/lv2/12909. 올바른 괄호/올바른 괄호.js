function solution(s) {
    const stack = [];
    if(s.length % 2 || s[0] === ')' || s[s.length - 1] === '(') return false 
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push('(');
        else if (!stack.length) return false;
        else stack.pop();
    }

    return !stack.length;
}
