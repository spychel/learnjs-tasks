function pow(x, n) {
    if (n == 0) return 1;
    let result = x;
    for (let i = 1; i < n; i++)
        result *= x;
    return result;
}

let x = prompt("Введите x?");
let n = prompt("Введите n?");
alert(`Результат возведения ${x} в степень ${n} равен ${pow(x, n)}`)