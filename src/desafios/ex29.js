function main(numeros){

    let stringFinal = '';

    for(let i = 0; i < numeros.length; i++) {
        stringFinal += numeros[i] % 2 === 0 ? numeros[i] : '*';
    }
    console.log(stringFinal);
}