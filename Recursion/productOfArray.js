// 배열을 입력받고, 그 배열의 인자를 모두 곱한 값을 리턴하는 함수


function productOfArray(arr) {
  // 종료조건? 
  if (arr.length === 1) {
    return arr[0]
  }

  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3,10]))