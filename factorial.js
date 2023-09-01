function factorial(n) {
    let ans = 1
    for(let i = 1; i<=n; i++) {
        ans *= i
    }
    return ans
}

console.log(factorial(6))