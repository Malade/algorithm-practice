function countUpAndDown(n) { // O(n)의 시간복잡도
  console.log("Going Up!")
  for (let i = 0; i < n; i++) { // n이 늘어날수록 연산도 늘어남
    console.log(i)
  }
  console.log("At the Top!\nGoing down...")
  for (let j = n - 1; j >= 0; j--) { // n이 늘어날수록 연산도 늘어남
    console.log(j)
  }
  console.log("Back down. Bye!")
}

countUpAndDown(10)