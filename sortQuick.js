function quickSort(arr) {
    if(arr.length < 2) return arr
    let last = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i = 0; i<arr.length-1; i++) {
        if(arr[i] > last) right.push(arr[i])
        else left.push(arr[i])
    }
    return [...quickSort(left), last, ...quickSort(right)]
}

console.log(quickSort([5, 3, 1, -2, -2, 0, 13, 0, -88, 2, -10, 11, 2]))