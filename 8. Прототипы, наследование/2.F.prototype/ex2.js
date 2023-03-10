function Rabbit() {}
Rabbit.prototype = {
    eats: true,
    constructor: Rabbit
  };

let obj = new Rabbit();
console.log(obj.eats);
let obj2 = new obj.constructor();
console.log(obj2.eats);
// Всё нормально отработает

function RabbitModified() {}
RabbitModified.prototype = {
    eats: true,
    constructor: Rabbit
  };

RabbitModified.prototype.constructor = null;

obj = new RabbitModified();
console.log(obj.eats);
obj2 = new obj.constructor();
console.log(obj2.eats);
// Выведет ошибку TypeError: obj.constructor is not a constructor
// потому что мы затёрли конструктор