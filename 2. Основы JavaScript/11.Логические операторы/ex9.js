let loginQuestion = "Кто там?";
let passwordQuestion = "Пароль?";

let adminLogin = "Админ";
let adminPassword = "Я главный";

let enteredLogin = prompt(loginQuestion);

if (enteredLogin === adminLogin) {

    let enteredPassword = prompt(passwordQuestion);

    if (enteredPassword === adminPassword) {
        alert("Здравствуйте!");
    } else if (enteredPassword === '' || enteredPassword === null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
    
} else if (enteredLogin === '' || enteredLogin === null) {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}