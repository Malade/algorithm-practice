function logAtLeast5(n) { // n에 관계 없이 최소 5번은 출력됨
  for (var i = 1; i <= Math.max(5,n); i++) {
    console.log(i)
  }
}
// 시간복잡도 O(n)


function logAtMost5(n) { // n에 관계 없이 최대 5번까지만 출력됨
  for (var i = 1; i <= Math.min(5, n); i++){
    console.log(i)
  }
}
// 시간복잡도 O(1)

logAtMost5(3)