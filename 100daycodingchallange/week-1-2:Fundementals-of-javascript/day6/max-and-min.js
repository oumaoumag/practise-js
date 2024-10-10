function min(n) {
    let min = n[0]; // start with the first element

    for (i = 0; i < n.length;i++) {
        min = n[i] < min ? n[i] : min; // Update min is arr[i] is smaller
    }
    return min;
}

console.log(min([9,7,5,8,2, 0, 3,4,5,6,7,7,8]));

function max(n) {
    let max = n[0]; // start with the first element

    for (i = 0; i < n.length;i++) {
        max = max <= n[i] ? n[i] : max; // Update max if arr[i] is larger 
    }
    return max;
}

console.log(max([9,7,5,8,2,3,4, 0, 5,6,7,7,8]));