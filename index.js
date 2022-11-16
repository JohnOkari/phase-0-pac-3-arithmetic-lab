number = 10;
function add(){
    return (number +=5 );
}

function subtract(){
    return (number -=5 );
}

function multiply(){
    return(number *= 2);
}

function divide(){
    return(number /= 2);
}

function add(a, b){
    return(a + b);
}

function subtract(a, b){
    return(a - b);
}

function multiply(a, b){
    return (a * b);
}

function divide(a, b){
    return (a / b);
}

let n = 10;
function increment(n){
    return ++n;
}

function  decrement(n){
    return --n;
}

// function makeInt(n){
//     parseInt(n, 10);    
// }

// function preserveDecimal(n){
//     parseFloat("n")
// }


function makeInt(n) {
    n = parseInt(n, 10);
    return n;
 }
 
 function preserveDecimal(n){
    n = parseFloat(n);
    return n;
 }

add();
subtract();
multiply();
divide();
add(a, b);
subtract(a, b);
multiply(a, b);
divide(a, b);
increment(n);
decrement(n);
makeInt(n);
preserveDecimal(n);