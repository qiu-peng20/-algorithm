function test(array) {
  for (let index = 1; index < array.length; index++) {
    let data = array[index]
    let j
    for (j = index; j > 0 && data < array[j - 1]; j--) {
      array[j] = array[j - 1]
    }

    array[j] = data
  }
  return array
}

const a = [9, 6, 3, 1, 2, 7, 8]

const bb = test(a)
console.log(bb)
