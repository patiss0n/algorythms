function search(arr, t) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === t) return i
    }

    return -1
}

console.log(search([0, 2, 2 ,3, 3, 4 ,5, 10, 11, 110, 221], 10))