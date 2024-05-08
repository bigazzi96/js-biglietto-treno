let km = prompt('Quanti chilometri devi percorrere?');
console.log(km);

let age = prompt('Quanti anni hai');
console.log(age);

let fullprice = km * 0.21;
console.log(fullprice);

let finalprice;

if (age > 65) {
    finalprice = (fullprice / 100 * 42).toFixed(2);
}
else if (age < 18){
    finalprice = (fullprice / 100 * 21).toFixed(2);
}
else{
    finalprice = fullprice.toFixed(2);
}

console.log(finalprice);

document.getElementById('prezzo').innerHTML += finalprice + '€';

