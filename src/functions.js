// variável global
// global.a = 7 no node
window.a = 7;

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(a, 18));

let hi = function() {
    console.log('Hello, World!');
};

//hi();

const button = document.querySelector('button');
button.addEventListener('click', hi);

//console.log('começou');
setTimeout(hi, 1000);

let myFunction = () => {
    console.log("I'm a arrow function");
}

myFunction();

let dobro = (numero) => {
    return numero * 2;
}

console.log(dobro(3));

let dobroArrow = numero => numero * 2;

console.log(dobroArrow(4));