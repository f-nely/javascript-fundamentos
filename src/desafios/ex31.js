function main(frase) {
    
    function vogal(letra) {
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
           return true; 
        }
        return false;
    }

    let novaFrase = '';

    for(let i = 0; i < frase.length; i++) {
        if (!vogal(frase[i])) {
            novaFrase += frase[i];
        }
    }
    console.log(novaFrase);
}