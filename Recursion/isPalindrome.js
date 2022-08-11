// 문자열이 palindrome 즉, 역순으로 읽어도 같은 문자열인지 비교하는 함수
// reverse 함수에 조금 추가하면 만들 수 있을듯 하다

function isPalindrome(str) {

  if (str.length <= 1) {
    return true
  }

  if (str[0] === str[str.length -1]) {
    return isPalindrome(str.slice(1,-1))
  }
  else return false

}

console.log(isPalindrome('tacocat'))
