let sum = function (a) {
    let currentSum = a;
    function internal(b) {
        currentSum += b;
        return internal;
    }

    internal.toString = () => currentSum;

    return internal;
}

let log = (str) => console.log(JSON.parse((str)))

log(sum(1)(2) == 3); // 1 + 2
log(sum(1)(2)(3) == 6); // 1 + 2 + 3
log(sum(5)(-1)(2) == 6)
log(sum(6)(-1)(-2)(-3) == 0)
log(sum(0)(1)(2)(3)(4)(5) == 15)