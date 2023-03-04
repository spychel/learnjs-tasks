// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbersWithInterval(from, to) {
    let current = from;
    let timer = setInterval(() => {
        console.log(current);
        if ( current === to) {
            clearInterval(timer);
        }
        current++;
    }, 1000);
};

function printNumbersWithTimeout(from, to) {
    let current = from;
    
    setTimeout(function internal() {
        console.log(current);
        if ( current < to) {
            setTimeout(internal, 1000);
        }
        current++;
    }, 1000);
};

let from = 5;
let to = 10;

console.log("setInterval");
printNumbersWithInterval(from, to);

setTimeout(() => {
    console.log("setTimeout");
    printNumbersWithTimeout(from, to);
}, (to - from + 2) * 1000);
