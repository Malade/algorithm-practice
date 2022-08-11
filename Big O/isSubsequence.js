// 두개의 문자열을 입력받고, 첫번째 문자열이 두번째 문자열의 subsequence 인지 확인하는 함수
// 즉, 첫번째 문자열이 두번째 문자열의 구성요소들로만 이루어지면 된다
// 단, 순서가 틀리면 안됨
// 이것도 multiiple pointer를 이용하라고 한다

// function isSubsequence(sub, str) {
//   // 내가 생각해본 흐름
//   // sub의 구성 문자들을 순서대로 하나씩 읽고, str에 포인터 두개 할당
//   // sub의 문자와 일치하는 문자가 있다면 포인터에 그 인덱스를 저장하고, sub는 그 다음 문자로
//   // 만약 포인터의 인덱스보다 다음 문자의 인덱스가 작다면 false
//   // 비교를 해야하니 전부 소문자로 바꿔주는게 좋을듯

//   sub = sub.toLowerCase()
//   str = str.toLowerCase()

//   var i = 0
//   var po = 0
//   var ch = 0

//   while (i < str.length) {
    
//   }


// }




// 강의에서의 해결책
// 굉장히 심플해보임

// function isSubsequence(str1, str2) {

//   var i = 0 // subsequence 의 인덱스로 활용될 변수
//   var j = 0 // main string의 인덱스로 활용될 변수

//   if (!str1) return true // str1이 존재하지 않으면 true. 공백은 모든 문자열의 subsequence가 될 수 있다

//   while (j < str2.length) { // j가 계속해서 증가하는 루프. main string의 값을 순서대로 읽어들인다

//     if (str2[j] === str1[i]) { // main string의 문자와 subsequence의 문자가 같다면 subseqence의 다음 문자를 읽음
//       i++
//     }
    
//     if (i === str1.length) { // i가 subseqence의 길이 즉, 인덱스의 끝번호 + 1 이 되었다면 true
//       return true            // 모든 문자가 subsequence 에 존재한다는 뜻
//     }

//     j++
//   }

//   return false 
// }



// 강의에서의 해결책 2번째
// 공간복잡도 O(1) 이 아닌 재귀

function isSubsequence(str1, str2) {
  if (str1.length === 0) {
    return true
  }

  if (str2.length === 0) {
    return false
  }

  if (str2[0] === str1[0]) {
    return isSubsequence(str1.slice(1), str2.slice(2))
  }

  return isSubsequence(str1, str2.slice(1))
}