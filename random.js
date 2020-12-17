function ran(item) {
  const arr = []
  for (let i = 0; i < item; i++) {
    arr.push(Math.floor(Math.random() * 100))
  }
  return arr
}

module.exports = ran
