// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
// function sayHi() {
//     alert( this.name );
//   }
//   sayHi.test = 5;
  
//   let bound = sayHi.bind({
//     name: "Вася"
//   });
  
//   alert( bound.test ); // что выведет? почему?

// Выведет undefined потому что bound это функция sayHi привязанная к контексту введенному в bind и у него нет свойства test

function sayHi() {
    console.log( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
  });
  
  console.log( bound.test);
  bound()