function main(a, b, c, d) {
    let conceito;
    let media = (a + b + c +d) /4;

    if (media >= 9 && media <= 10) {
        conceito = 'A';
    } else if (media >= 7.5 && media <= 8.9){
        conceito = 'B';
    } else if (media >= 6.0 && media <= 7.4) {
        conceito = 'C';
    } else if (media >= 4 && media <= 5.9){
        conceito = 'D';
    } else {
        conceito = 'F';
    }

    console.log(conceito);
}

/* function main(a, b, c, d){
    let conceito;
 
    let media = (a + b + c + d) / 4;
 
     if(media >= 9){
         conceito = 'A';
     }else if(media >= 7.5){
         conceito = 'B';
     }else if(media >= 6){
         conceito = 'C';
     }else if(media >= 4){
         conceito = 'D';
     }else{
         conceito = 'F';
     }
 
    console.log(conceito);
 } */