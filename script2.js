var a = 1;

var b = 2; 

console.log("A è uguale: "+a)
console.log("B è uguale: "+b)

var c = 0;

c = a; // ora c = 1

a = b; // ora a è uguale a 2

b = c; // ora b assume il valore di c che è quello di a

console.log("A è uguale: "+a)
console.log("B è uguale: "+b)

a = b;
b = a;

console.log("A è uguale: "+a)
console.log("B è uguale: "+b)