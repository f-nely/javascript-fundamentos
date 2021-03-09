function criarObjeto() {
    return {
        raca: "Golden retriever",
        latir: function() {
            console.log('au au');
        }
    }
}

const cachorro = criarObjeto();
console.log(cachorro.raca);
cachorro.latir();

/* function criarObjeto() {
    return {
        raca: "Golden retriever",
        latir: () => {
            console.log('au au');
        }
    }
} */