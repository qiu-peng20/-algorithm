function marge(arr, l, mid, r) {
  const aux = []
  for (let i = l; i <= r; i++) {
    aux.push(arr[i])
  }
  let i = l
  let j = mid + 1
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l]
      j++
    } else if (j > r) {
      arr[k] = aux[i - l]
      i++
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l]
      i++
    } else {
      arr[k] = aux[j - l]
      j++
    }
  }
}
let a = 0

function main(arr, l, r) {
  if (l >= r) {
    return
  }
  let mid = Math.floor((l + r) / 2)
  main(arr, l, mid)
  main(arr, mid + 1, r)
  marge(arr, l, mid, r)
}
const foo = require('./random')

const data = foo(10)

main(data, 0, data.length - 1)
