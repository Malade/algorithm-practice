// 정렬된 배열 내의 인자의 종류가 몇개인지 세는 함수
// 중복을 제거한 인자의 개수를 센다고 보면 된다


// 포인터를 사용하지 않는 방법
// 개인적으로 생각해본 방법이다

// function countUniqueValues(arr) {
//   var test = {}
//   for (var i of arr) {
//     console.log(i)
//     test[i] = (test[i] || 0) + 1
//     console.log(test)
//   }

//   return Object.keys(test).length
// }

// console.log(countUniqueValues([-2,-1,-1,0,1]))


// 포인터를 사용하는 방법
// 일단 한번 해봅시다

function countUniqueValues(arr) {
  var count = 0;
    for (var j = 1; j < arr.length; j++) {
      if (arr[count] == arr[j]) {
        continue
      }
      else {
        count++
        arr[count] = arr[j]
      }
    }

    return arr.length > 0 ? count+1 : count
}

console.log(countUniqueValues([]))