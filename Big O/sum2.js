// Example for Space Complexity
function double(arr) {
  let newArr = [] // 새로운 배열 할당(newArr)
  for (let i = 0; i < arr.length; i++) { // 새로운 숫자 할당(i)
    newArr.push(2 * arr[i]) // 입력된 배열값에 따라 배열의 길이가 길어짐
  }
  return newArr
}

// 이 함수는 입력된 배열의 크기에 비례해 차지하는 공간이 커지므로, O(n)의 공간복잡도를 가진다.
// 함수 내에서 할당된 배열과 숫자의 크기는 n의 크기에 따라 무의미 해지기 때문에, O(n)으로 단순화 되는것