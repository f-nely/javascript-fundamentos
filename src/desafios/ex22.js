function main(tamanho) {
    
    for (let linha = 0; linha < tamanho; linha ++) {
        let linhaMatriz = '';
        for (let coluna = 0; coluna < tamanho; coluna++) {
            linhaMatriz += linha === coluna ? '1' : '0';
        }
        console.log(linhaMatriz);
    }
}