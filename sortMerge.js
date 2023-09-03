function sortMerge(arr) {
    if(arr.length < 2) return arr

    const mid = Math.floor(arr.length / 2)
    
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(sortMerge(left), sortMerge(right))
}

function merge(left, right) {
     const sortedArr = []
     while(left.length && right.length) {
        if(left[0] <= right[0]) {
            sortedArr.push(left.shift())
        }
        else {
            sortedArr.push(right.shift())
        }
     }
     return [...sortedArr, ...left, ...right]
}

console.log(sortMerge([1, 3, 21, 123, 0, -1, 0, 23, 2, 1, 13, 33, -50, 6]))