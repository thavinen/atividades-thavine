console.clear();
const teclado = require(`prompt-sync`)();

for (let r = 1000; r <= 2000; r++) {
    if (r % 11 == 2) {
        console.log(`O Resto é ${r}`);
    }
}