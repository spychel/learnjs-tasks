let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(pockets.pen)
console.log(pockets.glasses)

/*Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? 
При необходимости составьте цепочки поиска и сравните их. */
console.log(pockets.glasses)
console.log(head.glasses)

/* Думал что напрямую быстрее, чем через цепочки прототипов, оказалось что без разницы */

