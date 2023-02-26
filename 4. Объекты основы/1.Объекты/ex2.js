//Для перебора всех свойств объекта используется цикл for..in
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}