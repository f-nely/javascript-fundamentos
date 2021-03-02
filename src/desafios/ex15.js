function main(a, b, c) {
    
    let ab = a + b,
        ac = a + c,
        bc = b + c,
        eh_triangulo = (ab > c) && (ac > b) && (bc > a);

        if (eh_triangulo) {
            if (a === b && a === c) {
                console.log('Equilátero');
            } else if (a !== b && a !== c && b !== c) {
                console.log('Escaleno');
            } else {
                console.log('Isósceles');
            }
        } else {
            console.log('Não é um triângulo');
        }
}