function f(a) {
    console.log(a)
}

let throttle = (func, ms) => {
    let timeoutIsActive = false;
    let nextArgs, nextContext;
    return function internal(...args) {
        if (timeoutIsActive) {
            nextArgs = args;
            nextContext = this;
            return;
        }
        func.apply(this, args)
        timeoutIsActive = true;
        setTimeout(() => {
            timeoutIsActive = false;
            if (nextArgs !== undefined) {
                internal.apply(nextContext, nextArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    };
};



// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 3000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

setInterval(() => f1000(Math.random()), 500)