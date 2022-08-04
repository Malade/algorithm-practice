// 입력받은 두 숫자를 비교하는 함수.
// 두개의 정수를 입력받아서, 각 숫자의 빈도가 같은지를 확인한다
// 숫자를 문자화 시킨 후 객체에 넣어서 비교한다면?
// 객체를 만들어서 해결하면 되지 않을까?

function sameFrequency(n1, n2) {
  var freq1 = {}
  var freq2 = {}

  var arr1 = n1.toString()
  var arr2 = n2.toString()

  if (arr1.length !== arr2.length) {
    return false
  }

  for (var key of arr1) {
    freq1[key] = (freq1[key] || 0) + 1
  }

  for (var key of arr2) {
    freq2[key] = (freq2[key] || 0) + 1
  }

  

  for (var key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false
    }
  }

  return true

}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))
