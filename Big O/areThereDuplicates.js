// 여러개의 인자를 입력 받고, 그 중 중복이 있는지를 판단하는 함수
// 인자의 개수는 고정되어 있지 않으므로 여러개를 받을 수 있게 만들어야함
// 중복되는 인자가 있다면 true 를 리턴, 없으면 false


// frequency counter 를 이용한 방법

// function areThereDuplicates() {
//   var freq = {}

//   // arguments에 있는 인자들을 순서대로 꺼내서 freq에 넣어주기

//   for (var i = 0; i < arguments.length; i++) {
//     freq[arguments[i]] = (freq[arguments[i]] || 0) + 1
    
//     if (freq[arguments[i]] > 1) {
//       return true
//     }
//   }

//   return false
  
// }

// console.log(areThereDuplicates('a','b','c','a'))



// multiple pointer 를 이용한 방법
// 이건 강의 내에서의 솔루션. 내가 짠거 아님!


// function areThereDuplicates(...args) {

//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }


// 한줄 해답
// 이것도 내가 짠건 아님

function areThereDuplicates() {
  // Set 객체는 중복되지 않는 유일한 값들의 집합
  // Set 객체를 생성할 경우, 자동으로 중복이 제거된다
  // 그렇기 때문에 Set 객체에 arguments 를 넣었을 때의 크기가
  // 본래 arguments의 길이와 다르다면 중복이 있으므로 true 가 된다는 얘기
  return new Set(arguments).size !== arguments.length;
}