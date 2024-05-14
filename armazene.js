console.clear();
var teclado = require("prompt-sync")();
var numeros = new Array();
var maior = 0;
for (var x = 0; x < 10; x++) {
    numeros[x] = parseInt(teclado("digite o n\u00FAmero do \u00EDndice ".concat(x, " \n                                                      do Arrey")));
}
for (var i = 0; i < 10; i++) {
    if (numeros[i] > maior) { //0 > 20
        maior = numeros[i];
    }
}
//console.clear();
console.log("O maior n\u00FAmero \u00E9 ".concat(maior));
