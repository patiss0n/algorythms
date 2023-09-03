function cartProd (arr1, arr2) {
    let out = []

    for(el1 of arr1){
        for(el2 of arr2) {
            out.push([el1, el2])
        }
    }
    return out
}

console.log(cartProd([1,2], [3,4,5]))