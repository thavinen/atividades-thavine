/* Nome: Ludmila de Azevedo Silva
 1- Faça dois vetores, um que contenha cada dia da semana, o outro
que contenha sete atividades/ hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores */
//Índice                       0              1              2              3
var meuArray = ["domingo, segunda-feira, ter\u00E7a-feira,quarta-feira,\n\n    //      4             5           6\n    quinta-feira, sexta-feira,s\u00E1bado"];
//Índice                           0             1            2             3
var meuArray2 = ["top\u00EDco, aula dan\u00E7a, limpar casa, aula dan\u00E7a,\n    \n    //      4              5                    6 \n    revisar mat\u00E9ria, leio livros, ler livros"];
console.log("Na ".concat(meuArray[1], " eu fa\u00E7o ").concat(meuArray2[0], " a noite, na ").concat(meuArray[2], " \n    eu jogo ").concat(meuArray2[1], ", ").concat(meuArray[3], " eu tenho ").concat(meuArray2[2], " de novo a tarde, \n    na ").concat(meuArray[4], " eu tenho ").concat(meuArray2[3], " a noite tamb\u00E9m, ").concat(meuArray[5], " eu tenho\n     ").concat(meuArray2[4], ", ").concat(meuArray[6], " eu ").concat(meuArray2[5], " e ").concat(meuArray[0], " eu saio e ").concat(meuArray2[6], "."));
