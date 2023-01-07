
function solution(price, money, count) {
    let arr=[];
    for(let i = 1; i <= count; i++){
        arr.push(Number([price*i]));
    }
    let num = (money - arr.reduce((a,b) => (a+b)));
    
    return (num < 0 ? Math.abs(num) : 0);
}

console.log(solution(3,20,4));