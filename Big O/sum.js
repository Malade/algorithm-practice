// Example for Space Complexity
function sum(arr) {
  let total = 0 // 숫자 하나의 공간 할당(total)
  for (let i = 0; i < arr.length; i++) { // 숫자 하나의 공간 할당(i)
    total += arr[i] // 새로운 변수를 만드는 것이 아닌, total에 더할 뿐. 공간 변화 없음
  }
  return total
}

// 이 함수는 결국 입력값에 상관없이 O(1)의 공간복잡도를 가진다