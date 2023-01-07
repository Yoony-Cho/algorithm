function solution(x) {
   
  return (x%(x + '').split('').map(Number).reduce((a,b) => (a+b)) === 0 ? true : false)

}

console.log(solution(132))