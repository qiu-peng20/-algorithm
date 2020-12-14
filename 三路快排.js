function foo (arr, l, r) {
    if (l>=r) {
        return
    }

    let lt = l
    let gt = r + 1
    const v = arr[l]
    let i = l + 1
    while(i<gt) {
        if (v>arr[i]) {
            [arr[lt+1], arr[i]] = [arr[i], arr[lt+1]]
            i++
            lt++
        }
        else if (v<arr[i]) {
            [arr[gt-1], arr[i]] = [arr[i], arr[gt-1]]
            gt--
        }
        else {
            i++
        }   
    }
    [arr[l], arr[lt]] = [arr[lt], arr[l]]
    lt--
    console.log(l, lt, gt, r)
    foo(arr, l,lt)
    foo(arr, gt,r)
}

const data = [4,7,6,4,2,1,9,10]

foo(data, 0, data.length)

console.log(data)