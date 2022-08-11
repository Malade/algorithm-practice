// 재귀를 이용해서 지수승을 이끌어내는 함수
// 인자 두개를 입력 받는데 첫 인자는 base, 두번째 인자가 지수값이다

function power(base, exp) {
  if(exp === 0) {
    return 1
  }

  return base * power(base, exp-1)
}