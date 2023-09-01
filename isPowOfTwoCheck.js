function isPowOfTwoCheck(n) {
    if(n == 1) return true
    while(n >= 2) {
        if(n == 2) return true
        else n /= 2
    }
    return false
}

console.log(isPowOfTwoCheck(128))