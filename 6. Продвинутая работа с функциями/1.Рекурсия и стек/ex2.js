function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log("Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.");
let n = 5;
console.log("Результат работы функции: факториал от 5 = " + factorial(n));