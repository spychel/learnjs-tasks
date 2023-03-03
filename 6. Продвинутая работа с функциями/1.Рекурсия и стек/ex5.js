let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListRecursion(list) {
    if (list.next !== null)
        printListRecursion(list.next);
    console.log(list.value);
};

function printListLoop(list) {
    let acc = [];
    while (list) {
        acc.unshift(list.value)
        list = list.next;
    }
    acc.forEach(element => {
        console.log(element);
    });
};

console.log(`Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.\n`
    + `Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.`
);
console.log("\nЧерез рекурсию");
printListRecursion(list);
console.log("\nС использованием цикла.");
printListLoop(list);