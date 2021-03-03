function fatorial(numero) {
    
    let multiplicacao = '';
    let total = 1;

    for (let i = numero; i > 0; i--) {
        if (i !== numero) {
            multiplicacao += ` x ${i}`;
        } else {
            multiplicacao += numero;
        }
        total *= i;
    }

    console.log(`${numero}! = ${multiplicacao} = ${total}`);
}