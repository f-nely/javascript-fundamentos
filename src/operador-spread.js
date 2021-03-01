function minhaFuncao() {
    return {
        cor: 'preto',
        tamanho: 15,
        usando: false
    };
}

/* let meuLapis = minhaFuncao();

console.log(meuLapis); */

let {tamanho, ...outrasPropriedades} = minhaFuncao();

console.log(tamanho);
console.log(outrasPropriedades);
