function sumToWithLoop(n) {
    let acc = 0;

    for(let i = 1; i <= n; i++) {
        acc += i;
    }

    return acc;
}

function sumToWithRecursion(n) {
    if (n === 1) return 1;

    return n + sumToWithRecursion(n - 1);
}

function sumToWithArithmeticProgression(n) {
    return (1 + n) / 2 * n;
}

console.log("Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n");
console.log("------------ n = 5 --------------");

let n = 5;

console.log("\nС использованием цикла.");
console.log("Результат работы функции: при n=5 сумма чисел = " + sumToWithLoop(n));

console.log("\nЧерез рекурсию");
console.log("Результат работы функции: при n=5 сумма чисел = " + sumToWithRecursion(n));

console.log("\nС использованием формулы арифметической прогрессии");
console.log("Результат работы функции: при n=5 сумма чисел = " + sumToWithArithmeticProgression(n));