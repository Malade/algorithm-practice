// 배열을 입력받고, 그 배열의 인자를 꺼내는 함수?
// 배열 안의 배열을 다 꺼내서 1차원 배열로 만듦

function flatten(arr) {
  
  var result = []

  function helper(helperInput) {

    if (helperInput.length === 0) return // 더 이상 인자가 없을 때 종료

    if (helperInput[0].length !== undefined) { 
      helper(helperInput[0])
    }
    else result.push(helperInput[0])

    helper(helperInput.slice(1))

  }

  helper(arr)

  return result
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))