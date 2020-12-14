function partition(arr, l, r) {
    // const w = Math.floor(Math.random()*(r-l)) + l
    let v = arr[l]
    let j = l
    for(let i = l+1; i<=r; i++) {
        if(arr[i] < v ){
            [arr[i], arr[j+1]] = [arr[j+1], arr[i]]
            j++
        }
    }
    [arr[l], arr[j]] = [arr[j], arr[l]]
    return j 
}


function foo(arr, l, r) {
    if (l>r) {
        return
    }
    const p = partition(arr, l, r)
    foo(arr, l, p-1)
    foo(arr, p+1, r)
}

const data = [9,7,3,6,9,4,3,2]

foo(data, 0, data.length -1)
console.log(data)

