// 피보나치 수열에서 입력받은 숫자의 순서에 있는 수를 리턴하는 함수
// 기억상 첫번째랑 두번째 숫자는 고정이었음

function fib(num) {
  if (num === 1 || num === 2) {
    return 1
  }

  return fib(num-1) + fib(num-2)
}

console.log(fib(50))