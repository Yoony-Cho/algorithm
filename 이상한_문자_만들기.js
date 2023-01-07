function solution(s) {
  let answer = '';
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) {
        answer += (String(arr[i]).charAt(j).toUpperCase());
      } else {
        answer += (String(arr[i]).charAt(j).toLowerCase());
      }
    } if (i < arr.length - 1) {
      answer += " "
    }
  }
  return answer
}

console.log("결과 : " + solution("try hello world"));