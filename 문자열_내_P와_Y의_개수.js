function solution(s){
    var answer = true;
    let lower = s.toLowerCase(s)
    let arr = lower.split("") 
    let a = 0;
    let b = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'p'){
            a = a+1;
        } else if (arr[i] === 'y') {
            b = b+1;
        }
        answer = a==b

    }

    return answer;
}

 // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(solution('Hello Javascript'));