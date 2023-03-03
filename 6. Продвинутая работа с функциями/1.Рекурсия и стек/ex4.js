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
    console.log(list.value);
    if (list.next !== null)
        printListRecursion(list.next);
};

function printListLoop(list) {

    while (list) {
        console.log(list.value);
        list = list.next;
    }
};

console.log(`Напишите функцию printList(list), которая выводит элементы списка по одному.\n`
            + `Сделайте два варианта решения: используя цикл и через рекурсию.`
);
console.log("\nЧерез рекурсию");
printListRecursion(list);
console.log("\nС использованием цикла.");
printListLoop(list);