function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log(user.ref.name); // Каким будет результат?
//Выведет undefined, потому что ссылка this формуриется на момент вызова, а в первом случае она вызывается у makeUser(), а у функции нет свойств
//Чтобы нормально отработало нужно сделать так

function newMakeUser() {
    return {
        name: "John",
        ref() { return this; }
    };
}

let newUser = newMakeUser();
console.log(newUser.ref().name);