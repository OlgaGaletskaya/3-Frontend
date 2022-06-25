function sumTo(n) { //Решение с помощью цикла
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }


function sumTo(n) { //Решение через рекурсию
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  
function sumTo(n) { //Решение по формуле
    return n * (n + 1) / 2;
  }
  
  alert( sumTo(100) );