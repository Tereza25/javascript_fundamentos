const livros = ["Javascript Assertivo", "Engenharia de Testes", "Clean code", "Scrum", "Guia HTML5 e CSS3", "MongoDB"];

const tamanhoLivros = livros.length;

const corredorA1 = livros.slice(0, tamanhoLivros/2);

const corredorA2 = livros.slice(tamanhoLivros/2);

console.log(`Os livros do corredor A1 são:`, corredorA1);
console.log(`Os livros do corredor A2 são:`, corredorA2);

