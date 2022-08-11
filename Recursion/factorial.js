// 재귀함수를 이용해 팩토리얼을 재현하는 함수
// 일단은 내가 생각나는 대로 해보고, 아랫부분에 강의에서의 해결책을 추가할 예정

function factorial(num) {
  if (num <= 1) {
    return 1
  }

  return num * factorial(num-1)
}

console.log(factorial(5))