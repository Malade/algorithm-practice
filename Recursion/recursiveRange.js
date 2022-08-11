// 0부터 입력받은 숫자 까지의 합을 결과값으로 리턴하는 함수

function recursiveRange(num) {
  if (num === 0) {
    return 0
  }

  return num + recursiveRange(num -1)
}

console.log(recursiveRange(6))