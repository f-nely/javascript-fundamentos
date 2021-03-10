
const elevador = {
    totalAndares: 3,
    andarAtual: 0,
    subir(){
        if (elevador.andarAtual < elevador.totalAndares) {
            elevador.andarAtual++;
        }
        console.log(elevador.andarAtual);
    },
    descer(){
        if (elevador.andarAtual > 0) {
            elevador.andarAtual--;
        }
        console.log(elevador.andarAtual);
    }
}

console.log(elevador.andarAtual);
console.log(elevador.totalAndares);
elevador.subir();
elevador.descer();
elevador.descer();
elevador.subir();
elevador.subir();
elevador.subir();
elevador.subir();