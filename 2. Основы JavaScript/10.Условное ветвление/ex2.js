const question = "Какое «официальное» название JavaScript?";
let correctAnswer = "ECMAScript";

let userAnswer = prompt(question);

if (userAnswer == correctAnswer) {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}