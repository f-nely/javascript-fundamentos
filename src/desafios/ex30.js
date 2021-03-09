function main(procurado, ...numeros) {
    for(let i = 0; i < numeros.length; i++) {
        if (numeros[i] !== procurado) {
            console.log(numeros[i]);
        }
    }
    
}