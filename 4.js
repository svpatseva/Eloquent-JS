function min (a, b) {
    if (a < b)
        return a;
    else (a > b)
        return b;
}

//return (a < b) ? a : b; то же самое

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10