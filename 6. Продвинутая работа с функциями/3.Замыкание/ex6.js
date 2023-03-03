
// Напишите функцию byField, чтобы при сортировке вместо функции мы просто писали byField(fieldName)
let displayUsers = () => {
    console.log("/********************************/");
    users.forEach(user => {
        console.log(` ${user.name} ${user.surname} ${user.age}`);
    });
    console.log("/********************************/");
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

let byField = (fieldName) => {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('name'));

displayUsers()

users.sort(byField('age'));

displayUsers()
