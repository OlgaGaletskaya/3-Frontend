let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 
    let j=2;
    while (j<i && i%j) {
        j++;
    }
    if (j == i) {
        console.log(i)
    }
}
