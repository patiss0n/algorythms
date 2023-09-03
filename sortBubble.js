function sortBubble(arr) {
    let check = true
    while(check == true) {
        check = false
        for(let i = 0; i < arr.length-1; i++) {
            if(arr[i+1] < arr[i]) {
                let temp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = temp
                check = true
                console.log(arr)
            }
        }
    }
    return arr
}

console.log(sortBubble([100, 5, 3, 1, 9, -1, 0, 0, 12, 11, 18]))