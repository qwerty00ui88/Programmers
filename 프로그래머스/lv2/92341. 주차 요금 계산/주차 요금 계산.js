function solution(fees, records) {
    const answer = [];
    const getNumberTime = (time) => {
        const [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    
    const getParkTime = (start, end) => getNumberTime(end) - getNumberTime(start); 
    
    const getTotalFee = (time) => {
        const [basicTime, basicFee, unitTime, unitFee] = fees
        if(time <= basicTime) return basicFee
        else return basicFee + Math.ceil((time - basicTime) / unitTime) * unitFee
    }
    
    const park = records.map((item) => item.split(" ")).sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
    
    let time = 0;
    for(let i = park.length - 1; i >= 0; i--) {
        if(park[i][2] === 'IN') {
            // 나간 기록이 없는 차량
            time += getParkTime(park[i][0], "23:59");
        } else {
            // 나간 기록이 있는 차량
            time += getParkTime(park[i-1][0], park[i][0]);
            i--;
        }
        
        // 차량 종류가 바뀌면 answer 맨 앞에 주차 요금 추가
        if(i === 0 || (park[i][1] !== park[i - 1][1])) {
            answer.unshift(getTotalFee(time));
            time = 0;
        }
    }
    return answer;
}