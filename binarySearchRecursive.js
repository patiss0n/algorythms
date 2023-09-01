function binarySearch(arr, t) {
    return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, leftEl, rightEl) {
    if (leftEl > rightEl) return -1;

    let middleEl = Math.floor((leftEl + rightEl) / 2);

    if (arr[middleEl] === t) return middleEl;
    if (t < arr[middleEl]) {
        return search(arr, t, leftEl, middleEl - 1);
    } else {
        return search(arr, t, middleEl + 1, rightEl);
    }
}

console.log(binarySearch([0, 2, 2, 3, 3, 4, 5, 10, 11, 110, 221], 10));