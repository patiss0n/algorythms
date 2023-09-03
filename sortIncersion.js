function sortIncersion(arr) {

    for(let i = 1; i<arr.length;i++) {

        let temp = arr[i]

        for(let j = i-1; j>=0; j--) {
            if(arr[j] > temp) {
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

console.log(sortIncersion([5, -2, 3, -4, 100, 0, 0, 0]))