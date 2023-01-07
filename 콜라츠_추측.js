function solution(num) {
    var count = 0;
    
    do{
        if (num === 1){
            return count;
        } else {
            count ++;
            num = num%2 === 0 ? num / 2 : num*3+1
        }
        
    } while (count < 500)
        return -1
    
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( solution(6) );