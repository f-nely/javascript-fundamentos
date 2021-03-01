let precos = [2, 1, 5, 3, 8, 4];

/* // adiciona elemento no final do array
precos.push(1);
precos.push(6);
precos.push(9);

// adiciona elemento no começo do array
precos.unshift(2);
 */

/* // remove último elemento do array
precos.pop();
// remove primeiro elemento do array
precos.shift();
*/

/* // apaga o quarto elemento do array
precos.splice(4, 1)
// apaga o quarto elemento do array e substitui por 'a'
precos.splice(4, 1, 'a');
 */

// imprime última posição do array
//console.log(precos.length - 1);

// imprime quantidade de elementos
//console.log(precos.length);

/* // pega os primeiros três elementos e aguarda nas variáveis preco1, preco2, preco3 
let [preco1, preco2, preco3] = precos;
console.log(preco1, preco2, preco3); */

/* // operador spread
let [preco1, preco2, ...preco3] = precos;
console.log(preco1, preco2, preco3); */

/* // clona um array
let novoArray = [...precos];

console.log(novoArray);
 */


function soma(numero1, nurero2) {
    return numero1 + nurero2;
}

let numeros = [1, 9];

console.log(soma(...numeros));