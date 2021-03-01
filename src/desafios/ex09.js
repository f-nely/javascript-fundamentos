function main(a, b){

    let c = a;
    a = b;
    b = c;

    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
}