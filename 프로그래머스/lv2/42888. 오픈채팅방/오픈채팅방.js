function solution(record) {
  const userName = {};

  const massage = {
    "Leave": "나갔습니다.",
    "Enter": "들어왔습니다.",
  }

  return record
    .map(el => el.split(" "))
    .filter(el => {
      const [status, userId, name] = el;
      if(status !== "Leave") userName[userId] = name
      return status !== "Change";
    })
    .map(el => `${userName[el[1]]}님이 ${massage[el[0]]}`);
}