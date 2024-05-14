console.clear();
const teclado = require(`prompt-sync`)();

let vetor: number [] = Array (10);
let crescente = 0;

for (let x = 0; x < 10; x++){
    vetor[x] = parseInt(teclado(`Digite os números ${x}: `));
    for (let y = 0; y <= 10; y++){
        if (vetor[x] < vetor[y]){
        crescente = vetor[x];
        vetor[x] = vetor[y];
        vetor[y] = crescente;
    }
    }
}

for (let x = 1; x <= 10; x++){
    console.log(`Em ordem crescente ${vetor[x]}`);
}