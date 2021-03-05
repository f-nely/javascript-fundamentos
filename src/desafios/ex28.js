function main(numeros) {
    
    let menor = numeros[0],
        maior = numeros[1];
    for(let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    console.log(menor);
    console.log(maior);

}