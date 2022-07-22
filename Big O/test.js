function charCount(str) {
  // 입력된 문자열의 알파벳 개수를 세는 함수

  var result = {} // 빈 객체 생성. 여기에 키밸류값으로 결과를 형성할 예정

  for(var i = 0; i < str.length; i++) { // 입력된 str값을 하나하나 확인
    var char = str[i].toLowerCase()
    if (/[a-z0-9]/.test(char)) { // 정규표현식을 이용, 유효한 문자의 범위를 지정
      if (result[char] > 0) {
        result[char]++ // 이미 존재하는 키의 경우 카운트를 올림
      }
      else {
        result[char] = 1 // 존재하지 않았던 키의 경우 추가
      }
    }
  }

  console.log(result)
}

charCount("This is test!!!")