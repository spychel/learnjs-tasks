let emptyObject = {}

function A() { return emptyObject; } // return с объектом возвращает этот объект, во всех остальных случаях возвращается this
function B() { return emptyObject; }

let a = new A();
let b = new B();

alert(a == b); // true