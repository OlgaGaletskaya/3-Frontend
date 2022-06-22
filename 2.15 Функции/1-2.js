//1. Функции работают одинаково

//2
//Используя оператор ?
  function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }
//Используя оператор ||
  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }