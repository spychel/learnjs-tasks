function fibRecursion(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fib(n - 1) + fib(n - 2);
}

function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prevValue = 1,
        prevPrevValue = 0;
    for (let i = 2; i <= n; i++) {
        let currentValue = prevPrevValue + prevValue;
        prevPrevValue = prevValue;
        prevValue = currentValue;
    }

    return prevValue;
}

console.log("Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.");
let start = Date.now();
console.log(fib(77));
console.log("Время выполнения функции " + (Date.now() - start) + "ms");
let end = Date.now();
