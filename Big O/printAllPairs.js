function printAllPairs(n) { // O(n^2)의 시간복잡도
  for (var i = 0; i < n; i++) { // n이 늘어날수록 연산 늘어남
    for (var j = 0; j < n; j++) { // n이 늘어날수록 연산 늘어남
      console.log(i,j)
    }
  }
}
// 루프 안에 루프가 중첩되어 있으므로 n^2 의 시간복잡도로 계산됨. 2n이 아님

printAllPairs(3)