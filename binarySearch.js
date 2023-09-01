function search(arr, t) {
    let leftEl = 0
    let rightEl = arr.length - 1
    while(leftEl <= rightEl) {
        let middleEl = Math.floor((rightEl + leftEl)/2);
        if(t === arr[middleEl]) return middleEl
        if(t < arr[middleEl]) rightEl = middleEl - 1
        else leftEl = middleEl + 1
    } 
    return -1
}

console.log(search([0, 2, 2 ,3, 3, 4 ,5, 10, 11, 110, 221], 10))