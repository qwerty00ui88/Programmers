function solution(park, routes) {
    const move = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1],
    };
    const col = park.length;
    const row = park[0].length;
    
    let result = [0, 0];
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (park[i][j] === 'S') result = [i, j];
        }
    }

    loop1: for (const route of routes) {
        const [direction, distance] = route.split(' ');

        let next = result.slice();
        for (let i = 0; i < +distance; i++) {
            const nextX = next[0] + move[direction][0];
            const nextY = next[1] + move[direction][1];

            if (nextX < 0 || nextX >= col || nextY < 0 || nextY >= row) continue loop1;
            if (park[nextX][nextY] === 'X') continue loop1;
            
            next = [nextX, nextY];
        }
        result = next;
    }

    return result;
}