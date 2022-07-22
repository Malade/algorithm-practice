// 한 배열이 다른 배열의 인자의 제곱인 인자들을 가지고 있는지 판별하는 함수.
// 인자의 개수는 같아야 하며, 순서는 상관이 없다.
// 만약 조건에 들어맞는다면, true 를 리턴한다

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) { // 길이가 같지 않다면 false
//     return false
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2) // 배열1의 인자의 제곱이 배열2의 어느 위치에 있는지 correctIndex 변수에 저장
//     if (correctIndex === -1) { // 존재하지 않을 경우
//       return false
//     }
//     arr2.splice(correctIndex, 1) // 존재한다면, 배열2에서 제거
//   }
  
//   return true
// }

// same([1,2,2,3], [9,4,1,4])

// 시간복잡도가 O(n^2) 인 해결책.




// Frequency Counter 패턴이 적용된 함수
// 시간복잡도가 O(n) 으로 위의 방법보다 실행시간 측면에서 유리하다

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {} // 각 배열에 적용할 두 개의 객체를 생성

  for (let val of arr1) { 
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 // 인자는 키, 빈도수는 밸류 값으로 저장
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1) { // 실질적으로 배열을 비교하는 부분. 객체 내의 키값과 밸류를 비교한다.
    if (!(key ** 2 in frequencyCounter2)) { // 키의 제곱값이 있는지 확인
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) { // 키의 제곱값의 빈도수가 같은지 확인
      return false
    }
  }

  console.log('F.C 1 : ', frequencyCounter1)
  console.log('F.C 2 : ', frequencyCounter2)
  return true
}

same([1,2,2,3,5], [9,4,1,4,11])
