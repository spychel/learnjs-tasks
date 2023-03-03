// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

let sum = (a) => (b) => {
    return +a + +b;
}

console.log(sum(4)(2));