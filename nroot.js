function func(mid, n, m) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = ans * mid;
        if (ans > m) return 2;
    }
    if (ans === m) return 1;
    return 0;
}

function NthRoot(n, m) {
    let low = 1, high = m;
    while (high - low >= 1e-9) {
        let mid = (low + high) / 2;
        let midN = func(mid, n, m);
        if (midN === 1) {
            return mid;
        } else if (midN === 0) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low
    // return -1;
}

let n = 3, m = 27;
let ans = NthRoot(n, m);
console.log("The answer is: " + ans);

