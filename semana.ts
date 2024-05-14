/* Nome: Thávine Gabrielli Nardin
 1- Faça dois vetores, um que contenha cada dia da semana, o outro
que contenha sete atividades/ hobby. Crie uma frase 
para cada dia da semana usando todos os índices dos dois vetores */

//Índice                       0              1              2              3
let meuArray : string[] = [`domingo, segunda-feira, terça-feira,quarta-feira,

    //      4             5           6
    quinta-feira, sexta-feira,sábado`]
    
    //Índice                           0             1            2             3
    let meuArray2 : string[] = [`topíco, aula dança, limpar casa, aula dança,
    
    //      4              5                    6 
    revisar matéria, leio livros, ler livros`];
    
    console.log (`Na ${meuArray[1]} eu faço ${meuArray2[0]} a noite, na ${meuArray[2]} 
    eu jogo ${meuArray2[1]}, ${meuArray[3]} eu tenho ${meuArray2[2]} de novo a tarde, 
    na ${meuArray[4]} eu tenho ${meuArray2[3]} a noite também, ${meuArray[5]} eu tenho
     ${meuArray2[4]}, ${meuArray[6]} eu ${meuArray2[5]} e ${meuArray[0]} eu saio e ${meuArray2[6]}.`)