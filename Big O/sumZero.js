// 정렬되어 있는 배열에서, 두 인자의 합이 0인 조합이 있다면 그것을 리턴하는 함수

// simple way
// O(n^2) 의 시간복잡도. 중첩 루프가 있기 때문

// function sumZero(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i+1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))


// multiple pointer
// O(n) 의 시간복잡도를 갖는다.
// 정렬된 배열이라서 쓸 수 있는 방법이다.

function sumZero(arr) {
  var left = 0
  var right = arr.length - 1
  while (left < right) {
    var sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    }
    else if (sum < 0) {
      left++
    }
    else {
      right--
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))