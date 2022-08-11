// 강의 중에 나온 함수. 입력된 배열 내에서 홀수를 찾는 함수?
// Helper Method Recursion 이라고 부르는 기법을 사용했다  

function collectOddValues(arr) { // 배열을 입력받는 함수

  var result = [] // 결과값이 입력될 배열

  function helper(helperInput) {

    if (helperInput.length === 0) { // 종료 조건. 입력값이 비어있다면 종료
      return
    }

    if (helperInput[0] % 2 !== 0) { // 홀수일 시, result 변수에 값을 추가
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1)) // 초기 입력 배열의 첫 인자를 제외한 배열을 입력값으로 재귀
  }

  helper(arr)

  return result

}

console.log(collectOddValues([1,2,3,4,5,6,7]))