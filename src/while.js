/* let j = 10;

while (j > 0) {
    console.log(j);
    j--;
} */

var palavra = 'carro',
    letra = 'r',
    total = 0,
    totalAProcurar = 3,
    indice = 0;

while (total < totalAProcurar && indice < palavra.length) {
    //console.log(palavra[indice]);
    if (palavra[indice] === letra) {
        total++;
    }
    indice++;
}

if (total >= totalAProcurar) {
    console.log('SIM');
} else {
    console.log('NÃO')
}