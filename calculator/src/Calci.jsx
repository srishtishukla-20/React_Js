function add(a,b){
    let sum= a+b;
    return sum;
}

function sub(a,b){
    let diff= a-b;
    return diff;
}

function multi(a,b){
    let product= a*b;
    return product;
}

function div(a,b){
    let divi= a/b;
    divi=divi.toFixed(2);
    return divi;
}


export {add,sub,multi,div};