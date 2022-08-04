// 배열과 숫자를 전달받아, 배열에서 그 숫자만큼 연속된 인자의 합이 가장 큰 부분을 찾는 함수

// 강의 중의 해결책

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null
  }

  var max = -Infinity
  for (var i = 0; i < arr.length - num + 1; i++) {
    temp = 0
    for (var j = 0; j < num; j++) {
      temp += arr[i+j]
    }
    if(temp > max) {
      max = temp
    }
  }
  return max
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))