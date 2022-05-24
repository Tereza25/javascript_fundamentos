const livros = ["Angular", "Node.js", "Clean code"];

const localLivros = [3, 4, 1];

const listaLocalELivros = [livros, localLivros];

// console.log(`O livro ${listaLocalELivros[0][0]}, está na prateleira: ${listaLocalELivros[1][0]}`);

// includes() e indexOf();

// console.log(livros.includes("javascript"));
// console.log(livros.indexOf("javascript"));

// função de busca

const exibeLocalLivros = (nomeDoLivro) => {
  if (listaLocalELivros[0].includes(nomeDoLivro)){
    let indice = listaLocalELivros[0].indexOf(nomeDoLivro)
    return `O livro ` + listaLocalELivros[0][indice] + `, está na prateleira ` + listaLocalELivros[1][indice]
  } else {
    `O livros não está cadastrado`
  }
}

console.log(exibeLocalLivros("Clean code"));