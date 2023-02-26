let calculator = {
    firstValue: 0,
    secondValue: 0,
    sum() {
        return this.firstValue + this.secondValue;
    },
    mul() {
        return this.firstValue * this.secondValue;
    },
    read() {
        this.firstValue = +prompt("Введите первое значение?", '');
        this.secondValue = +prompt("Введите второе значение?", '');
    }

  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );