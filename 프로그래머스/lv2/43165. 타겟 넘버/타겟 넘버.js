function solution(numbers, target) {
    let answer = 0
    function fn(idx, sum) {
        if(idx==numbers.length) {
            if(sum==target) answer++
            return
        }
        fn(idx + 1, sum + numbers[idx])
        fn(idx + 1, sum - numbers[idx])
    }
    fn(0,0)
    return answer
}