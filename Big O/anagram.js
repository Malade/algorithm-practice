function validAnagram(str1, str2) {
  
  if(str1.length !== str2.length) {
    return false
  }

  var obj1 = {}
  var obj2 = {}

  for (var char1 of str1) {
    char1 = char1.toLowerCase()
    obj1[char1] = (obj1[char1] || 0) + 1
  }

  for (var char2 of str2) {
    char2 = char2.toLowerCase()
    obj2[char2] = (obj2[char2] || 0) + 1
  }

  for (var key in obj1) {
    if (!(key in obj2)) {
      return false
    }
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }

  return true

}

console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))