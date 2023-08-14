function solution(msg) {
    const dic = Array.from({length: 26}, (_, idx) => String.fromCharCode(65 + idx))
    const result = []
    let start = 0
    while(start < msg.length) {
        for(let i = dic.length - 1; i >= 0; i--) {
            if(dic[i] === msg.substr(start, dic[i].length)) {
                result.push(i + 1)
                start += dic[i].length
                dic.push(dic[i] + msg[start])
                break
            }
        }
    }
    return result
}