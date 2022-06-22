function pow(x, n){
    result = x;
    for( let i=1; i<n; i++){
        result *= x
    }
    return result;
}

let x = prompt("Введите x", '');
let n
do{
    n = prompt("Введите n", '');
    if ( n < 1 ){
        alert("Степень n должна быть >=1");
    }
}while( n < 1 )

alert(pow(x, n));
