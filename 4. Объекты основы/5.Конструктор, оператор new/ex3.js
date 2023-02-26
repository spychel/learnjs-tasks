function Accumulator(initialValue) {
    this.value = initialValue;
    this.read = function() { 
        this.value += +prompt("Введите значение"); 
    }
}

let accumulator = new Accumulator(1);

accumulator.read(); 
accumulator.read(); 
alert(accumulator.value);