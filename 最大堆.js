class MaxHeap {
    constructor() {
        this.data = []
    }
    shiftUp(index) {
        while (index>=1 && this.data[index] > this.data[Math.floor(index/2)]) {
            [this.data[index], this.data[Math.floor(index/2)]] = [this.data[Math.floor(index/2)],this.data[index]]
            index = Math.floor(index/2)
        }
    }
    insert(item) {
        if (this.data.length === 0) {
            this.data.push(undefined)
        }
        this.data.push(item)
        this.shiftUp(this.data.length-1)
    }
}
const h = new MaxHeap

for ( let i = 0; i<7; i++) {
    const it = Math.floor( Math.random()*100)
    h.insert(it)
}

console.log(h.data)