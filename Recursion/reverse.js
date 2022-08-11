// 문자열을 입력받고, 그 문자열을 역순으로 출력하는 함수
// 재귀를 이용해야 한다

function reverse(str) {

  var result = []

  function helper(helperInput) {

    if (helperInput.length === 0) {
      return
    }

    result.push(helperInput[helperInput.length-1])
    
    helper(helperInput.slice(0,-1))
  }

  helper(str)

  return result.join('')

}

console.log(reverse('awesome'))

