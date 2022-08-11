// 배열과 숫자를 전달받아, 배열에서 그 숫자만큼 연속된 인자의 합이 가장 큰 부분을 찾는 함수

// 강의 중의 해결책
// 심플한 방법

// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null
//   }

//   var max = -Infinity
//   for (var i = 0; i < arr.length - num + 1; i++) {
//     temp = 0
//     for (var j = 0; j < num; j++) {
//       temp += arr[i+j]
//     }
//     if(temp > max) {
//       max = temp
//     }
//   }
//   return max
// }

// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))



// sliding window 기법을 이용한 해결책

function maxSubarraySum(arr, num) {
  var maxSum = 0
  var tempSum = 0
  if (arr.length < num) {
    return null
  }

  for (var i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum

  for (var i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  
  return maxSum
}