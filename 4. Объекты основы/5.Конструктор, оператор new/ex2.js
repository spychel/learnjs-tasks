function Calculator() {
    this.firstValue = 0;
    this.secondValue = 0;
    this.sum = function () {
        return this.firstValue + this.secondValue;
    };
    this.mul = function () {
        return this.firstValue * this.secondValue;
    };
    this.read = function () {
        this.firstValue = +prompt("Введите первое значение?", '');
        this.secondValue = +prompt("Введите второе значение?", '');
    };

};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );