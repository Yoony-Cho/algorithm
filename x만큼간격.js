function solution(x, n) {
    var answer = [];
    for(let i = 1; i <= n; i++){
        answer.push(Number([x*i]));
    }
    return answer;
}



// function solution(x, n) {
//     return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }

//fill, map 찾아봐야할듯, Array도 함수인가?