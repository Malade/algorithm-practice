// 정렬된 배열과 숫자 하나를 입력받음
// 만약 입력받은 숫자와 인자쌍의 평균값이 같은 인자쌍이 있다면, true를 리턴하는 함수
// multiple pointer 를 이용해봅시다

function averagePair(arr, num) {
  var left = 0
  var right = arr.length - 1
  
  while (left < right) {
    if ((arr[left] + arr[right]) / 2 === num) {
      return true
    }
    else if ((arr[left] + arr[right]) / 2 < num) {
      left++
    }
    else if ((arr[left] + arr[right]) / 2 > num) {
      right--
    }
  }

  return false
}

console.log(averagePair([1,2,3], 2.5))
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))
console.log(averagePair([-1,0,3,4,5,6], 4.1))
console.log(averagePair([], 4))