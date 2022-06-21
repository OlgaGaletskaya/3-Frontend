let nameJava = prompt("Какое «официальное» название JavaScript?", "")

let message = (nameJava == "ECMAScript") ? "" : ""
if (nameJava == "ECMAScript") {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}