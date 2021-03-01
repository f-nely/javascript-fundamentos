let lapis = {
    cor: 'preto',
    tamanho: 15,
    escrever(){
        console.log('Escrevendo..')
    },
    apagar(){
        console.log('Apagando..')
    }
}

/* // acessando propriedade
console.log(lapis.cor);
console.log(lapis['tamanho']);
let propriedade = 'cor';
console.log(lapis[propriedade]); */

// executando método
//lapis.escrever();


// criando novas propriedades
/* lapis.ponta = 0.5;
console.log(lapis.ponta); */
lapis['ponta'] = 0.5;
//console.log(lapis['ponta']);
//console.log(lapis);

/* // apagar propriedade
delete lapis.ponta;
console.log(lapis); */

// mostra todas as propriedades do objeto
//console.log(Object.keys(lapis));

// transforma objeto em json
console.log(JSON.stringify(lapis));

// transforma json em objeto
console.log(JSON.parse('{"cor":"preto","tamanho":15,"ponta":0.5}'));