// 배열과 callback 함수를 인자로 입력받음
// 인자 중 하나라도 callback 함수의 조건을 만족하면 true를 리턴

const isOdd = val => val % 2 !== 0

function someRecursive(arr, callback) {

  if (arr.length === 0) return false

  if (callback(arr[0])) return true
  else return someRecursive(arr.slice(1), callback)

}

console.log(someRecursive([4,6,8], isOdd))