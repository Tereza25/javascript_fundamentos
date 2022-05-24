const livros = ["Javascript Assertivo", "Engenharia de Testes", "Clean code", "Scrum", "Guia HTML5 e CSS3", "MongoDB"];

const atualizandoLivros = livros.splice(0, 2, "Express")

console.log(atualizandoLivros);

console.log(livros);


