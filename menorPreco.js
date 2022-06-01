import lanches from './listaLanches.js';

let maisBarato = 0;

for (let atual = 0; atual < lanches.length; atual++) {
  if (lanches[atual].preco < lanches[maisBarato].preco){
    maisBarato = atual
  }
};

console.log(`O lanche mais barato é ${lanches[maisBarato].lanche}, 
custa ${lanches[maisBarato].preco}.`);
